# 💚 Health Monitor

A comprehensive health monitoring and wellness management application designed to help users track their fitness journey, plan nutrition, and maintain body care. Built with modern web technologies for a fast and responsive user experience.


## ✨ Features

- **User Authentication** - Secure sign-up and login system with profile management
- **Exercise Tracking** - Daily workout tracking across 4 difficulty levels (Beginner, Intermediate, Advanced, Elite)
- **Nutrition Planning** - BMR and TDEE calculations with personalized macro recommendations
- **Body Care Guidance** - Comprehensive guides for skin care, hydration, eye health, dental care, hair care, and meal planning
- **Progress Analytics** - Real-time tracking of workout progress and completion rates
- **Responsive Design** - Mobile-first responsive design that works seamlessly on all devices
- **Daily Wellness Tips** - Curated daily health tips based on the day of the week
- **Data Persistence** - Local storage for user data and preferences


## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn

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
│   │   ├── Auth.jsx                 # Authentication (login/signup)
│   │   ├── Dashboard.jsx            # Main dashboard overview
│   │   ├── ExerciseTracker.jsx      # Exercise tracking and analytics
│   │   ├── NutritionPlanner.jsx     # Nutrition planning and macro calculation
│   │   ├── BodyCareTracker.jsx      # Body care and health guidelines
│   │   ├── AppLayout.jsx            # Main layout wrapper
│   │   ├── MainNavigation.jsx       # Navigation header
│   │   ├── ErrorPage.jsx            # Error page component
│   │   ├── UI/                      # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── IntroSection.jsx
│   │   │   └── index.js
│   │   └── *.css                    # Component styles
│   ├── data/
│   │   ├── dailyTips.js            # Daily wellness tips data
│   │   ├── exercisePlans.js        # 31-day exercise plans
│   │   └── bodyCareData.js         # Body care guidelines
│   ├── store/
│   │   └── index.js                 # Redux store configuration
│   ├── App.jsx                      # Main app component with routing
│   ├── App.css
│   ├── main.jsx                     # Application entry point
│   └── main.css
├── public/
│   └── img/                         # Static images
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```


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


## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.
