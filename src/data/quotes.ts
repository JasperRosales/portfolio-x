export const inspirationalQuotes = [
  "Innovation distinguishes between a leader and a follower.",
  "The future belongs to those who learn more skills and combine them in creative ways.",
  "Excellence is not a skill, it's an attitude.",
  "The only way to do great work is to love what you do.",
  "Simplicity is the ultimate sophistication.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different.",
  "Your most unhappy customers are your greatest source of learning.",
  "The best way to predict the future is to invent it.",
  "Stay hungry, stay foolish.",
  "Perfect is the enemy of good.",
  "Technology is nothing. What's important is that you have a faith in people.",
  "The greatest enemy of productivity is not inefficiency; it's complexity."
];

export const getRandomQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  return inspirationalQuotes[randomIndex];
};

export const getQuoteByIndex = (index: number): string => {
  if (index >= 0 && index < inspirationalQuotes.length) {
    return inspirationalQuotes[index];
  }
  return inspirationalQuotes[0];
};

