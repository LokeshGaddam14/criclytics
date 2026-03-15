export interface Match {
  id: number;
  team1: string;
  team1Short: string;
  team2: string;
  team2Short: string;
  venue: string;
  date: string;
  time: string;
  team1Logo: string;
  team2Logo: string;
  winProb1: number;
  winProb2: number;
  keyFactors: string[];
  result?: string;
  isToday?: boolean;
  pitchReport: {
    type: "Batting" | "Bowling" | "Balanced";
    avgScore: number;
    description: string;
    paceHelp: number;
    spinHelp: number;
    batting: number;
  };
  weather: {
    condition: string;
    temp: number;
    humidity: number;
    dewFactor: boolean;
    rainChance: number;
  };
  h2h: {
    total: number;
    team1Wins: number;
    team2Wins: number;
    lastFive: { result: string; winner: string }[];
  };
  tossImpact: string;
}

export interface SeasonStats {
  topScorer: { name: string; runs: number; team: string };
  topWicketTaker: { name: string; wickets: number; team: string };
  bestEconomy: { name: string; economy: number; team: string };
  mostSixes: { name: string; sixes: number; team: string };
  totalMatches: number;
  totalRuns: number;
}

export const todayMatch: Match = {
  id: 1,
  team1: "Mumbai Indians", team1Short: "MI",
  team2: "Royal Challengers Bengaluru", team2Short: "RCB",
  venue: "Wankhede Stadium, Mumbai",
  date: "March 15, 2026", time: "7:30 PM IST",
  team1Logo: "💙", team2Logo: "❤️",
  winProb1: 58, winProb2: 42,
  isToday: true,
  pitchReport: {
    type: "Batting",
    avgScore: 182,
    description: "Wankhede traditionally assists batsmen with a true, bouncy surface. The outfield is quick and boundaries are short square of the wicket. Expect high scores.",
    paceHelp: 45, spinHelp: 30, batting: 80,
  },
  weather: {
    condition: "Clear", temp: 28, humidity: 72,
    dewFactor: true, rainChance: 5,
  },
  keyFactors: [
    "MI have won 5 of last 6 home games at Wankhede",
    "Bumrah is in exceptional form — 4 wickets in last match",
    "Kohli averages 62.4 at Wankhede — a genuine fortress for him",
    "MI have the stronger death bowling lineup by a margin",
    "Dew factor could significantly aid batting in 2nd innings",
    "RCB top-order starts 45% of innings during powerplay",
  ],
  h2h: {
    total: 32, team1Wins: 19, team2Wins: 12,
    lastFive: [
      { result: "MI won by 54 runs", winner: "MI" },
      { result: "RCB won by 6 wkts", winner: "RCB" },
      { result: "MI won by 4 wkts",  winner: "MI" },
      { result: "MI won by 29 runs", winner: "MI" },
      { result: "RCB won by 8 runs", winner: "RCB" },
    ],
  },
  tossImpact: "Teams winning the toss at Wankhede prefer to bowl first 70% of the time. The 2nd innings team benefits from dew, making chasing easier. Toss winner has a 58% win rate here.",
};

