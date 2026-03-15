export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  gradFrom: string;
  gradTo: string;
  emoji: string;
  content: string;
}

export const articles: BlogArticle[] = [
  {
    id: 1, slug: "bumrah-returns-mi-vs-rcb-preview",
    title: "Bumrah Returns: Why MI Are Favourites Against RCB Tonight",
    excerpt: "Jasprit Bumrah's return to form has transformed Mumbai Indians into title contenders. We analyse why tonight's clash at Wankhede could be a statement game.",
    author: "Arjun Mehta", date: "March 15, 2026", readTime: "5 min", category: "Match Preview",
    gradFrom: "#1d4ed8", gradTo: "#1e3a8a", emoji: "🏏",
    content: `<p>After a brief scare in the middle of the season, Jasprit Bumrah has returned to his devastating best. Over the last three matches, he's picked up 9 wickets at an economy of just 5.8 — numbers that would make any batting lineup tremble.</p><h2>The Numbers Don't Lie</h2><p>At Wankhede, Bumrah's record is staggering. In 28 IPL matches at his home ground, he has taken 38 wickets at an economy of 6.12. More importantly, he's dismissed Virat Kohli three times in the last five encounters — a key matchup to watch tonight.</p><h2>RCB's Vulnerability</h2><p>Royal Challengers Bengaluru have historically struggled against high pace in the powerplay. Their top order averages just 28.4 against deliveries above 140 km/h — and Bumrah regularly touches 150. If MI can get two early wickets, RCB's fragile middle order could collapse.</p><h2>Verdict</h2><p>MI are favourites by a fair margin tonight. Their home advantage, Bumrah's exceptional form, and a batting lineup firing on all cylinders make them the side to back. Predicted score: MI 195/4, RCB 168/8.</p>`,
  },
  {
    id: 2, slug: "dream11-captain-selection-secrets",
    title: "Dream11 Secrets: How to Pick the Perfect Captain Every Match",
    excerpt: "Picking the right captain can be the difference between winning and losing in fantasy cricket. Our data-driven guide reveals the patterns that top players use.",
    author: "Priya Sharma", date: "March 14, 2026", readTime: "8 min", category: "Fantasy Tips",
    gradFrom: "#16a34a", gradTo: "#064e3b", emoji: "🏆",
    content: `<p>In Dream11, your captain earns 2x points while your vice-captain earns 1.5x. That means a single captain pick can be worth 60-80 extra points — often the entire margin of victory in a competitive league.</p><h2>The Form vs Venue Dilemma</h2><p>Most beginners just pick whoever is in best form. Experienced players add a venue filter. For example, Virat Kohli averages 62.4 at Wankhede — nearly 15 runs higher than his overall average. This "venue boost" should always factor into your captain selection.</p><h2>All-Rounders Win</h2><p>All-rounders consistently score more fantasy points than pure batsmen or bowlers because they contribute in multiple dimensions. Players like Ravindra Jadeja and Sunil Narine routinely outscore "star" batsmen in fantasy points, even when those batsmen score big.</p><h2>The 60-40 Split Strategy</h2><p>Create two teams — one with the "safe" captain choice (most consistent performer) and one "differentiator" pick (high-risk, high-reward). This strategy maximises your ceiling while keeping a floor.</p>`,
  },
  {
    id: 3, slug: "ipl-2026-title-race",
    title: "IPL 2026 Title Race: The Three Teams That Can Go All the Way",
    excerpt: "With 14 matches remaining, three franchises stand head and shoulders above the rest. We break down their strengths, weaknesses, and paths to the trophy.",
    author: "Rahul Verma", date: "March 12, 2026", readTime: "10 min", category: "Analysis",
    gradFrom: "#d97706", gradTo: "#7c2d12", emoji: "🥇",
    content: `<p>Twelve matches into IPL 2026, the title race has already started crystallising. While seven teams still have mathematical chances, three franchises — Mumbai Indians, Chennai Super Kings, and Gujarat Titans — have separated themselves.</p><h2>Mumbai Indians: The Powerhouse</h2><p>With Bumrah bowling at his peak and Rohit Sharma finally finding consistency at the top, MI look the most complete unit. Their Net Run Rate of +1.28 is the best in the league.</p><h2>Chennai Super Kings: The Experience Factor</h2><p>CSK's secret weapon isn't any individual player — it's institutional knowledge. They've been in six of the last seven finals. Dhoni's finishing, Jadeja's all-round heroics, and Deepak Chahar's swing make them perpetually dangerous.</p><h2>Gujarat Titans: The Dark Horse</h2><p>GT have the most balanced XI. Rashid Khan at 6.21 economy is the tournament's best bowler. Shubman Gill averaging 46 at the top gives them rock-solid foundation. If Shami stays fit, they could go all the way.</p>`,
  },
  {
    id: 4, slug: "kohli-century-breakdown",
    title: "Anatomy of Kohli's 113*: Shot-by-Shot Breakdown of the Masterclass",
    excerpt: "Virat Kohli's 113 not out against Delhi Capitals was an innings for the ages. We break down each phase and the mindset behind one of the IPL's all-time great knocks.",
    author: "Siddharth Anand", date: "March 10, 2026", readTime: "12 min", category: "Deep Dive",
    gradFrom: "#dc2626", gradTo: "#7f1d1d", emoji: "👑",
    content: `<p>Virat Kohli walked in at the fall of the first wicket with RCB under pressure at 10/1 in the second over. What followed over the next 62 balls was a masterclass in building an innings under pressure.</p><h2>Phase 1: The Anchor (Balls 1-15)</h2><p>Kohli played entirely in the V in the first 15 balls. Strike rate of 80, but zero risk. He played himself in while Maxwell attacked at the other end.</p><h2>Phase 2: The Acceleration (Balls 16-40)</h2><p>The transition was imperceptible. From ball 16 onwards, Kohli's strike rate jumped to 155. He targeted the leg-side consistently, using his powerful flick and pull to devastating effect.</p><h2>Phase 3: The Carnage (Balls 41-62)</h2><p>The final 22 balls produced 68 runs. Five sixes. Seven fours. The DC captain tried everything — pace changes, different angles, a leg-spin gamble — but nothing could stop the avalanche.</p>`,
  },
  {
    id: 5, slug: "fantasy-cricket-beginners-guide",
    title: "Fantasy Cricket in 2026: The Ultimate Beginner's Guide to Dream11",
    excerpt: "New to Dream11? This comprehensive guide covers everything from team selection fundamentals to advanced strategies that can help you win real money.",
    author: "Ananya Roy", date: "March 8, 2026", readTime: "15 min", category: "Guide",
    gradFrom: "#9333ea", gradTo: "#1e1b4b", emoji: "📚",
    content: `<p>Dream11 has over 150 million users and is India's most popular fantasy sports platform. But over 70% of users consistently lose money. This guide will help you understand the game and become profitable.</p><h2>Understanding the Points System</h2><p>Every run earns 1 point. A four earns 1 bonus point. A six earns 2 bonus. A wicket earns 25 points. A catch earns 8. Your captain earns 2x everything, vice-captain 1.5x.</p><h2>Team Formation</h2><p>You must pick exactly 11 players — max 7 from one team, min 4 from the other. Budget: 100 credits. Balance your spending across all 11 to maximise value.</p><h2>Grand League vs Small Leagues</h2><p>Grand Leagues are winner-takes-all. Head-to-Head or Small leagues are better for consistent winners. If you're a beginner, start with 2-team H2H matches.</p>`,
  },
  // ── 5 NEW ARTICLES ──────────────────────────────────────────────────
  {
    id: 6, slug: "ipl-2025-top-10-fantasy-picks-opening-week",
    title: "IPL 2025 Top 10 Fantasy Picks for Opening Week",
    excerpt: "The tournament is here! We've crunched the numbers to give you the 10 must-have players for your Dream11 team in the opening week of IPL 2025.",
    author: "Vikrant Gupta", date: "March 7, 2026", readTime: "7 min", category: "Fantasy Tips",
    gradFrom: "#E8192C", gradTo: "#7f0f16", emoji: "🌟",
    content: `<p>Opening week fantasy cricket is all about identifying the players who are in the best form going into the tournament and targeting the best matchups. Here are our top 10 picks:</p><h2>1. Jos Buttler (RR) — 10.5 Cr</h2><p>The Englishman is the gold standard for fantasy openers. He has 3 IPL centuries and tends to fire big in the first few matches when pitches are fresh. Non-negotiable at max credits.</p><h2>2. Jasprit Bumrah (MI) — 10.5 Cr</h2><p>Bumrah is always a must-have against top-order batting lineups. His economy of 6.84 across 120 matches speaks for itself. Expect 70+ fantasy points on average.</p><h2>3. Rashid Khan (GT) — 10.0 Cr</h2><p>On slow, spin-friendly tracks in the early season, Rashid is near unplayable. He also chips in with crucial runs in the lower order. Excellent captain option.</p><h2>4. Virat Kohli (RCB) — 11.5 Cr</h2><p>Yes, he's expensive. But Kohli's floor (50 pts) is higher than most players' ceilings. He's been the most consistent fantasy performer for 6 straight seasons.</p><h2>Budget Picks (Under 8.5 Cr)</h2><p>Look at Arshdeep Singh (PBKS, 8.5 Cr) and Yuzvendra Chahal (RR, 9.0 Cr) for strong bowling options. Sam Curran (PBKS, 9.0 Cr) is a sneaky all-rounder value pick.</p>`,
  },
  {
    id: 7, slug: "pitch-analysis-batting-venues-ipl-2025",
    title: "Pitch Analysis: Which Venues Favor Batsmen in IPL 2025",
    excerpt: "Not all IPL pitches are created equal. We break down the top venues that produce high-scoring matches and explain how to exploit these stats in your fantasy teams.",
    author: "Priya Sharma", date: "March 6, 2026", readTime: "9 min", category: "Analysis",
    gradFrom: "#0284c7", gradTo: "#0c4a6e", emoji: "🏟️",
    content: `<p>Venue analysis is one of the most underutilised edges in fantasy cricket. Knowing which grounds produce high scores can dramatically improve your player selection.</p><h2>Wankhede Stadium (Mumbai) — Avg Score: 182</h2><p>The best batting ground in IPL. Short boundaries square of the wicket, outfield lightning-fast. Average first innings score in IPL is 182. Pick your full complement of batsmen here.</p><h2>Eden Gardens (Kolkata) — Avg Score: 168</h2><p>A great venue for batsmen, especially those who play spin well. The pitch is true and the carry is good. Openers with high strike rates do exceptionally well here.</p><h2>Narendra Modi Stadium (Ahmedabad) — Avg Score: 175</h2><p>The largest cricket stadium in the world also produces some of the biggest scores. The massive outfield doesn't help batsmen as much as you'd expect — still highly bat-friendly.</p><h2>Bowling-Friendly Grounds to Avoid Batsmen</h2><p>At Chepauk (Chennai), Avg first innings is just 158. Avoid picking only batsmen here. Arun Jaitley Stadium (Delhi) can be tough early on with swing. Target bowlers at these venues.</p>`,
  },
  {
    id: 8, slug: "budget-players-fantasy-leagues-ipl-2025",
    title: "Budget Players Who Will Win You Fantasy Leagues in IPL 2025",
    excerpt: "You don't need to blow your entire budget on stars. These under-the-radar players under 8.5 credits could be the difference between winning and losing your league.",
    author: "Arjun Mehta", date: "March 5, 2026", readTime: "8 min", category: "Fantasy Tips",
    gradFrom: "#15803d", gradTo: "#14532d", emoji: "💰",
    content: `<p>The secret to winning Grand Leagues isn't picking all the obvious stars — it's finding the differential. Budget players under 8.5 credits who outperform their price tag are the key to a winning percentage in Grand Leagues.</p><h2>Why Budget Players Matter</h2><p>If you spend all 100 credits on top-tier players, you end up with the same team as 60% of fantasy managers. You can only win if someone else's pick fails and yours succeeds. Budget players are the differentiator.</p><h2>Arshdeep Singh (PBKS, 8.5 Cr)</h2><p>IPL's best new ball bowler below 9 credits. He takes wickets upfront, economical in the powerplay, and takes the 19th-over pressure role. 45+ pts most matches. A steal.</p><h2>Sam Curran (PBKS, 9.0 Cr)</h2><p>Curran is an all-rounder with genuine upside — he can tonk 30 off 12 balls, take 2 wickets, and win you 90+ pts on a good day. Avoid on dead pitches.</p><h2>Ruturaj Gaikwad (CSK, 9.5 Cr)</h2><p>Massively undervalued at 9.5 Cr. CSK's most consistent opener — 4 fifties in 5 matches. At Chepauk, he averages 62. A reliable 70+ pts player week in, week out.</p>`,
  },
  {
    id: 9, slug: "captain-picks-guide-ipl-2025",
    title: "Captain Picks Guide: Who to Captain Every Match in IPL 2025",
    excerpt: "Week-by-week captain recommendations with data-driven reasoning. Bookmark this guide and update your Dream11 team before every match this season.",
    author: "Rahul Verma", date: "March 4, 2026", readTime: "11 min", category: "Guide",
    gradFrom: "#F5A623", gradTo: "#92400e", emoji: "⭐",
    content: `<p>The captain decision earns you 2x points, making it the single most impactful choice in Dream11. A good captain can win you a Grand League. Here's our data-based framework and match-by-match recommendations.</p><h2>The Framework</h2><p>We score each player on: Recent form (30%), Venue history (25%), Matchup vs opponent bowling (25%), and Injury/selection risk (20%). The player who scores highest is our captain recommendation.</p><h2>MI vs RCB — March 15</h2><p><strong>Captain: Ravindra Jadeja (82.5 avg pts)</strong>. His all-round contributions make him unique — even on bad batting days, he takes wickets. Best 2x value in this fixture.</p><h2>CSK vs KKR — March 16</h2><p><strong>Captain: Ruturaj Gaikwad (CSK)</strong>. At Chepauk, Gaikwad is unreal — 62 average on his home ground. Spin doesn't trouble him and he builds through the innings professionally.</p><h2>RR vs SRH — March 17</h2><p><strong>Captain: Jos Buttler (RR)</strong>. Jaipur's pitch suits top-order batsmen perfectly. Buttler has scored 3 centuries at this venue. With his current purple patch, he's the money pick.</p>`,
  },
  {
    id: 10, slug: "mi-vs-csk-ultimate-rivalry-stats",
    title: "Head to Head: MI vs CSK — The Ultimate Rivalry Stats",
    excerpt: "MI vs CSK is cricket's greatest franchise rivalry. We dive deep into 30 years of data to reveal who holds the edge in every phase of the game.",
    author: "Siddharth Anand", date: "March 2, 2026", readTime: "13 min", category: "Deep Dive",
    gradFrom: "#1e40af", gradTo: "#1e3a8a", emoji: "⚔️",
    content: `<p>Mumbai Indians vs Chennai Super Kings is the most anticipated match on every IPL calendar. 34 meetings, 5 title encounters, and countless memorable moments. Here's the complete data breakdown.</p><h2>Overall Record</h2><p>MI lead 20-14. However, in playoff encounters, CSK hold a 4-2 edge — clutch performance is their hallmark. The last 5 matches have gone 3-2 to MI.</p><h2>Powerplay Battle</h2><p>MI average 52.4 runs in the first 6 overs in this fixture — the highest against any opponent. Rohit Sharma against CSK's new ball attack averages 38, significantly above his overall average of 28 in the powerplay.</p><h2>Death Overs: Where MI Win</h2><p>Bumrah against CSK's middle order: 22 wickets across 14 matches. Economy: 5.8. CSK's death average against MI in the last 4 overs is just 7.4 runs per over — significantly below their season average.</p><h2>Fantasy Angle</h2><p>For MI vs CSK matchups, prioritise: Jadeja (82.5 avg), Rohit (72.1 avg), and Bumrah (76.3 avg). CSK batting heroes tend to underperform against Bumrah — avoid their middle-order batsmen as captain.</p>`,
  },
];
