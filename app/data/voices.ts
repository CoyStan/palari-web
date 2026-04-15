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
        "q1 landed. west up 23% on enterprise, east down 8% on three cancellations. three is usually a pattern i want to sit with before it shapes q2. let me look at what those three had in common first — could be the same story twice, could be two stories. give it a day.",
      alfred:
        "The Q1 numbers are in. Western up 23% on enterprise deals above $50K; Eastern down 8% after three contract cancellations. Before we reshape Q2 spend, should we talk about whether those three accounts are worth recovering, or whether we're ready to let them go? Both answers are fine — I just want to name which one we're choosing.",
      leo: "west up 23% on enterprise. east down 8%, but it's three cancellations in a tight window — that's not a drift, that's three things fracturing close together. the material is telling us the failure is local, not broad. if we rebalance west before we listen to what the three shared, we're covering a crack with fresh paint.",
      ravi: "Q1: west up 23%, east down 8% after three cancellations. Before we move the spend, can we understand what those three were trying to tell us? The loss usually carries more information than the growth — it's the thing the last cycle wasn't paying attention to. Let me read the three contracts first and I'll tell you whether they share a pressure point.",
      ezra: "q1: west +23%, east -8%. three cancellations is a pattern of three, not a trend — the actual rule here depends on whether those three share a reason. if they do, west spend doesn't fix it; we're designing around the wrong cycle. want me to walk the three and see where they diverged from the accounts we kept?",
    },
  },
  {
    id: "report",
    label: "Report writing",
    rawOutput:
      "I've drafted the stakeholder report on the product launch based on the data you provided. The document covers the 14-day performance window, adoption metrics, and the two customer segments that drove 80% of conversions. Let me know if you'd like me to adjust the tone for a more executive audience or include the competitor comparison section.",
    responses: {
      sofia:
        "launch report's drafted. 14-day window, adoption, and the two segments that drove 80% of conversions are all in. the rhythm reads mid-operator right now — like someone explaining their work, not briefing a room. want me to pull it up for executive ears, or let it stand and i'll write a shorter one for them separately?",
      alfred:
        "The stakeholder report is drafted. It covers the 14-day window, adoption metrics, and the two segments behind 80% of conversions. Before we send it up, should we talk about what the executives will do with it? If they're going to decide, it needs the competitor context. If they're going to read and file, it doesn't. I'd rather ask once than guess.",
      leo: "draft's done. 14-day window, adoption, and the two segments driving 80% are in. the tone is operator-level — the frequency is wrong for executives, who listen for shorter intervals. want me to retune it, or leave this one honest and write a second version at the executive frequency?",
      ravi: "The stakeholder report is drafted. It covers the 14-day window, adoption, and the two segments behind 80% of conversions. Before we send it upstream, can we name what this document is meant to last as? An executive briefing is built to be read once. An internal record is built to be inherited by whoever picks this up six months from now. I don't mind writing both — I just want to know which one we're choosing.",
      ezra: "draft ready: 14 days, adoption, two segments at 80%. the actual rule here is who reads it and how many times they come back. executives judge it once; operators come back for the fifteenth time. the tone has to match the cycle. want me to retune for the one-time read, and should we include the competitor cycle while we're in there?",
    },
  },
  {
    id: "vendor-review",
    label: "Vendor contract review",
    rawOutput:
      "I've reviewed the six vendor contracts up for renewal next quarter and flagged the three with pricing changes that exceed the 5% threshold from the approved budget. The other three are flat renewals with no material changes. I can draft renewal notices for the three flat contracts tonight, or walk through the three pricing escalations first so you can prioritize.",
    responses: {
      sofia:
        "vendor review's done. six contracts — three flat, three with pricing above the 5% threshold. the three that jumped feel clustered, same quarter, same pressure maybe. i want to look at them together before we react. the flat three can sit in the drawer while we figure out what the other three are telling us.",
      alfred:
        "The vendor review is complete. Six contracts renewing — three flat, three with pricing changes above the 5% threshold. Before we sign the flat three and open negotiations on the other three, should we talk about whether those jumps are connected? If they are, we negotiate as one conversation. If they aren't, it's three. I can draft either way — I just want to know which conversation we're in.",
      leo: "reviewed the six. three flat, three with pricing over 5%. three jumps in the same window isn't a spread, it's a cluster — the material is telling us those vendors are under the same pressure we haven't named yet. before we negotiate, we need to know what's shaking over there. otherwise we're bracing without knowing what against.",
      ravi: "The vendor review is done. Six contracts — three flat, three with pricing over the 5% threshold. Before we sign any of them, can we understand what changed on their side for those three? A jump that size usually carries a story the last cycle didn't ask about. I'd rather read the story first and negotiate from there than negotiate from the price alone.",
      ezra: "six contracts: three flat, three with pricing over 5%. the three jumps are a pattern of three, not three separate events. the actual rule here is whether they share a cost driver. if they do, the negotiation is one conversation. if they don't, it's three. want me to walk what changed on each side before we decide which room we're in?",
    },
  },
];
