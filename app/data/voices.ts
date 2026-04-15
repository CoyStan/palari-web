export type VoiceId = "sofia" | "alfred" | "leo" | "ravi" | "ezra";

export type Voice = {
  id: VoiceId;
  name: string;
  role: string;
  dot: string;
  accentBorder: string;
  accentText: string;
};

export type Scenario = {
  id: string;
  label: string;
  rawOutput: string;
  responses: Record<VoiceId, string>;
};

export const voices: Voice[] = [
  {
    id: "sofia",
    name: "Sofia",
    role: "Operations partner",
    dot: "bg-[#F46F61]",
    accentBorder: "border-[#F46F61]/25",
    accentText: "text-[#F46F61]",
  },
  {
    id: "alfred",
    name: "Alfred",
    role: "Coordinator",
    dot: "bg-[#E7B83D]",
    accentBorder: "border-[#E7B83D]/30",
    accentText: "text-[#C9981E]",
  },
  {
    id: "leo",
    name: "Leo",
    role: "Materials thinker",
    dot: "bg-[#22B8B0]",
    accentBorder: "border-[#22B8B0]/25",
    accentText: "text-[#22B8B0]",
  },
  {
    id: "ravi",
    name: "Ravi",
    role: "Heritage engineer",
    dot: "bg-[#9B4FCC]",
    accentBorder: "border-[#9B4FCC]/25",
    accentText: "text-[#9B4FCC]",
  },
  {
    id: "ezra",
    name: "Ezra",
    role: "Systems mentor",
    dot: "bg-[#4CAF50]",
    accentBorder: "border-[#4CAF50]/25",
    accentText: "text-[#4CAF50]",
  },
];

export const scenarios: Scenario[] = [
  {
    id: "data-analysis",
    label: "Data analysis",
    rawOutput:
      "I've completed the analysis of the Q1 sales data across all regions. The Western region showed a 23% increase in revenue compared to last quarter, driven primarily by enterprise deals above $50K, while the Eastern region declined 8% due to three large contract cancellations. I'd recommend reallocating marketing spend toward the Western segment next quarter to capitalize on this momentum.",
    responses: {
      sofia:
        "the numbers landed. west is up 23% on enterprise deals over $50k, east dropped 8% on three big cancellations. the pattern's pretty clear. want me to sketch what a west-weighted q2 spend looks like before we commit?",
      alfred:
        "The Q1 numbers are in. Western is up 23% on enterprise deals over $50K, and Eastern fell 8% after three large contract cancellations. Before we move forward, should we talk about whether those three accounts are recoverable, or is it cleaner to shift Q2 marketing toward the west?",
      leo: "west is up 23% on enterprise deals above $50k. east lost 8% but it's three cancellations, not a broad decline. that's a different failure mode. the material is telling us two different stories and the spend question depends on which one we trust.",
      ravi: "The Q1 data is in. Western is up 23%, Eastern is down 8% from three cancellations. Before we replace the spend plan, can we understand what those three accounts were trying to tell us? The signal is usually in the loss, not the growth.",
      ezra: "q1: west +23%, east -8%. the east loss is three cancellations, which is a pattern of three, not a trend. the actual rule here is whether those three share something. if yes, west spend won't fix it. want me to check what they had in common?",
    },
  },
  {
    id: "report",
    label: "Report writing",
    rawOutput:
      "I've drafted the stakeholder report on the product launch based on the data you provided. The document covers the 14-day performance window, adoption metrics, and the two customer segments that drove 80% of conversions. Let me know if you'd like me to adjust the tone for a more executive audience or include the competitor comparison section.",
    responses: {
      sofia:
        "the launch report's drafted. covers the 14-day window, adoption, and the two segments that drove 80% of conversions. the rhythm is mid-tier corporate right now. want me to pull it up to executive register, add the competitor section, or both?",
      alfred:
        "The stakeholder report is drafted. It covers the 14-day window, adoption metrics, and the two segments behind 80% of conversions. Before we send, should we talk about whether the executives want the competitor context, or is the product story enough on its own?",
      leo: "draft's done. 14-day window, adoption, and the two segments driving 80% of conversions are all in. the current tone is operator-level. executives usually need a different frequency. want me to rewrite for that ear, or add the competitor piece first?",
      ravi: "The stakeholder report is drafted. It covers the 14-day window, adoption metrics, and the two segments behind 80% of conversions. Before we send it upstream, should we tune it for executive ears and add the competitor context, or let it stand as the working record it already is?",
      ezra: "the draft is ready: 14 days, adoption, two segments driving 80%. the actual rule here is who's reading it. executives don't repeat the workflow, they judge it once. want me to retune for that audience, and should we include the competitor cycle while we're at it?",
    },
  },
  {
    id: "vendor-review",
    label: "Vendor contract review",
    rawOutput:
      "I've reviewed the six vendor contracts up for renewal next quarter and flagged the three with pricing changes that exceed the 5% threshold from the approved budget. The other three are flat renewals with no material changes. I can draft renewal notices for the three flat contracts tonight, or walk through the three pricing escalations first so you can prioritize.",
    responses: {
      sofia:
        "vendor review's done. six contracts up for renewal, three are flat and three have pricing changes above the 5% threshold. the flat ones are the easy win. want me to draft those renewal notices tonight, or walk the three escalations first so you can prioritize?",
      alfred:
        "The vendor review is in. Six contracts renewing, three flat and three with pricing changes above the 5% threshold. Before we send anything, should we talk about whether the three escalations are worth negotiating, or is it cleaner to approve the flat ones and deal with the rest separately?",
      leo: "reviewed the six contracts. three are flat. three have pricing changes over the 5% threshold. that's a cluster, not a spread. the material is telling us something about that vendor cohort, not about pricing generally. depends which story we trust before we negotiate.",
      ravi: "The vendor review is done. Six contracts, three flat, three with pricing over the 5% threshold. Before we sign any of them, can we understand what changed for those three? A jump like that usually tells you something the last cycle missed.",
      ezra: "six contracts renewing: three flat, three with pricing changes over 5%. the three escalations are a pattern of three, not three separate events. the actual rule is whether they share a reason. want me to check what they have in common before we negotiate?",
    },
  },
];
