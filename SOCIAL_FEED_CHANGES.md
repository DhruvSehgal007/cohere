# LinkedIn & Instagram Social Feed Implementation & Changes Documentation

Yeh document detail me explain karta hai ki **LinkedIn aur Instagram Social Feed** feature ke liye project me **kha-kha changes huye hain**, kaise **dono platforms seamlessly integrate** huye hain, aur Dashboard se dono ko kaise manage kiya jata hai.

---

## 📁 Summary of Files Touched

| # | File Path | Status | Purpose |
|---|---|---|---|
| 1 | `components/sections/SocialFeedSection.tsx` | **Modified** | Interactive LinkedIn & Instagram toggle buttons, instant client-side switching, platform-specific card icons (LinkedIn vs IG gradient), and separate fallback datasets. |
| 2 | `utils/models/SocialPost.ts` | **Maintained** | Mongoose Schema & TypeScript interface supporting both `platform: "linkedin" | "instagram"`. |
| 3 | `app/api/social-feed/route.ts` | **Maintained** | Public `GET` API (supports `?platform=linkedin`, `?platform=instagram`, or all posts) and Authorized CRUD endpoints. |
| 4 | `app/api/social-feed/fetch-preview/route.ts` | **Enhanced** | Dual scraper: handles both **LinkedIn** (real-time reaction counts, snowflake published dates, author avatar) AND **Instagram** (shortcode embeds, og tags, caption, images, handles). |
| 5 | `app/dashboard/social-feed/page.tsx` | **Enhanced** | Filter tabs (`All`, `LinkedIn`, `Instagram`), Platform selector (`LinkedIn` / `Instagram` buttons), smart auto-fill that auto-detects platform from pasted link, and platform badges on cards. |
| 6 | `app/dashboard/components/sidebar.tsx` | **Maintained** | "Social Feed" link in Dashboard navigation. |
| 7 | `next.config.ts` | **Updated** | Added `remotePatterns` for `**.licdn.com`, `**.cdninstagram.com`, `**.instagram.com`, and `**.fbcdn.net`. |

---

## 🔍 Detailed File Changes

### 1. `components/sections/SocialFeedSection.tsx`
* **Changes Made:**
  1. **Dual Platform Switcher:** Header me LinkedIn aur Instagram dono circular toggle buttons active hain with active state highlights.
  2. **Platform-Specific Post Cards:**
     * LinkedIn posts par top-right me LinkedIn logo show hota hai.
     * Instagram posts par top-right me Instagram iconic gradient badge (`FaInstagram`) show hota hai.
  3. **Seamless State Management:** Single request se dono platforms ke posts cache ho jate hain taaki tab switch karte hi instant transition ho bina kisi lag ke.

  /* --- PREVIOUS CODE (aspect-[16/10] with default object-cover center which cropped heads/faces) ---
  <div className="w-full aspect-[16/10] overflow-hidden shrink-0 bg-gray-100 mt-auto">
    <img src={post.image} className="w-full h-full object-cover" />
  </div>
  --- END PREVIOUS CODE --- */
  ```

---

### 2. `utils/models/SocialPost.ts`
* **Changes Made:**
  1. Schema me `avatar` (profile picture URL) aur `embedUrl` (LinkedIn embed feed update URL) fields add kiye gaye.
  2. Next.js dev server hot-reloading ke liye model reset logic add kiya gaya taaki newly added fields schema validation me drop na hon.
* **Preserved Commented-Out Code:**
  ```ts
  /* --- PREVIOUS CODE (Original ISocialPost without avatar / embedUrl) ---
  export interface ISocialPost {
    platform: "linkedin" | "instagram";
    postId: string;
    title: string;
    username: string;
    text: string;
    likes: number;
    image: string;
    date: string;
    postUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  --- END PREVIOUS CODE --- */
  ```

---

### 3. `app/api/social-feed/route.ts`
* **Changes Made:**
  1. Full CRUD support:
     * `GET`: Public feed retrieval (homepage ke liye).
     * `POST`: New post creation (Admin cookie ya `CRON_SECRET` authorized).
     * `PUT`: Post update / Live Likes update.
     * `DELETE`: Post remove from MongoDB.
  2. `avatar` aur `embedUrl` fields ko accept aur persist karne ka logic add kiya gaya.
* **Preserved Commented-Out Code:**
  ```ts
  /* --- PREVIOUS CODE (Body destructuring without avatar / embedUrl) ---
  const {
    platform = "linkedin",
    text,
    title = "Cohere Compliance",
    username = "@coherecompliance",
    likes = 0,
    image = "",
    date,
    postUrl = "",
    postId,
  } = body;
  --- END PREVIOUS CODE --- */
  ```

---

### 4. `app/api/social-feed/fetch-preview/route.ts`
* **Changes Made:**
  1. **LinkedIn Embed Extraction:** Public endpoint `https://www.linkedin.com/embed/feed/update/urn:li:activity:...` se:
     * `data-test-id="social-actions__reaction-count"` se **Live Likes** count extract kiya.
     * `data-test-id="main-feed-activity-embed-card__entity-lockup"` se **Author Name** (e.g. `Dhruv Sehgal`) aur **Headline** (e.g. `@developer`) extract kiya.
     * `data-tracking-control-name="public_post_embed_feed-actor-image"` se **Author Profile Picture (Avatar)** URL extract kiya.
  2. **Exact Creation Date Calculation:** LinkedIn Activity ID ke Snowflake bits (`BigInt(activityId) >> 22n`) se post publish hone ka exact date aur time (`Jul 25, 2025, 4:24 PM`) calculate kiya.
  3. **HTML Sanitization & Full Entity Decoding:**
     * Hex entities (e.g. `&#x1f440;` -> 👀, `&#x2763;&#xfe0f;` -> ❣️, `&#x2022;` -> •) aur decimal entities (e.g. `&#064;` -> @) ko real characters/emojis me decode kiya.
  4. **Instagram Smart Metadata Parsing:**
     * Instagram title me se Author Name (e.g. `Dhruv Sehgal`) aur Handle (e.g. `@sehgldhruv`) ko extract karke alag-alag fields me map kiya (generic "Instagram photo" text strip kiya).
     * Description me se `43 likes, 10 comments - username on date:` prefix strip kiya taaki CONTENT me sirf actual clean post caption aur emojis aayen.
     * Actual post published date (e.g. `May 3, 2026`) extract kiya.
