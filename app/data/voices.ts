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
    id: "code-test",
    label: "Code test result",
    rawOutput:
      "I ran the test suite against the authentication service and 47 of 52 tests passed successfully. The five failing tests are all in the session refresh flow, specifically they time out waiting for the token rotation endpoint to respond within 200ms. I can investigate whether this is a network latency issue in the test environment or an actual performance regression in the rotation logic.",
    responses: {
      sofia:
        "ran the tests. 47 of 52 passed. the five failures are all in the session refresh flow, timing out waiting on the token rotation endpoint at 200ms. could be test-env latency, could be a real regression. the rhythm between the two feels off either way. want me to dig?",
      alfred:
        "Ran the auth service tests. 47 of 52 passed. The five failures all sit in the session refresh flow, timing out at the 200ms threshold on the token rotation endpoint. I can look into whether it's a test-environment latency issue or a real regression in rotation. Which would you rather I chase first?",
      leo: "tests done: 47 of 52 passed. the five failing ones cluster in session refresh, all timing out at the 200ms threshold on the token rotation endpoint. that's not random. a cluster like that is either environmental or the material is telling us something shifted in rotation. want me to listen differently to it?",
      ravi: "The auth test suite ran. 47 of 52 passed, and the five failures all pool at the same junction: session refresh, timing out at 200ms on the token rotation endpoint. Before we rewrite anything, can we listen to what rotation is doing in the test env first? The signal is already there.",
      ezra: "47 of 52 passed. all five failures are the same failure: session refresh timing out at 200ms on the token rotation endpoint. the pattern repeats because the actual rule is somewhere in rotation or the env, not in the tests. want me to watch that cycle once more and figure out which?",
    },
  },
];
