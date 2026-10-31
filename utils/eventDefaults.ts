import type { EventContent } from "./eventContent";
import card1 from "@/assets/images/Blogs/InnerBlog/upcomingevent1.png";
import card2 from "@/assets/images/Blogs/InnerBlog/upcomingevent2.png";
import card3 from "@/assets/images/Blogs/InnerBlog/upcomingevent3.png";
import hero from "@/assets/images/Blogs/InnerBlog/bloginner.jpg";
import banner from "@/assets/images/Blogs/Event-banner.png";
import speaker1 from "@/assets/images/OurTeam/team-member.png";
import speaker2 from "@/assets/images/OurTeam/Team-member-large.png";

export interface Speaker { name: string; role: string; image: string }
export interface EventItem { content?: EventContent; createdAt?: string; id: string; title: string; slug: string; image: string; heroImage: string; paragraphs: string[]; speakers: Speaker[]; order: number }
export interface EventSettings { heading: string; description: string; image: string; listingHeading: string }
export const defaultSettings: EventSettings = { heading: "Supporting Organisations Beyond Compliance", description: "We believe that creating safer workplaces requires more than meeting statutory obligations.", image: banner.src, listingHeading: "Upcoming Events" };
const titles = ["Keep It Right - website based training", "The Keep it Right App", "STOP by Cohere @ Keep It Right"];
const slugs = ["keep-it-right-website-based-training", "the-keep-it-right-app", "stop-by-cohere-keep-it-right"];
export const defaultEvents: EventItem[] = Array.from({ length: 9 }, (_, i) => ({
 id: `initial-${i + 1}`, title: titles[i % 3], slug: slugs[i % 3] + (i > 2 ? `-${Math.floor(i / 3) + 1}` : ""), image: [card1, card2, card3][i % 3].src, heroImage: hero.src,
 paragraphs: Array(3).fill("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), order: i + 1,
 speakers: Array.from({ length: 5 }, (_, j) => ({ name: "Dr. Pushkar Singh", role: "lawyer, consultant", image: (j % 2 ? speaker1 : speaker2).src }))
}));
