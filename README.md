# 💚 Health Monitor

A comprehensive health monitoring and wellness management application designed to help users track their fitness journey, plan nutrition, and maintain body care. Built with **TypeScript, React, and Redux** for a type-safe, fast, and responsive user experience.

## ✨ Features

- **User Authentication** - Secure sign-up and login system with profile management
- **Exercise Tracking** - Daily workout tracking across 4 difficulty levels (Beginner, Intermediate, Advanced, Elite)
- **Nutrition Planning** - BMR and TDEE calculations with personalized macro recommendations
- **Body Care Guidance** - Comprehensive guides for skin care, hydration, eye health, dental care, hair care, and meal planning
- **Progress Analytics** - Real-time tracking of workout progress and completion rates
- **Responsive Design** - Mobile-first responsive design that works seamlessly on all devices
- **Daily Wellness Tips** - Curated daily health tips based on the day of the week
- **Data Persistence** - Local storage for user data and preferences
- **Type Safety** - Full TypeScript support with strict type checking
- **Modern Tooling** - Vite for fast development, React Router for navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn
- TypeScript knowledge (basic understanding of types)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd health-monitor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

**Start the development server:**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

**Type checking:**
```bash
tsc --noEmit
```

**Lint code:**
```bash
npm run lint
npm run lint:fix
```

### Production Build

**Create production build:**
```bash
npm run build
```
Output will be in the `dist/` directory.

**Preview production build locally:**
```bash
npm run preview
```

## 📁 Project Structure

```
health-monitor/
├── src/
│   ├── components/
│   │   ├── Auth.tsx                 # Authentication (login/signup)
│   │   ├── Dashboard.tsx            # Main dashboard overview
│   │   ├── ExerciseTracker.tsx      # Exercise tracking and analytics
│   │   ├── NutritionPlanner.tsx     # Nutrition planning and macro calculation
│   │   ├── BodyCareTracker.tsx      # Body care and health guidelines
│   │   ├── AppLayout.tsx            # Main layout wrapper
│   │   ├── MainNavigation.tsx       # Navigation header
│   │   ├── ErrorPage.tsx            # Error page component
│   │   ├── UI/                      # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   └── index.ts
│   │   └── *.css                    # Component styles
│   ├── data/
│   │   ├── dailyTips.ts            # Daily wellness tips data with typed interfaces
│   │   ├── exercisePlans.ts        # 31-day exercise plans with type definitions
│   │   └── bodyCareData.ts         # Body care guidelines with typed data
│   ├── store/
│   │   └── index.ts                 # Redux store configuration with RootState type
│   ├── App.tsx                      # Main app component with typed routing
│   ├── App.css
│   ├── main.tsx                     # Application entry point
│   └── main.css
├── public/
│   └── img/                         # Static images
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.node.json               # TypeScript config for Node files
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## �️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript with strict type checking
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing
- **Redux** - State management
- **React-Redux** - Redux bindings for React

### Styling
- **CSS3** - Modern styling with flexbox and grid
- **Responsive Design** - Mobile-first approach

### Build & Tooling
- **TypeScript Compiler** - Type checking and compilation
- **ESLint** - Code linting with TypeScript support
- **Terser** - JavaScript minification for production

## 📱 Usage Guide

### Authentication
1. Start by signing up with email, password, and basic information
2. Create a profile with your date of birth and optional profile picture
3. Login with credentials to access the app

### Dashboard
- Overview of all features
- Daily wellness tips
- Quick stats on exercises logged
- Navigation to all modules

### Exercise Tracking
- Select your fitness level (Beginner to Elite)
- View daily workout plans for all 31 days
- Track exercises with completion checkboxes
- Monitor calories burned and completion percentage
- Get daily motivation messages

### Nutrition Planning
- Enter your current stats (weight, height, age, activity level)
- Calculate your BMR and TDEE
- Set target weight and timeframe
- Get personalized macro recommendations (protein, carbs, fats)

### Body Care
- View comprehensive guides for different health areas
- Skin care routines and tips
- Hydration and water intake guidance
- Eye, teeth, and hair care recommendations
- Meal planning and nutrition guidance
- Budget and shopping list recommendations

## 🔐 Data Management

- **Local Storage**: User data is stored in browser's localStorage for persistence
- **Session Storage**: Profile avatars are stored in sessionStorage
- **No Backend**: Currently uses client-side data storage
- **Future Ready**: Architecture supports easy migration to backend API

## 📊 Type Safety

This project uses **TypeScript strict mode** for maximum type safety:

### Type Definitions
- **Interfaces** for Redux state (`RootState`, `AuthState`)
- **Typed Components** - All React components are typed with `FC` (FunctionComponent)
- **Type-Safe Props** - Component props are fully typed
- **Type-Safe State** - Redux actions and state are strongly typed

### Example: Redux Typed State
```typescript
interface RootState {
  auth: AuthState;
  nutrition: Record<string, unknown>;
  exercises?: {
    logs: Array<{
      exerciseName: string;
      calories: string | number;
      date: string;
    }>;
  };
}
```

## 🌟 Key Algorithms

### BMR Calculation (Mifflin-St Jeor Formula)
- Male: 10×weight + 6.25×height - 5×age + 5
- Female: 10×weight + 6.25×height - 5×age - 161

### TDEE Calculation
Based on activity level multiplier applied to BMR

### Macro Distribution
- Protein: 1.8-2.2g per lb (varies by goal)
- Carbs: 45% of total calories
- Fats: 25% of total calories

##  License

MIT License - Feel free to use this project for personal or commercial purposes.

---

**Author**: Abhishek Kushwaha  
**Version**: 1.0.0  
**Status**: Active Development
