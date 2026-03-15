export type PlayerRole = "WK" | "BAT" | "AR" | "BOWL";
export type FormRating = "Hot" | "Good" | "Average" | "Cold";

export interface FormEntry {
  match: string;
  score?: number;
  wickets?: number;
  points: number;
}

export interface Player {
  id: number;
  name: string;
  team: string;
  role: PlayerRole;
  credits: number;
  battingAvg: number;
  strikeRate: number;
  economy: number;
  fantasyAvgPts: number;
  form: FormEntry[];
  formRating: FormRating;
  ownershipPct: number; // % of Dream11 teams selecting this player
  country: string;
  matches: number;
  runs: number;
  wickets: number;
  image: string;
}

export const players: Player[] = [
  // ── MI ──────────────────────────────────────
  {
    id: 1, name: "Rohit Sharma", team: "MI", role: "BAT", credits: 10.5,
    battingAvg: 48.6, strikeRate: 131.8, economy: 0, fantasyAvgPts: 72.1,
    formRating: "Good", ownershipPct: 38.4,
    country: "India", matches: 238, runs: 6089, wickets: 15, image: "🔵",
    form: [
      { match: "vs CSK", score: 71, points: 84 },
      { match: "vs RCB", score: 0,  points: 6  },
      { match: "vs DC",  score: 60, points: 74 },
      { match: "vs KKR", score: 88, points: 101},
      { match: "vs SRH", score: 44, points: 58 },
    ],
  },
  {
    id: 2, name: "Jasprit Bumrah", team: "MI", role: "BOWL", credits: 10.5,
    battingAvg: 5.2, strikeRate: 80.0, economy: 6.84, fantasyAvgPts: 76.3,
    formRating: "Hot", ownershipPct: 52.1,
    country: "India", matches: 120, runs: 56, wickets: 145, image: "🎯",
    form: [
      { match: "vs CSK", wickets: 3, points: 88  },
      { match: "vs RCB", wickets: 2, points: 62  },
      { match: "vs DC",  wickets: 4, points: 102 },
      { match: "vs KKR", wickets: 1, points: 46  },
      { match: "vs SRH", wickets: 2, points: 64  },
    ],
  },
  {
    id: 3, name: "Suryakumar Yadav", team: "MI", role: "BAT", credits: 10.0,
    battingAvg: 44.8, strikeRate: 168.4, economy: 0, fantasyAvgPts: 74.6,
    formRating: "Hot", ownershipPct: 44.8,
    country: "India", matches: 112, runs: 2678, wickets: 1, image: "☀️",
    form: [
      { match: "vs CSK", score: 92, points: 108 },
      { match: "vs RCB", score: 48, points: 62  },
      { match: "vs DC",  score: 75, points: 90  },
      { match: "vs KKR", score: 31, points: 44  },
      { match: "vs SRH", score: 58, points: 74  },
    ],
  },
  {
    id: 4, name: "Hardik Pandya", team: "MI", role: "AR", credits: 10.0,
    battingAvg: 30.4, strikeRate: 151.2, economy: 8.72, fantasyAvgPts: 68.4,
    formRating: "Average", ownershipPct: 28.7,
    country: "India", matches: 104, runs: 1476, wickets: 42, image: "💪",
    form: [
      { match: "vs CSK", score: 40, wickets: 1, points: 72  },
      { match: "vs RCB", score: 12, wickets: 2, points: 54  },
      { match: "vs DC",  score: 28, wickets: 0, points: 38  },
      { match: "vs KKR", score: 55, wickets: 2, points: 96  },
      { match: "vs SRH", score: 18, wickets: 1, points: 52  },
    ],
  },
  // ── CSK ──────────────────────────────────────
  {
    id: 5, name: "MS Dhoni", team: "CSK", role: "WK", credits: 9.0,
    battingAvg: 38.2, strikeRate: 145.6, economy: 0, fantasyAvgPts: 60.2,
    formRating: "Good", ownershipPct: 34.5,
    country: "India", matches: 234, runs: 4978, wickets: 0, image: "🧤",
    form: [
      { match: "vs RCB",  score: 28, points: 40 },
      { match: "vs MI",   score: 55, points: 68 },
      { match: "vs KKR",  score: 32, points: 48 },
      { match: "vs SRH",  score: 14, points: 28 },
      { match: "vs PBKS", score: 47, points: 62 },
    ],
  },
  {
    id: 6, name: "Ravindra Jadeja", team: "CSK", role: "AR", credits: 9.5,
    battingAvg: 29.4, strikeRate: 148.2, economy: 7.48, fantasyAvgPts: 82.5,
    formRating: "Hot", ownershipPct: 48.2,
    country: "India", matches: 192, runs: 2477, wickets: 132, image: "⚡",
    form: [
      { match: "vs RCB",  score: 34, wickets: 2, points: 98  },
      { match: "vs MI",   score: 16, wickets: 1, points: 58  },
      { match: "vs KKR",  score: 28, wickets: 3, points: 110 },
      { match: "vs SRH",  score: 9,  wickets: 2, points: 74  },
      { match: "vs PBKS", score: 41, wickets: 1, points: 84  },
    ],
  },
  {
    id: 7, name: "Ruturaj Gaikwad", team: "CSK", role: "BAT", credits: 9.5,
    battingAvg: 46.1, strikeRate: 137.6, economy: 0, fantasyAvgPts: 70.4,
    formRating: "Good", ownershipPct: 32.1,
    country: "India", matches: 58, runs: 2061, wickets: 2, image: "🟡",
    form: [
      { match: "vs RCB",  score: 78, points: 92  },
      { match: "vs MI",   score: 44, points: 58  },
      { match: "vs KKR",  score: 101,points: 118 },
      { match: "vs SRH",  score: 22, points: 36  },
      { match: "vs PBKS", score: 54, points: 68  },
    ],
  },
  // ── RCB ──────────────────────────────────────
  {
    id: 8, name: "Virat Kohli", team: "RCB", role: "BAT", credits: 11.5,
    battingAvg: 52.8, strikeRate: 138.4, economy: 0, fantasyAvgPts: 78.4,
    formRating: "Hot", ownershipPct: 58.6,
    country: "India", matches: 243, runs: 7263, wickets: 4, image: "👑",
    form: [
      { match: "vs CSK", score: 85,  points: 95  },
      { match: "vs MI",  score: 42,  points: 58  },
      { match: "vs DC",  score: 113, points: 128 },
      { match: "vs KKR", score: 29,  points: 42  },
      { match: "vs PBKS",score: 67,  points: 80  },
    ],
  },
  {
    id: 9, name: "Faf du Plessis", team: "RCB", role: "BAT", credits: 9.5,
    battingAvg: 41.8, strikeRate: 142.6, economy: 0, fantasyAvgPts: 66.8,
    formRating: "Good", ownershipPct: 29.4,
    country: "South Africa", matches: 118, runs: 3802, wickets: 2, image: "🇿🇦",
    form: [
      { match: "vs CSK", score: 62, points: 76  },
      { match: "vs MI",  score: 88, points: 102 },
      { match: "vs DC",  score: 14, points: 26  },
      { match: "vs KKR", score: 45, points: 60  },
      { match: "vs PBKS",score: 71, points: 86  },
    ],
  },
  {
    id: 10, name: "Glenn Maxwell", team: "RCB", role: "AR", credits: 9.5,
    battingAvg: 28.6, strikeRate: 155.8, economy: 8.24, fantasyAvgPts: 64.2,
    formRating: "Average", ownershipPct: 22.1,
    country: "Australia", matches: 112, runs: 2198, wickets: 38, image: "🦅",
    form: [
      { match: "vs CSK", score: 55, wickets: 1, points: 84 },
      { match: "vs MI",  score: 4,  wickets: 0, points: 14 },
      { match: "vs DC",  score: 92, wickets: 2, points: 122},
      { match: "vs KKR", score: 18, wickets: 1, points: 44 },
      { match: "vs PBKS",score: 31, wickets: 0, points: 42 },
    ],
  },
  // ── KKR ──────────────────────────────────────
  {
    id: 11, name: "Sunil Narine", team: "KKR", role: "AR", credits: 9.0,
    battingAvg: 26.8, strikeRate: 161.4, economy: 6.68, fantasyAvgPts: 74.6,
    formRating: "Hot", ownershipPct: 41.3,
    country: "West Indies", matches: 168, runs: 1481, wickets: 148, image: "🌊",
    form: [
      { match: "vs RR",   score: 71, wickets: 2, points: 118 },
      { match: "vs GT",   score: 45, wickets: 1, points: 86  },
      { match: "vs PBKS", score: 18, wickets: 3, points: 90  },
      { match: "vs MI",   score: 9,  wickets: 2, points: 64  },
      { match: "vs SRH",  score: 52, wickets: 1, points: 84  },
    ],
  },
  {
    id: 12, name: "Pat Cummins", team: "KKR", role: "AR", credits: 9.5,
    battingAvg: 22.4, strikeRate: 138.6, economy: 7.92, fantasyAvgPts: 68.6,
    formRating: "Good", ownershipPct: 26.8,
    country: "Australia", matches: 44, runs: 448, wickets: 58, image: "🦘",
    form: [
      { match: "vs RR",   score: 28, wickets: 3, points: 96  },
      { match: "vs GT",   score: 14, wickets: 2, points: 68  },
      { match: "vs PBKS", score: 32, wickets: 1, points: 64  },
      { match: "vs MI",   score: 8,  wickets: 4, points: 104 },
      { match: "vs SRH",  score: 21, wickets: 2, points: 72  },
    ],
  },
  {
    id: 13, name: "Andre Russell", team: "KKR", role: "AR", credits: 9.5,
    battingAvg: 28.8, strikeRate: 177.4, economy: 9.12, fantasyAvgPts: 72.8,
    formRating: "Good", ownershipPct: 38.2,
    country: "West Indies", matches: 112, runs: 1968, wickets: 82, image: "💥",
    form: [
      { match: "vs RR",   score: 54, wickets: 2, points: 98  },
      { match: "vs GT",   score: 84, wickets: 1, points: 116 },
      { match: "vs PBKS", score: 12, wickets: 0, points: 22  },
      { match: "vs MI",   score: 67, wickets: 2, points: 102 },
      { match: "vs SRH",  score: 28, wickets: 1, points: 58  },
    ],
  },
  // ── SRH ──────────────────────────────────────
  {
    id: 14, name: "Heinrich Klaasen", team: "SRH", role: "WK", credits: 9.5,
    battingAvg: 44.2, strikeRate: 162.8, economy: 0, fantasyAvgPts: 76.2,
    formRating: "Hot", ownershipPct: 46.7,
    country: "South Africa", matches: 48, runs: 1642, wickets: 0, image: "🔶",
    form: [
      { match: "vs RR",  score: 94, points: 110 },
      { match: "vs DC",  score: 52, points: 68  },
      { match: "vs MI",  score: 78, points: 94  },
      { match: "vs KKR", score: 28, points: 42  },
      { match: "vs GT",  score: 108,points: 126 },
    ],
  },
  {
    id: 15, name: "Pat Cummins (SRH)", team: "SRH", role: "BOWL", credits: 9.0,
    battingAvg: 14.2, strikeRate: 120.0, economy: 8.42, fantasyAvgPts: 62.4,
    formRating: "Average", ownershipPct: 18.4,
    country: "Australia", matches: 28, runs: 148, wickets: 36, image: "🔥",
    form: [
      { match: "vs RR",  wickets: 2, points: 66 },
      { match: "vs DC",  wickets: 3, points: 88 },
      { match: "vs MI",  wickets: 1, points: 46 },
      { match: "vs KKR", wickets: 2, points: 68 },
      { match: "vs GT",  wickets: 0, points: 18 },
    ],
  },
  {
    id: 16, name: "Travis Head", team: "SRH", role: "BAT", credits: 9.5,
    battingAvg: 38.6, strikeRate: 158.4, economy: 0, fantasyAvgPts: 68.8,
    formRating: "Good", ownershipPct: 32.6,
    country: "Australia", matches: 28, runs: 1042, wickets: 2, image: "🌟",
    form: [
      { match: "vs RR",  score: 62, points: 78  },
      { match: "vs DC",  score: 88, points: 104 },
      { match: "vs MI",  score: 22, points: 36  },
      { match: "vs KKR", score: 71, points: 88  },
      { match: "vs GT",  score: 44, points: 60  },
    ],
  },
  // ── DC ──────────────────────────────────────
  {
    id: 17, name: "Rishabh Pant", team: "DC", role: "WK", credits: 10.0,
    battingAvg: 42.6, strikeRate: 148.8, economy: 0, fantasyAvgPts: 70.4,
    formRating: "Good", ownershipPct: 36.8,
    country: "India", matches: 98, runs: 3284, wickets: 0, image: "🧢",
    form: [
      { match: "vs RCB",  score: 48, points: 64  },
      { match: "vs CSK",  score: 82, points: 98  },
      { match: "vs GT",   score: 18, points: 30  },
      { match: "vs SRH",  score: 71, points: 88  },
      { match: "vs PBKS", score: 34, points: 50  },
    ],
  },
  {
    id: 18, name: "David Warner", team: "DC", role: "BAT", credits: 9.5,
    battingAvg: 43.8, strikeRate: 143.2, economy: 0, fantasyAvgPts: 66.2,
    formRating: "Average", ownershipPct: 24.2,
    country: "Australia", matches: 162, runs: 6397, wickets: 5, image: "🏖️",
    form: [
      { match: "vs RCB",  score: 62, points: 78 },
      { match: "vs CSK",  score: 22, points: 36 },
      { match: "vs GT",   score: 89, points: 104},
      { match: "vs SRH",  score: 15, points: 26 },
      { match: "vs PBKS", score: 44, points: 60 },
    ],
  },
  {
    id: 19, name: "Axar Patel", team: "DC", role: "AR", credits: 9.0,
    battingAvg: 24.8, strikeRate: 142.6, economy: 7.28, fantasyAvgPts: 64.6,
    formRating: "Good", ownershipPct: 28.4,
    country: "India", matches: 88, runs: 1082, wickets: 96, image: "✊",
    form: [
      { match: "vs RCB",  score: 24, wickets: 2, points: 74  },
      { match: "vs CSK",  score: 38, wickets: 1, points: 64  },
      { match: "vs GT",   score: 15, wickets: 3, points: 90  },
      { match: "vs SRH",  score: 42, wickets: 2, points: 88  },
      { match: "vs PBKS", score: 8,  wickets: 1, points: 42  },
    ],
  },
  // ── PBKS ──────────────────────────────────────
  {
    id: 20, name: "Shikhar Dhawan", team: "PBKS", role: "BAT", credits: 8.5,
    battingAvg: 36.4, strikeRate: 128.6, economy: 0, fantasyAvgPts: 58.4,
    formRating: "Average", ownershipPct: 16.2,
    country: "India", matches: 206, runs: 6244, wickets: 1, image: "🦅",
    form: [
      { match: "vs MI",  score: 54, points: 68 },
      { match: "vs DC",  score: 22, points: 36 },
      { match: "vs RR",  score: 78, points: 92 },
      { match: "vs GT",  score: 14, points: 26 },
      { match: "vs CSK", score: 41, points: 56 },
    ],
  },
  {
    id: 21, name: "Arshdeep Singh", team: "PBKS", role: "BOWL", credits: 8.5,
    battingAvg: 6.2, strikeRate: 90.0, economy: 8.84, fantasyAvgPts: 58.8,
    formRating: "Good", ownershipPct: 22.6,
    country: "India", matches: 48, runs: 62, wickets: 64, image: "⚔️",
    form: [
      { match: "vs MI",  wickets: 3, points: 88 },
      { match: "vs DC",  wickets: 2, points: 66 },
      { match: "vs RR",  wickets: 1, points: 46 },
      { match: "vs GT",  wickets: 3, points: 88 },
      { match: "vs CSK", wickets: 2, points: 68 },
    ],
  },
  {
    id: 22, name: "Sam Curran", team: "PBKS", role: "AR", credits: 9.0,
    battingAvg: 22.6, strikeRate: 144.8, economy: 9.12, fantasyAvgPts: 62.4,
    formRating: "Average", ownershipPct: 20.4,
    country: "England", matches: 48, runs: 682, wickets: 54, image: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    form: [
      { match: "vs MI",   score: 28, wickets: 2, points: 74  },
      { match: "vs DC",   score: 44, wickets: 1, points: 72  },
      { match: "vs RR",   score: 12, wickets: 2, points: 58  },
      { match: "vs GT",   score: 31, wickets: 0, points: 42  },
      { match: "vs CSK",  score: 55, wickets: 2, points: 96  },
    ],
  },
  // ── RR ──────────────────────────────────────
  {
    id: 23, name: "Jos Buttler", team: "RR", role: "WK", credits: 10.5,
    battingAvg: 48.2, strikeRate: 152.4, economy: 0, fantasyAvgPts: 80.2,
    formRating: "Hot", ownershipPct: 50.8,
    country: "England", matches: 84, runs: 3582, wickets: 0, image: "🏏",
    form: [
      { match: "vs KKR",  score: 95,  points: 112 },
      { match: "vs LSG",  score: 48,  points: 64  },
      { match: "vs MI",   score: 124, points: 144 },
      { match: "vs DC",   score: 22,  points: 36  },
      { match: "vs GT",   score: 78,  points: 94  },
    ],
  },
  {
    id: 24, name: "Yuzvendra Chahal", team: "RR", role: "BOWL", credits: 9.0,
    battingAvg: 4.8, strikeRate: 75.0, economy: 7.84, fantasyAvgPts: 66.6,
    formRating: "Good", ownershipPct: 34.2,
    country: "India", matches: 142, runs: 54, wickets: 187, image: "🌀",
    form: [
      { match: "vs KKR",  wickets: 3, points: 90  },
      { match: "vs LSG",  wickets: 2, points: 66  },
      { match: "vs MI",   wickets: 4, points: 112 },
      { match: "vs DC",   wickets: 1, points: 46  },
      { match: "vs GT",   wickets: 2, points: 70  },
    ],
  },
  {
    id: 25, name: "Trent Boult", team: "RR", role: "BOWL", credits: 9.0,
    battingAvg: 5.5, strikeRate: 85.0, economy: 8.34, fantasyAvgPts: 60.1,
    formRating: "Average", ownershipPct: 18.8,
    country: "New Zealand", matches: 68, runs: 45, wickets: 82, image: "🏔️",
    form: [
      { match: "vs KKR",  wickets: 2, points: 66  },
      { match: "vs LSG",  wickets: 1, points: 46  },
      { match: "vs MI",   wickets: 3, points: 88  },
      { match: "vs DC",   wickets: 2, points: 68  },
      { match: "vs GT",   wickets: 4, points: 108 },
    ],
  },
  // ── GT ──────────────────────────────────────
  {
    id: 26, name: "Shubman Gill", team: "GT", role: "BAT", credits: 10.0,
    battingAvg: 46.3, strikeRate: 140.7, economy: 0, fantasyAvgPts: 70.8,
    formRating: "Hot", ownershipPct: 42.6,
    country: "India", matches: 72, runs: 2421, wickets: 1, image: "🌟",
    form: [
      { match: "vs LSG",  score: 94, points: 108 },
      { match: "vs KKR",  score: 31, points: 46  },
      { match: "vs DC",   score: 78, points: 92  },
      { match: "vs MI",   score: 12, points: 24  },
      { match: "vs CSK",  score: 55, points: 70  },
    ],
  },
  {
    id: 27, name: "Rashid Khan", team: "GT", role: "AR", credits: 10.0,
    battingAvg: 14.6, strikeRate: 155.8, economy: 6.21, fantasyAvgPts: 80.2,
    formRating: "Hot", ownershipPct: 54.4,
    country: "Afghanistan", matches: 102, runs: 412, wickets: 128, image: "💫",
    form: [
      { match: "vs LSG",  score: 21, wickets: 3, points: 108 },
      { match: "vs KKR",  score: 8,  wickets: 2, points: 72  },
      { match: "vs DC",   score: 14, wickets: 4, points: 120 },
      { match: "vs MI",   score: 0,  wickets: 1, points: 48  },
      { match: "vs CSK",  score: 18, wickets: 2, points: 80  },
    ],
  },
  {
    id: 28, name: "Mohammed Shami", team: "GT", role: "BOWL", credits: 9.0,
    battingAvg: 4.1, strikeRate: 90.0, economy: 8.12, fantasyAvgPts: 64.4,
    formRating: "Good", ownershipPct: 28.2,
    country: "India", matches: 82, runs: 82, wickets: 108, image: "💨",
    form: [
      { match: "vs LSG",  wickets: 2, points: 66  },
      { match: "vs KKR",  wickets: 3, points: 88  },
      { match: "vs DC",   wickets: 1, points: 46  },
      { match: "vs MI",   wickets: 4, points: 108 },
      { match: "vs CSK",  wickets: 2, points: 68  },
    ],
  },
  // ── LSG ──────────────────────────────────────
  {
    id: 29, name: "KL Rahul", team: "LSG", role: "WK", credits: 10.0,
    battingAvg: 44.9, strikeRate: 136.2, economy: 0, fantasyAvgPts: 68.7,
    formRating: "Good", ownershipPct: 36.4,
    country: "India", matches: 112, runs: 3298, wickets: 0, image: "🎩",
    form: [
      { match: "vs RR",   score: 91, points: 105 },
      { match: "vs GT",   score: 23, points: 38  },
      { match: "vs PBKS", score: 68, points: 82  },
      { match: "vs MI",   score: 44, points: 60  },
      { match: "vs SRH",  score: 77, points: 92  },
    ],
  },
  {
    id: 30, name: "Nicholas Pooran", team: "LSG", role: "WK", credits: 9.5,
    battingAvg: 38.4, strikeRate: 164.2, economy: 0, fantasyAvgPts: 72.4,
    formRating: "Hot", ownershipPct: 42.8,
    country: "West Indies", matches: 42, runs: 1228, wickets: 0, image: "🌴",
    form: [
      { match: "vs RR",   score: 84, points: 100 },
      { match: "vs GT",   score: 52, points: 68  },
      { match: "vs PBKS", score: 78, points: 94  },
      { match: "vs MI",   score: 28, points: 44  },
      { match: "vs SRH",  score: 61, points: 78  },
    ],
  },
];

export const teams = [
  "All","MI","CSK","RCB","KKR","SRH","DC","PBKS","RR","GT","LSG",
];

export const teamColors: Record<string, string> = {
  RCB: "#E8192C", CSK: "#FDB913", MI: "#004BA0", KKR: "#3B2160",
  DC: "#0078BC",  SRH: "#FF822A", RR: "#EA1D8F", PBKS: "#ED1B24",
  GT: "#1C1C1C",  LSG: "#A7D3F3",
};
