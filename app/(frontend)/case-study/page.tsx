// src/app/(frontend)/Anti-Sexual-Harassment/Case-study/page.tsx
import type { Metadata } from "next";
import { CaseStudy } from "@/components/sections/CaseStudySection/CaseStudy";

export const metadata: Metadata = {
  title: "Case Study | Anti-Sexual Harassment",
  description:
    "Explore real case studies on compliance updates, workplace investigations, and trauma-informed practice.",
};

export default function CaseStudyPage() {
  return <CaseStudy />;
}