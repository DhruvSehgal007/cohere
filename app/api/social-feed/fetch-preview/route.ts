import { NextRequest, NextResponse } from "next/server";

/* --- PREVIOUS CODE (Basic cleanHtmlText without hex/decimal emoji decoding) ---
function cleanHtmlText(str: string): string {
  return str
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}
--- END PREVIOUS CODE --- */

function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#x([0-9a-fA-F]+);/gi, (_, hex) => {
      try {
        return String.fromCodePoint(parseInt(hex, 16));
      } catch {
        return "";
      }
    })
    .replace(/&#(\d+);/g, (_, dec) => {
      try {
        return String.fromCodePoint(parseInt(dec, 10));
      } catch {
        return "";
      }
    })
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&nbsp;/gi, " ")
    .replace(/&bull;/gi, "•")
    .replace(/&hellip;/gi, "...")
    .replace(/&ndash;/gi, "–")
    .replace(/&mdash;/gi, "—");
}

function cleanHtmlText(str: string): string {
  if (!str) return "";
  return decodeHtmlEntities(str).replace(/<[^>]*>/g, "").trim();
}

function extractMeta(html: string, name: string): string {
  const reg1 = new RegExp(
    `<meta\\s+[^>]*?(?:property|name)=["'](?:og:|twitter:)?${name}["'][^>]*?content=["']([^"']+)["']`,
    "i"
  );
  const reg2 = new RegExp(
    `<meta\\s+[^>]*?content=["']([^"']+)["'][^>]*?(?:property|name)=["'](?:og:|twitter:)?${name}["']`,
    "i"
  );
  const m = html.match(reg1) || html.match(reg2);
  return m ? cleanHtmlText(m[1]) : "";
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string" || !url.startsWith("http")) {
      return NextResponse.json(
        { success: false, message: "Valid URL is required." },
        { status: 400 }
      );
    }

    const isInstagram = /instagram\.com/i.test(url);
    const platform = isInstagram ? "instagram" : "linkedin";

    let title = "";
    let username = "";
    let avatar = "";
    let description = "";
    let imageUrl = "";
    let likes = 0;
    let postDate = "";

    // ==========================================
    // INSTAGRAM PREVIEW EXTRACTION
    // ==========================================
    if (isInstagram) {
      const igShortcodeMatch = url.match(/(?:p|reel|reels)\/([A-Za-z0-9_-]+)/i);
      const igShortcode = igShortcodeMatch ? igShortcodeMatch[1] : "";

      // Try 1: Instagram Embed endpoint
      if (igShortcode) {
        try {
          const igEmbedRes = await fetch(
            `https://www.instagram.com/p/${igShortcode}/embed/captioned/`,
            {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
              },
              cache: "no-store",
            }
          );

          if (igEmbedRes.ok) {
            const igHtml = await igEmbedRes.text();

            // Extract Username
            const userMatch =
              igHtml.match(/class=["'][^"']*UsernameText[^"']*["'][^>]*>([\s\S]*?)<\/span>/i) ||
              igHtml.match(/class=["'][^"']*Username[^"']*["'][^>]*>([\s\S]*?)<\/a>/i);
            if (userMatch) {
              const u = cleanHtmlText(userMatch[1]);
              username = u.startsWith("@") ? u : `@${u}`;
              title = u.replace(/^@/, "");
            }

            // Extract Avatar
            const igAvatarMatch =
              igHtml.match(/class=["'][^"']*AvatarImage[^"']*["'][^>]*src=["']([^"']+)["']/i) ||
              igHtml.match(/<img[^>]*class=["'][^"']*Avatar[^"']*["'][^>]*src=["']([^"']+)["']/i);
            if (igAvatarMatch) {
              avatar = cleanHtmlText(igAvatarMatch[1]);
            }

            // Extract Post Image
            const igMediaMatch = igHtml.match(
              /<img[^>]*class=["'][^"']*EmbeddedMediaImage[^"']*["'][^>]*src=["']([^"']+)["']/i
            );
            if (igMediaMatch) {
              imageUrl = cleanHtmlText(igMediaMatch[1]);
            }

            // Extract Caption Text
            const captionMatch =
              igHtml.match(/class=["'][^"']*Caption[^"']*["'][^>]*>([\s\S]*?)<\/div>/i) ||
              igHtml.match(/class=["'][^"']*CaptionComments[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
            if (captionMatch) {
              description = cleanHtmlText(captionMatch[1]);
            }

            // Extract Likes
            const likesMatch = igHtml.match(/(\d[\d,.]*)\s+likes/i);
            if (likesMatch) {
              const parsed = parseInt(likesMatch[1].replace(/,/g, "").trim(), 10);
              if (!isNaN(parsed)) likes = parsed;
            }
          }
        } catch (igErr) {
          console.warn("Instagram embed fetch notice:", igErr);
        }
      }

      // Try 2: Direct OpenGraph fetch
      if (!description || !imageUrl) {
        try {
          const directRes = await fetch(url, {
            headers: {
              "User-Agent":
                "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.html)",
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
            cache: "no-store",
          });

          if (directRes.ok) {
            const html = await directRes.text();
            const ogTitle = extractMeta(html, "title");
            const ogDesc = extractMeta(html, "description");
            const ogImg = extractMeta(html, "image");

            if (!imageUrl && ogImg) imageUrl = ogImg;

            /* --- PREVIOUS CODE (Basic Instagram metadata matching before emoji/handle parsing) ---
            if (ogDesc) {
              const likeMatch = ogDesc.match(/([\d,]+)\s+likes/i);
              if (likeMatch && likes === 0) {
                const parsed = parseInt(likeMatch[1].replace(/,/g, ""), 10);
                if (!isNaN(parsed)) likes = parsed;
              }

              const userMatch = ogDesc.match(/-\s*([^()]+)\s*(?:\((@[^)]+)\))?\s*on Instagram/i);
              if (userMatch) {
                if (!title) title = userMatch[1].trim();
                if (!username) {
                  username = userMatch[2] ? userMatch[2].trim() : `@${userMatch[1].trim().replace(/\s+/g, "")}`;
                }
              }

              const quoteMatch = ogDesc.match(/on Instagram:\s*["“]([\s\S]*?)["”]?$/i);
              if (quoteMatch && !description) {
                description = cleanHtmlText(quoteMatch[1]);
              } else if (!description && !ogDesc.includes("likes,") && !ogDesc.includes("See Instagram photos")) {
                description = cleanHtmlText(ogDesc);
              }
            }

            if (!title && ogTitle && !ogTitle.includes("Instagram")) {
              title = cleanHtmlText(ogTitle);
            }
            --- END PREVIOUS CODE --- */

            const decodedTitle = cleanHtmlText(ogTitle);
            const decodedDesc = cleanHtmlText(ogDesc);

            // 1. Extract Author Name & Handle from Title:
            // e.g. "Dhruv Sehgal (@sehgldhruv) • Instagram photo"
            if (decodedTitle) {
              const tm = decodedTitle.match(
                /^([^(@•|:-]+?)(?:\s*\((?:@)?([^)]+)\))?(?:\s*(?:•|\||-|on Instagram).*|$)/i
              );
              if (tm && tm[1]) {
                const candAuthor = tm[1].trim();
                if (candAuthor && candAuthor.toLowerCase() !== "instagram") {
                  title = candAuthor;
                }
              }
              if (tm && tm[2] && !username) {
                username = `@${tm[2].trim()}`;
              }
            }

            // 2. Extract Likes, Comments, Author, Date & Clean Caption from Description:
            // Pattern: "43 likes, 10 comments - sehgldhruv on May 3, 2026: "Akhiyaan Udeek Diyaan....""
            if (decodedDesc) {
              const likeMatch = decodedDesc.match(/([\d,]+)\s+likes/i);
              if (likeMatch && (likes === 0 || !likes)) {
                const parsed = parseInt(likeMatch[1].replace(/,/g, ""), 10);
                if (!isNaN(parsed)) likes = parsed;
              }

              const dateMatch = decodedDesc.match(/\s+on\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/i);
              if (dateMatch && !postDate) {
                postDate = dateMatch[1].trim();
              }

              const descPattern = decodedDesc.match(
                /^(?:[\d,]+\s+likes?,\s+[\d,]+\s+comments?\s+-\s+)?([^\s:]+)\s+on\s+[^:]+:\s*["“]([\s\S]*?)["”]?\.?$/i
              );
              if (descPattern) {
                if (!username && descPattern[1]) {
                  username = `@${descPattern[1].trim()}`;
                }
                if (descPattern[2]) {
                  description = descPattern[2].trim();
                }
              } else {
                const quoteMatch = decodedDesc.match(/["“]([\s\S]*?)["”]/i);
                if (quoteMatch) {
                  description = quoteMatch[1].trim();
                } else if (!description && !decodedDesc.includes("likes,") && !decodedDesc.includes("See Instagram photos")) {
                  description = decodedDesc;
                }
              }
            }

            if (!title && username) {
              title = username.replace(/^@/, "");
            }
          }
        } catch (directErr) {
          console.warn("Instagram direct fetch notice:", directErr);
        }
      }
    }

    // ==========================================
    // LINKEDIN PREVIEW EXTRACTION
    // ==========================================
    // Method 1: Check LinkedIn Embed endpoint to get exact real-time reaction/like count, author, avatar & commentary
    const urnMatch = url.match(/urn:li:(share|activity|ugcPost):\d+/i);
    const actMatch = url.match(/activity-?(\d+)/i);
    const targetUrn = urnMatch ? urnMatch[0] : actMatch ? `urn:li:activity:${actMatch[1]}` : "";

    if (!isInstagram && targetUrn) {
      try {
        const embedRes = await fetch(
          `https://www.linkedin.com/embed/feed/update/${targetUrn}`,
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
            cache: "no-store",
          }
        );

        if (embedRes.ok) {
          const embedHtml = await embedRes.text();
          
          // Extract author name
          const authorNameMatch = embedHtml.match(
            /href=["'][^"']*trk=public_post_embed_feed-actor-name["'][^>]*>([\s\S]*?)<\/a>/i
          );
          if (authorNameMatch) {
            title = cleanHtmlText(authorNameMatch[1]);
          } else {
            const ariaMatch = embedHtml.match(/aria-label=["']View profile for ([^"']+)["']/i);
            if (ariaMatch) title = cleanHtmlText(ariaMatch[1]);
          }

          // Extract author avatar / profile image
          const avatarMatch = embedHtml.match(
            /data-tracking-control-name=["']public_post_embed_feed-actor-image["'][\s\S]*?data-delayed-url=["']([^"']+)["']/i
          );
          if (avatarMatch) {
            avatar = cleanHtmlText(avatarMatch[1]);
          } else {
            const generalAvatar = embedHtml.match(/https:\/\/media\.licdn\.com\/dms\/image\/[^\s"']*profile-displayphoto[^\s"']*/i);
            if (generalAvatar) avatar = cleanHtmlText(generalAvatar[0]);
          }

          // Extract headline / username
          const lockupIdx = embedHtml.indexOf('data-test-id="main-feed-activity-embed-card__entity-lockup"');
          if (lockupIdx !== -1) {
            const lockupSnippet = embedHtml.substring(lockupIdx, lockupIdx + 2000);
            const headlineMatch = lockupSnippet.match(
              /<p[^>]*class=["'][^"']*text-color-text-low-emphasis[^"']*["'][^>]*>([\s\S]*?)<\/p>/i
            );
            if (headlineMatch) {
              const headline = cleanHtmlText(headlineMatch[1]);
              if (headline) username = `@${headline.replace(/\s+/g, "_").toLowerCase()}`;
            }
          }
          if (!username && title) {
            username = `@${title.replace(/\s+/g, "").toLowerCase()}`;
          }

          // Extract real post creation date from Snowflake activity ID
          const activityDigits = (url.match(/activity-?(\d+)/i) || url.match(/activity:(\d+)/i))?.[1];
          if (activityDigits) {
            try {
              const timeMs = Number(BigInt(activityDigits) >> BigInt(22));
              if (timeMs > 1500000000000 && timeMs < Date.now() + 86400000) {
                postDate = new Date(timeMs).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                });
              }
            } catch {
              // fallback to other date strategies
            }
          }

          // Extract real-time reactions / likes
          const reactionMatch = embedHtml.match(
            /data-test-id=["']social-actions__reaction-count["'][^>]*>([\s\S]*?)<\/span>/i
          );
          if (reactionMatch && reactionMatch[1]) {
            const parsed = parseInt(reactionMatch[1].replace(/,/g, "").trim(), 10);
            if (!isNaN(parsed)) {
              likes = parsed;
            }
          }

          // Extract text from embed if available
          const commentaryMatch = embedHtml.match(
            /data-test-id=["']main-feed-activity-embed-card__commentary["'][^>]*>([\s\S]*?)<\/(?:div|p)>/i
          );
          if (commentaryMatch && commentaryMatch[1]) {
            description = cleanHtmlText(commentaryMatch[1]);
          }

          // Extract image from embed meta if available
          const embedImg = extractMeta(embedHtml, "image");
          if (embedImg && !embedImg.includes("favicon") && !embedImg.includes("static.licdn.com/aero")) {
            imageUrl = embedImg;
          }
        }
      } catch (embedErr) {
        console.warn("LinkedIn embed fetch notice:", embedErr);
      }
    }

    // Method 2: Fetch HTML directly pretending to be social crawler for open-graph data
    if (!description || !imageUrl) {
      try {
        const response = await fetch(url, {
          headers: {
            "User-Agent":
              "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.html)",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
          },
          cache: "no-store",
        });

        if (response.ok) {
          const html = await response.text();
          if (!title) title = extractMeta(html, "title");
          if (!description) description = extractMeta(html, "description");
          if (!imageUrl) imageUrl = extractMeta(html, "image");

          if (
            title.toLowerCase().includes("sign up") ||
            title.toLowerCase().includes("log in") ||
            title.toLowerCase() === "linkedin"
          ) {
            title = "";
          }
          if (
            description.toLowerCase().includes("500 million+") ||
            description.toLowerCase().includes("manage your professional identity")
          ) {
            description = "";
          }
        }
      } catch (directErr) {
        console.warn("Direct fetch preview failed:", directErr);
      }
    }

    // Method 3: Fallback to Microlink API if direct fetch didn't give a description or image
    if (!description || !imageUrl) {
      try {
        const microRes = await fetch(
          `https://api.microlink.io?url=${encodeURIComponent(url)}`,
          { cache: "no-store" }
        );
        if (microRes.ok) {
          const microData = await microRes.json();
          if (microData.status === "success" && microData.data) {
            const d = microData.data;
            if (!title && d.title && !d.title.toLowerCase().includes("sign up")) {
              title = d.title;
            }
            if (!description && d.description && !d.description.toLowerCase().includes("500 million+")) {
              description = d.description;
            }
            if (!imageUrl && d.image?.url) {
              imageUrl = d.image.url;
            }
          }
        }
      } catch (microErr) {
        console.warn("Microlink preview fallback failed:", microErr);
      }
    }

    // Clean title if it contains hashtags (e.g. "#hashtag1 #hashtag2 | Person Name")
    if (title && (title.includes("#") || title.includes("|"))) {
      const parts = title.split("|");
      if (parts.length > 1) {
        const candidate = parts[parts.length - 1].trim();
        if (candidate && !candidate.startsWith("#")) {
          title = candidate;
        }
      }
    }

    // Fallback date from image timestamp if available
    if (!postDate && imageUrl) {
      const imgTsMatch = imageUrl.match(/\/0\/(\d{13})\?/);
      if (imgTsMatch) {
        const timeMs = parseInt(imgTsMatch[1], 10);
        if (!isNaN(timeMs) && timeMs > 1500000000000 && timeMs < Date.now() + 86400000) {
          postDate = new Date(timeMs).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          });
        }
      }
    }

    /* --- PREVIOUS CODE (Initial preview return before avatar, author & live likes extraction) ---
    const formattedDate = new Date().toLocaleDateString("en-US", {
      hour: "numeric",
      minute: "numeric",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return NextResponse.json({
      success: true,
      data: {
        platform,
        title: title || "Cohere Compliance",
        username: "@coherecompliance",
        text: description || "",
        likes: 0,
        image: imageUrl || "",
        postUrl: url,
        date: formattedDate,
        fetched: Boolean(description || imageUrl),
      },
    });
    --- END PREVIOUS CODE --- */

    const formattedDate =
      postDate ||
      new Date().toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

    return NextResponse.json({
      success: true,
      data: {
        platform,
        /* --- PREVIOUS CODE (Defaulted title and username to Cohere Compliance in preview) ---
        title: title || "Cohere Compliance",
        username: username || "@coherecompliance",
        --- END PREVIOUS CODE --- */
        title: title || "",
        username: username || "",
        avatar: avatar || "",
        text: description || "",
        likes,
        image: imageUrl || "",
        postUrl: url,
        date: formattedDate,
        fetched: Boolean(description || imageUrl || likes > 0 || avatar),
      },
    });
  } catch (error: unknown) {
    console.error("Fetch preview error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch post preview.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