export const upcomingMatches: Match[] = [
  {
    id: 2,
    team1: "Chennai Super Kings", team1Short: "CSK",
    team2: "Kolkata Knight Riders", team2Short: "KKR",
    venue: "MA Chidambaram Stadium, Chennai",
    date: "March 16, 2026", time: "3:30 PM IST",
    team1Logo: "🟡", team2Logo: "💜",
    winProb1: 64, winProb2: 36,
    pitchReport: {
      type: "Bowling",
      avgScore: 158,
      description: "Chepauk is notorious for its slow, turning track. The low bounce is ideal for spinners. Teams batting here need to pace their innings carefully.",
      paceHelp: 25, spinHelp: 75, batting: 35,
    },
    weather: { condition: "Humid", temp: 34, humidity: 88, dewFactor: false, rainChance: 10 },
    keyFactors: [
      "Chepauk plays extremely slow — spinners dominate",
      "Jadeja averages 8.1 economy here across 42 matches",
      "CSK have never lost to KKR at home in 8 attempts",
      "KKR's Russell thrives on flat pitches — not these",
      "Dhoni's finishing remains unrivalled in pressure games",
    ],
    h2h: {
      total: 28, team1Wins: 18, team2Wins: 10,
      lastFive: [
        { result: "CSK won by 7 wkts", winner: "CSK" },
        { result: "CSK won by 6 runs", winner: "CSK" },
        { result: "KKR won by 34 runs",winner: "KKR" },
        { result: "CSK won by 4 wkts", winner: "CSK" },
        { result: "CSK won by 11 runs",winner: "CSK" },
      ],
    },
    tossImpact: "At Chepauk, batting first is heavily preferred — teams batting second win only 38% of the time due to slow surface degradation. Winning the toss is crucial.",
  },
  {
    id: 3,
    team1: "Rajasthan Royals", team1Short: "RR",
    team2: "Sunrisers Hyderabad", team2Short: "SRH",
    venue: "Sawai Mansingh Stadium, Jaipur",
    date: "March 17, 2026", time: "7:30 PM IST",
    team1Logo: "🩷", team2Logo: "🟠",
    winProb1: 52, winProb2: 48,
    pitchReport: {
      type: "Balanced",
      avgScore: 170,
      description: "SMS Stadium in Jaipur offers a balanced wicket. Early swing for seamers, good carry for batsmen, and the pitch flattens out nicely for big totals.",
      paceHelp: 50, spinHelp: 45, batting: 60,
    },
    weather: { condition: "Clear", temp: 26, humidity: 48, dewFactor: false, rainChance: 0 },
    keyFactors: [
      "Buttler is in red-hot form with 124 in last outing",
      "Klaasen vs SRH can be explosive — avg 78 pts here",
      "Chahal has taken 14 wickets in 8 matches at Jaipur",
      "SRH's Head struggled against leg-spin historically",
      "RR won 4 of last 5 at this venue",
    ],
    h2h: {
      total: 22, team1Wins: 11, team2Wins: 11,
      lastFive: [
        { result: "RR won by 18 runs", winner: "RR"  },
        { result: "SRH won by 5 wkts", winner: "SRH" },
        { result: "RR won by 9 wkts",  winner: "RR"  },
        { result: "SRH won by 22 runs",winner: "SRH" },
        { result: "RR won by 4 wkts",  winner: "RR"  },
      ],
    },
    tossImpact: "At Jaipur, teams prefer to bat first. The pitch is fresh and plays well early. Chase success rate is only 44%.",
  },
  {
    id: 4,
    team1: "Delhi Capitals", team1Short: "DC",
    team2: "Gujarat Titans", team2Short: "GT",
    venue: "Arun Jaitley Stadium, Delhi",
    date: "March 18, 2026", time: "7:30 PM IST",
    team1Logo: "🔵", team2Logo: "⚫",
    winProb1: 46, winProb2: 54,
    pitchReport: {
      type: "Batting",
      avgScore: 176,
      description: "Delhi's Kotla tends to produce big batting feasts. The outfield is among the quickest in India. However, spin can play a role in H2H.",
      paceHelp: 40, spinHelp: 50, batting: 72,
    },
    weather: { condition: "Partly Cloudy", temp: 24, humidity: 58, dewFactor: true, rainChance: 15 },
    keyFactors: [
      "GT are the form team — 4 wins in last 5 matches",
      "Rashid is unplayable on Delhi's slightly rough surface",
      "Pant's home form is exceptional — avg 88 pts at Kotla",
      "warner struggles against high-quality spin",
      "Weather could cause a revised game — check toss!",
    ],
    h2h: {
      total: 10, team1Wins: 4, team2Wins: 6,
      lastFive: [
        { result: "GT won by 5 runs",  winner: "GT" },
        { result: "DC won by 3 wkts",  winner: "DC" },
        { result: "GT won by 7 runs",  winner: "GT" },
        { result: "GT won by 4 wkts",  winner: "GT" },
        { result: "DC won by 6 runs",  winner: "DC" },
      ],
    },
    tossImpact: "At Delhi, evening dew makes chasing highly preferred. Teams winning toss choose to bowl 80% of the time. Toss winner has a 65% match win rate.",
  },
  {
    id: 5,
    team1: "Punjab Kings", team1Short: "PBKS",
    team2: "Lucknow Super Giants", team2Short: "LSG",
    venue: "PCA Stadium, Mullanpur",
    date: "March 19, 2026", time: "7:30 PM IST",
    team1Logo: "🔴", team2Logo: "🩵",
    winProb1: 44, winProb2: 56,
    pitchReport: {
      type: "Balanced",
      avgScore: 168,
      description: "New Chandigarh (Mullanpur) is a relatively new venue that tends to be a balanced wicket. Medium pace bowlers and leg-spinners have done well here.",
      paceHelp: 55, spinHelp: 40, batting: 58,
    },
    weather: { condition: "Clear", temp: 22, humidity: 42, dewFactor: false, rainChance: 0 },
    keyFactors: [
      "LSG have won 3 consecutive matches in terrific form",
      "Pooran's explosive hitting perfect for this ground",
      "KL Rahul knows this pitch well from his PBKS days",
      "Arshdeep key for PBKS with new ball on a lively surface",
      "Curran batting lower order offers good value differential",
    ],
    h2h: {
      total: 6, team1Wins: 2, team2Wins: 4,
      lastFive: [
        { result: "LSG won by 7 wkts", winner: "LSG" },
        { result: "LSG won by 5 runs", winner: "LSG" },
        { result: "PBKS won by 4 wkts",winner: "PBKS"},
        { result: "LSG won by 22 runs",winner: "LSG" },
        { result: "PBKS won by 6 runs",winner: "PBKS"},
      ],
    },
    tossImpact: "At Mullanpur, both batting and bowling first have produced wins. Very slight preference for batting first (55%). Toss impact is lower here than most venues.",
  },
];

export const seasonStats: SeasonStats = {
  topScorer:      { name: "Virat Kohli",    runs: 748,    team: "RCB" },
  topWicketTaker: { name: "Jasprit Bumrah", wickets: 28,  team: "MI"  },
  bestEconomy:    { name: "Rashid Khan",    economy: 6.12,team: "GT"  },
  mostSixes:      { name: "Jos Buttler",    sixes: 38,    team: "RR"  },
  totalMatches: 48,
  totalRuns: 81420,
};
