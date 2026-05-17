/**
 * Daily Health Tips Data
 * 
 * Tips are organized by day of week (0 = Sunday to 6 = Saturday)
 * This file is designed to be easily replaceable with MongoDB data later
 * 
 * To integrate with MongoDB later, simply fetch this data from your backend
 * and replace this static data structure with API calls
 */

interface DailyTip {
  id: number;
  day: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  color: string;
}

export const dailyTips: DailyTip[] = [
  {
    id: 1,
    day: 0, // Sunday
    title: "Enjoy Your Funday!",
    description: "It's Sunday - the perfect day to relax and recharge. Take time to enjoy activities you love, spend quality time with family and friends, and prepare yourself for the week ahead.",
    icon: "🎉",
    category: "Lifestyle",
    color: "#FF6B6B"
  },
  {
    id: 2,
    day: 1, // Monday
    title: "Start Your Week Strong",
    description: "Begin Monday with a healthy breakfast and 30 minutes of exercise. This sets a positive tone for the entire week and boosts your metabolism and mental clarity.",
    icon: "💪",
    category: "Exercise",
    color: "#4ECDC4"
  },
  {
    id: 3,
    day: 2, // Tuesday
    title: "Hydration is Key",
    description: "Drink at least 8 glasses of water today. Proper hydration improves energy levels, aids digestion, and helps maintain healthy skin. Keep a water bottle with you throughout the day.",
    icon: "💧",
    category: "Nutrition",
    color: "#45B7D1"
  },
  {
    id: 4,
    day: 3, // Wednesday
    title: "Midweek Mindfulness",
    description: "Take 10 minutes to meditate or practice deep breathing exercises. Mindfulness reduces stress, improves focus, and enhances overall mental well-being. It's the perfect midweek boost.",
    icon: "🧘",
    category: "Mental Health",
    color: "#96CEB4"
  },
  {
    id: 5,
    day: 4, // Thursday
    title: "Boost Your Immunity",
    description: "Include vitamin C-rich foods like oranges, berries, and leafy greens in your diet. A strong immune system helps you stay healthy and fight off common illnesses.",
    icon: "🍊",
    category: "Nutrition",
    color: "#FFEAA7"
  },
  {
    id: 6,
    day: 5, // Friday
    title: "Get Better Sleep",
    description: "Establish a bedtime routine tonight. Go to bed 30 minutes early, avoid screens before sleep, and ensure your room is dark and cool for optimal sleep quality.",
    icon: "😴",
    category: "Sleep",
    color: "#DDA15E"
  },
  {
    id: 7,
    day: 6, // Saturday
    title: "Weekend Workout Fun",
    description: "Try a new physical activity this weekend - hiking, dancing, sports, or yoga. Mix up your routine and have fun while staying active and healthy.",
    icon: "🏃",
    category: "Exercise",
    color: "#BC6C25"
  }
];

/**
 * Get today's tip based on current day
 * Returns the tip object for the current day of the week
 */
export const getTodaysTip = (): DailyTip | undefined => {
  const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  return dailyTips.find(tip => tip.day === today);
};