* **Preserved Commented-Out Code:**
  ```ts
  /* --- PREVIOUS CODE (Initial preview return before avatar, author & live likes extraction) ---
  const formattedDate = new Date().toLocaleDateString("en-US", { ... });
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
  ```

---

### 5. `app/dashboard/social-feed/page.tsx`
* **Changes Made:**
  1. **Strict Cross-Platform Safety Guards:**
     * **Tab Switching Conflict Alert:** Agar user LinkedIn ka link daalne ke baad Instagram button click karta hai, toh ek clear warning show hoti hai (`⚠️ Platform changed to Instagram: Previous LinkedIn link & details were cleared`) aur conflicting link/preview reset ho jata hai taaki LinkedIn ka data Instagram me na ghuse. Vice-versa Instagram se LinkedIn switch karne par bhi hota hai.
     * **Auto-Fill Link Validation:** LinkedIn form par Instagram link paste karne par ya Instagram form par LinkedIn link paste karne par clear error show hota hai aur auto-fill block ho jata hai.
     * **Form Submit Validation:** Cross-platform URL submission block ho jati hai with informative error messages.
  2. **Platform Badges:** Har card par LI / IG badge show hota hai.
  3. **Preserved Commented-Out Code:**
     * Purana silent-switch code aur direct platform switchers `/* --- PREVIOUS CODE ... --- */` blocks me preserve kiye gaye hain.

---

### 6. `app/dashboard/components/sidebar.tsx`
* **Changes Made:**
  Sidebar ke `menuItems` array me **"Social Feed"** (`/dashboard/social-feed`) add kiya gaya taaki admin dashboard se aasani se access kar sake.

---

### 7. `next.config.ts`
* **Changes Made:**
  `remotePatterns` me `hostname: "**.licdn.com"` add kiya gaya taaki LinkedIn CDN se aane wali images aur profile pictures Next.js me bina CORS/host error ke render ho sakein.
* **Preserved Commented-Out Code:**
  ```ts
  /* --- PREVIOUS CODE (Before allowing LinkedIn remote images) ---
  const nextConfig: NextConfig = {
    async redirects() {
      return [
        {
          source: "/employeement-labour",
          destination: "/employment-and-labour",
          permanent: true,
        },
      ];
    },
  };
  --- END PREVIOUS CODE --- */
  ```

---

## 💡 How It Works Now

1. **Adding a Post:**
   * Dashboard URL: `/dashboard/social-feed`
   * Click **"Add New Post"**
   * Paste LinkedIn post link (e.g. `https://www.linkedin.com/feed/update/urn:li:activity:7354464180223037441/`)
   * Click **"Auto-Fill"**
   * Saari details automatically bhar jayengi:
     * Author Name: `Dhruv Sehgal`
     * Handle: `@developer`
     * Avatar: Profile photo preview
     * Actual Published Date: `Jul 25, 2025, 4:24 PM`
     * Real Likes: `24`
     * Post Caption & Photo
   * Click **"Save Post"**!
2. **Refreshing Live Likes:**
   * Jab bhi LinkedIn par likes badhein, Dashboard me post ke samne **🔄 (Sync Likes)** button dabayein, likes instant sync ho jayenge!
3. **Frontend Rendering:**
   * Homepage par carousel dynamically MongoDB se posts show karta hai native Cohere card style me.
