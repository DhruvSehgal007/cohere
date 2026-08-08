// src/components/CaseStudy/CaseStudy.data.ts
import { User, Briefcase, CalendarDays, Clock, Award, LayoutGrid } from "lucide-react";

export type CaseData = {
  id: string;
  label: string;
  badge: string;
  details: { client: string; attorney: string; start: string; time: string; result: string; other: string };
  summaryTitle: string;
  intro: string[];
  problemTitle: string;
  problem: string;
  bullets: string[];
  approachTitle: string;
  approach: string;
  attorney: { name: string; role: string; why: string };
  solutions: { label: string; heading: string; body: string; outcome: string }[];
};

export const CASES: CaseData[] = [
  {
    id: "compliance",
    label: "Compliance Update",
    badge: "Compliance Update",
    details: {
      client: "Jack Terrel",
      attorney: "Andrew Kinser",
      start: "24/04/2021",
      time: "5 Months",
      result: "Won",
      other: "Your Custom",
    },
    summaryTitle: "Summary Of The Case Studies",
    intro: [
      "A mid-size manufacturer faced a sweeping regulatory update that touched every part of its reporting stack. We mapped each new clause to an internal control owner and rebuilt the evidence trail from the ground up.",
      "Within five months the client cleared its audit with zero material findings and cut the time spent on quarterly filings by nearly half.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Controls were documented across six disconnected spreadsheets, so no one could prove when a policy changed or who approved it. Regulators flagged the gap during a routine review.",
    bullets: [
      "Litigation amount up to 2 million dollars",
      "The client is a person who is not completely right",
      "The case has heavy fees that need to be renewed",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "We built a single control register, assigned named owners, and layered automated evidence capture on top. Weekly working sessions kept legal, finance and operations aligned until sign-off.",
    attorney: {
      name: "Andrew Kinser",
      role: "Lawyer, Counselor",
      why: "Why choose this lawyer: Etiam placerat magna semper, fermentum ipsum ut, tincidunt lectus. Sed laculis tortor quam, eget varius lorem facilisis quis. Duis laoreet, arcu et fringilla bibendum neque justo semper.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Lawsuit",
        body: "A unified control register replaced six spreadsheets, giving the board a single source of truth for every policy change and approval.",
        outcome: "Audit closed with zero material findings and a reusable compliance playbook.",
      },
      {
        label: "Solutions 2",
        heading: "Process Redesign",
        body: "Quarterly filings were rebuilt around automated evidence capture, removing manual collection from three separate teams.",
        outcome: "Filing effort dropped 46% quarter over quarter.",
      },
      {
        label: "Solutions 3",
        heading: "Ongoing Monitoring",
        body: "Monthly control testing and an exception dashboard keep drift visible long after the engagement ended.",
        outcome: "No repeat findings in the following two review cycles.",
      },
    ],
  },
  {
    id: "annual",
    label: "Annual Reporting",
    badge: "Annual Reporting",
    details: {
      client: "Marta Velez",
      attorney: "Priya Raman",
      start: "11/01/2022",
      time: "8 Months",
      result: "Settled",
      other: "Fixed Fee",
    },
    summaryTitle: "Summary Of The Annual Report Review",
    intro: [
      "A listed group needed its annual report restated after a subsidiary consolidation was recorded in the wrong period. Shareholders had already received the draft.",
      "We coordinated the restatement, the disclosure note and the investor briefing in a single eight-month track.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Two accounting teams applied different consolidation dates, producing a 4.2 million discrepancy that surfaced only during external review.",
    bullets: [
      "Restatement exposure of 4.2 million dollars",
      "Draft report already circulated to shareholders",
      "Two subsidiaries using conflicting close calendars",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "We reconciled both close calendars, drafted the correcting disclosure with the auditors in the room, and rehearsed the investor Q&A before publication.",
    attorney: {
      name: "Priya Raman",
      role: "Partner, Corporate Reporting",
      why: "Priya has restated financials for three listed groups and works fluently with both audit committees and investor relations.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Restatement",
        body: "The corrected report was published on schedule with a plain-language disclosure note agreed by the auditors.",
        outcome: "No regulatory penalty and no delay to the AGM.",
      },
      {
        label: "Solutions 2",
        heading: "Calendar Alignment",
        body: "Both subsidiaries moved onto a shared close calendar with a locked cut-off enforced in the ledger.",
        outcome: "Consolidation discrepancies fell to zero.",
      },
      {
        label: "Solutions 3",
        heading: "Investor Communication",
        body: "A rehearsed briefing pack answered the twelve questions analysts were most likely to raise.",
        outcome: "Share price moved less than one percent on publication day.",
      },
    ],
  },
  {
    id: "workplace",
    label: "Workplace Investigations",
    badge: "Workplace Investigations",
    details: {
      client: "Confidential",
      attorney: "Dana Whitlock",
      start: "03/09/2023",
      time: "3 Months",
      result: "Resolved",
      other: "Retainer",
    },
    summaryTitle: "Summary Of The Investigation",
    intro: [
      "An anonymous report alleged favouritism in promotion decisions across a 400-person division. Leadership needed findings that would survive scrutiny.",
      "We ran a structured, independent investigation and delivered findings the works council accepted without challenge.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Earlier internal enquiries were run by the same managers named in the complaint, which destroyed trust in the outcome before it was written.",
    bullets: [
      "Eleven interviews across four reporting lines",
      "Prior enquiry conducted by an implicated manager",
      "Works council requested independent oversight",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "An external panel handled every interview under a written protocol, with evidence stored in a sealed repository and a findings report reviewed by counsel before release.",
    attorney: {
      name: "Dana Whitlock",
      role: "Counsel, Employment",
      why: "Dana specialises in independent workplace investigations and has never had a finding overturned on procedure.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Investigation",
        body: "Two of five allegations were substantiated, with clear evidence citations for each conclusion.",
        outcome: "Findings accepted by the works council without appeal.",
      },
      {
        label: "Solutions 2",
        heading: "Promotion Framework",
        body: "Promotion criteria were rewritten with scored, documented panels replacing manager discretion.",
        outcome: "Grievances about promotions dropped to one in the next cycle.",
      },
      {
        label: "Solutions 3",
        heading: "Speak-Up Channel",
        body: "A genuinely independent reporting line now routes complaints outside the affected management chain.",
        outcome: "Report volume rose while escalation time halved.",
      },
    ],
  },
  {
    id: "internal",
    label: "Internal Committees",
    badge: "Internal Committees",
    details: {
      client: "Halvorsen Group",
      attorney: "Marcus Ellery",
      start: "17/02/2022",
      time: "6 Months",
      result: "Approved",
      other: "Advisory",
    },
    summaryTitle: "Summary Of The Governance Review",
    intro: [
      "Three committees held overlapping mandates, so decisions were re-litigated for weeks and nobody owned the final call.",
      "We redrew the charters and cut the decision path from five approvals to two.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Risk, audit and ethics committees each claimed authority over vendor approvals, leaving decisions stalled an average of 31 days.",
    bullets: [
      "Average approval cycle of 31 days",
      "Three overlapping committee mandates",
      "No documented escalation path to the board",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "We rewrote each charter with an explicit decision right, added a single escalation route to the board, and trained chairs on the new boundaries.",
    attorney: {
      name: "Marcus Ellery",
      role: "Governance Advisor",
      why: "Marcus has restructured board committees for regulated groups across three jurisdictions.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Review",
        body: "Every committee now holds a distinct, written decision right with no overlapping vetoes.",
        outcome: "Approval cycle fell from 31 days to 9.",
      },
      {
        label: "Solutions 2",
        heading: "Escalation Path",
        body: "A single documented route carries unresolved matters to the board with a standard briefing format.",
        outcome: "Board packs shortened by a third.",
      },
      {
        label: "Solutions 3",
        heading: "Chair Training",
        body: "Committee chairs were trained on the new charters and given a quarterly self-assessment.",
        outcome: "All three committees passed the first governance audit.",
      },
    ],
  },
  {
    id: "trauma",
    label: "Trauma-Informed Practice",
    badge: "Trauma-Informed Practice",
    details: {
      client: "Riverside Care",
      attorney: "Nadia Okafor",
      start: "08/06/2023",
      time: "4 Months",
      result: "Adopted",
      other: "Grant Funded",
    },
    summaryTitle: "Summary Of The Practice Rollout",
    intro: [
      "A care provider wanted intake and complaint handling redesigned so vulnerable clients were not asked to retell their history repeatedly.",
      "We rebuilt the process around consent, single-telling and staff supervision.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Clients repeated their account to an average of four staff members before a case opened, and frontline staff had no debrief support.",
    bullets: [
      "Four repeat disclosures per client on average",
      "No structured debrief for frontline staff",
      "Consent captured verbally with no record",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "A single documented intake, explicit written consent for information sharing, and fortnightly clinical supervision for every frontline team.",
    attorney: {
      name: "Nadia Okafor",
      role: "Solicitor, Social Care",
      why: "Nadia advises care providers on safeguarding and has written trauma-informed policy adopted by two local authorities.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Rollout",
        body: "Intake now happens once, with consent recorded and shared under a documented lawful basis.",
        outcome: "Repeat disclosures dropped from four to one.",
      },
      {
        label: "Solutions 2",
        heading: "Staff Supervision",
        body: "Fortnightly clinical supervision gives frontline staff a structured place to process difficult cases.",
        outcome: "Frontline turnover fell by a fifth.",
      },
      {
        label: "Solutions 3",
        heading: "Complaint Handling",
        body: "Complaints are triaged by trained staff with a fixed response window and a named contact.",
        outcome: "Average resolution time cut from 28 days to 12.",
      },
    ],
  },
  {
    id: "templates",
    label: "Templates & Resources",
    badge: "Templates & Resources",
    details: {
      client: "Internal",
      attorney: "Sofia Márquez",
      start: "02/03/2024",
      time: "2 Months",
      result: "Published",
      other: "Open Access",
    },
    summaryTitle: "Summary Of The Template Library",
    intro: [
      "Teams were rewriting the same clauses from scratch, producing inconsistent contracts and slow reviews.",
      "We built a maintained clause library with plain-language guidance for non-lawyers.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Forty-one contract variants existed for the same service, and legal review queued for eleven days on average.",
    bullets: [
      "Forty-one variants of a single contract type",
      "Eleven day average legal review queue",
      "No owner for template maintenance",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "We consolidated to six approved templates, added fallback clause options with pre-approved risk ratings, and named a quarterly maintenance owner.",
    attorney: {
      name: "Sofia Márquez",
      role: "Knowledge Counsel",
      why: "Sofia builds legal knowledge systems and focuses on making them usable by the people who actually send the contracts.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Library",
        body: "Six approved templates now cover ninety percent of outbound agreements with pre-cleared fallbacks.",
        outcome: "Legal review queue fell from 11 days to 3.",
      },
      {
        label: "Solutions 2",
        heading: "Self-Serve Guidance",
        body: "Each clause carries a plain-language note explaining when to use it and what to never change.",
        outcome: "Two-thirds of contracts now go out without legal review.",
      },
      {
        label: "Solutions 3",
        heading: "Maintenance Cycle",
        body: "A named owner reviews the library quarterly against new case law and internal feedback.",
        outcome: "Library stayed current through two regulatory changes.",
      },
    ],
  },
  {
    id: "masterclass",
    label: "Masterclasses & Events",
    badge: "Masterclasses & Events",
    details: {
      client: "Bar Association",
      attorney: "Tomás Beltrán",
      start: "19/10/2023",
      time: "7 Months",
      result: "Sold Out",
      other: "Series",
    },
    summaryTitle: "Summary Of The Masterclass Series",
    intro: [
      "A professional body wanted CPD sessions that practitioners would actually attend, after years of declining sign-ups.",
      "We rebuilt the format around live case teardowns instead of slide-led lectures.",
    ],
    problemTitle: "The Problems Being Encountered of the Case",
    problem:
      "Attendance had fallen 60% over three years and feedback consistently described sessions as too theoretical.",
    bullets: [
      "Sixty percent decline in attendance over three years",
      "Feedback scores stuck below three out of five",
      "No follow-up material after sessions",
    ],
    approachTitle: "Our Approach And Solution",
    approach:
      "Each session now dissects a real, anonymised matter with the practitioner who ran it, followed by a written teardown sent to every attendee.",
    attorney: {
      name: "Tomás Beltrán",
      role: "Programme Director",
      why: "Tomás has designed CPD programmes for two bar associations and teaches advocacy at postgraduate level.",
    },
    solutions: [
      {
        label: "Solutions 1",
        heading: "The Outcome of the Series",
        body: "Live case teardowns replaced lecture slides, with the original practitioner answering questions unscripted.",
        outcome: "Every session in the series sold out.",
      },
      {
        label: "Solutions 2",
        heading: "Follow-Up Material",
        body: "A written teardown with citations reaches attendees within 48 hours of each session.",
        outcome: "Feedback scores rose from 2.8 to 4.6.",
      },
      {
        label: "Solutions 3",
        heading: "Regional Rollout",
        body: "The format was packaged so regional chapters could run it without central staff.",
        outcome: "Four chapters adopted the series in its first year.",
      },
    ],
  },
];

export const DETAIL_ICONS = [User, Briefcase, CalendarDays, Clock, Award, LayoutGrid];

// Elongated-hexagon clip path (top-right and bottom-left corners cut off).
// Percentage based, so it stays proportional at every breakpoint with no media queries.
export const HEX_CLIP = "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)";