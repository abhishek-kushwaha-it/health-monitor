// 31-Day Exercise Plans with 4 Difficulty Levels

interface Exercise {
  name: string;
  calories: number;
  duration?: string;
  category?: string;
}

interface DayPlan {
  day: number;
  name: string;
  exercises: Exercise[];
}

interface ExercisePlan {
  [key: string]: DayPlan[];
}

export const exercisePlans: ExercisePlan = {
  beginner: [
    { day: 1, name: 'Start Easy', exercises: [{ name: 'Walking 20 min', calories: 100 }, { name: 'Stretching 5 min', calories: 30 }] },
    { day: 2, name: 'Upper Body', exercises: [{ name: 'Push-ups 3x8', calories: 90 }, { name: 'Dumbbell Press 3x8', calories: 80 }] },
    { day: 3, name: 'Cardio', exercises: [{ name: 'Cycling 25 min', calories: 150 }] },
    { day: 4, name: 'Lower Body', exercises: [{ name: 'Squats 3x12', calories: 120 }, { name: 'Lunges 3x8', calories: 70 }] },
    { day: 5, name: 'Full Body', exercises: [{ name: 'Circuit training 20 min', calories: 180 }] },
    { day: 6, name: 'Active Recovery', exercises: [{ name: 'Yoga 30 min', calories: 100 }] },
    { day: 7, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 8, name: 'Upper Power', exercises: [{ name: 'Push-ups 3x10', calories: 110 }, { name: 'Rows 3x10', calories: 100 }] },
    { day: 9, name: 'Cardio Burn', exercises: [{ name: 'Running 20 min', calories: 180 }, { name: 'Burpees 3x8', calories: 60 }] },
    { day: 10, name: 'Leg Strength', exercises: [{ name: 'Squats 3x15', calories: 140 }, { name: 'Leg Press 3x10', calories: 120 }] },
    { day: 11, name: 'Cardio Active', exercises: [{ name: 'Swimming 25 min', calories: 170 }] },
    { day: 12, name: 'Full Body 2', exercises: [{ name: 'HIIT 20 min', calories: 200 }] },
    { day: 13, name: 'Recovery Yoga', exercises: [{ name: 'Yoga 40 min', calories: 120 }, { name: 'Stretching 10 min', calories: 40 }] },
    { day: 14, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 15, name: 'Challenge Upper', exercises: [{ name: 'Push-ups 4x10', calories: 130 }, { name: 'Pull-ups 3x5', calories: 90 }] },
    { day: 16, name: 'Challenge Legs', exercises: [{ name: 'Squats 4x12', calories: 160 }, { name: 'Deadlifts 3x5', calories: 120 }] },
    { day: 17, name: 'Cardio Intervals', exercises: [{ name: 'Interval Running 25 min', calories: 200 }] },
    { day: 18, name: 'Core & Cardio', exercises: [{ name: 'Plank Circuit 15 min', calories: 100 }, { name: 'Cycling 20 min', calories: 130 }] },
    { day: 19, name: 'Full Body Power', exercises: [{ name: 'Complex movements 25 min', calories: 210 }] },
    { day: 20, name: 'Active Recovery', exercises: [{ name: 'Yoga 35 min', calories: 110 }, { name: 'Walking', calories: 80 }] },
    { day: 21, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 22, name: 'Strength Focus', exercises: [{ name: 'Bench Press 4x8', calories: 120 }, { name: 'Incline Press 3x8', calories: 110 }] },
    { day: 23, name: 'Leg Day', exercises: [{ name: 'Bulgarian Squats 3x10', calories: 110 }, { name: 'Leg Curls 3x12', calories: 100 }] },
    { day: 24, name: 'Cardio Tempo', exercises: [{ name: 'Tempo Run 25 min', calories: 180 }] },
    { day: 25, name: 'Back & Biceps', exercises: [{ name: 'Rows 4x8', calories: 120 }, { name: 'Pull-ups 4x5', calories: 100 }] },
    { day: 26, name: 'Full Body Circuit', exercises: [{ name: 'Compound Circuit 25 min', calories: 220 }] },
    { day: 27, name: 'Active Recovery', exercises: [{ name: 'Swimming 30 min', calories: 150 }] },
    { day: 28, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 29, name: 'Max Effort Day', exercises: [{ name: 'Heavy Bench 5x3', calories: 140 }, { name: 'Squats 5x3', calories: 180 }] },
    { day: 30, name: 'Cardio Finisher', exercises: [{ name: 'HIIT 25 min', calories: 220 }, { name: 'Sprint intervals', calories: 80 }] },
    { day: 31, name: 'Final Challenge', exercises: [{ name: 'Full body endurance 35 min', calories: 250 }] }
  ],
  intermediate: [
    { day: 1, name: 'Chest Focus', exercises: [{ name: 'Bench Press 4x8', calories: 140 }, { name: 'Incline Press 3x10', calories: 120 }] },
    { day: 2, name: 'Leg Power', exercises: [{ name: 'Squats 5x5', calories: 180 }, { name: 'Leg Press 3x8', calories: 130 }] },
    { day: 3, name: 'Cardio HIIT', exercises: [{ name: 'HIIT 20 min', calories: 220 }, { name: 'Sprint intervals', calories: 100 }] },
    { day: 4, name: 'Back & Biceps', exercises: [{ name: 'Rows 4x8', calories: 140 }, { name: 'Pull-ups 4x6', calories: 120 }] },
    { day: 5, name: 'Active Recovery', exercises: [{ name: 'Swimming 30 min', calories: 160 }, { name: 'Stretching', calories: 50 }] },
    { day: 6, name: 'Full Body', exercises: [{ name: 'Compound movements 30 min', calories: 200 }] },
    { day: 7, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 8, name: 'Deadlift Day', exercises: [{ name: 'Deadlifts 5x5', calories: 200 }, { name: 'Power Cleans 3x5', calories: 150 }] },
    { day: 9, name: 'Cardio Tempo', exercises: [{ name: 'Tempo run 25 min', calories: 200 }, { name: 'Cycling intervals', calories: 100 }] },
    { day: 10, name: 'Shoulder Press', exercises: [{ name: 'OHP 4x6', calories: 130 }, { name: 'Lateral Raises 3x12', calories: 80 }] },
    { day: 11, name: 'Leg Hypertrophy', exercises: [{ name: 'Bulgarian Squats 4x10', calories: 140 }, { name: 'Leg Curls 3x12', calories: 100 }] },
    { day: 12, name: 'Mixed Cardio', exercises: [{ name: 'Circuit training 25 min', calories: 220 }, { name: 'Burpees', calories: 80 }] },
    { day: 13, name: 'Mobility', exercises: [{ name: 'Yoga 40 min', calories: 120 }, { name: 'Foam Rolling 10 min', calories: 50 }] },
    { day: 14, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 15, name: 'Max Effort Bench', exercises: [{ name: 'Heavy Bench 5x3', calories: 160 }, { name: 'Board Press 3x5', calories: 130 }] },
    { day: 16, name: 'Max Effort Squat', exercises: [{ name: 'Box Squats 5x3', calories: 190 }, { name: 'Pin Squats 3x5', calories: 150 }] },
    { day: 17, name: 'VO2 Max', exercises: [{ name: 'Interval sprints 20 min', calories: 240 }, { name: 'High intensity', calories: 100 }] },
    { day: 18, name: 'Accessory Work', exercises: [{ name: 'Isolation exercises 30 min', calories: 160 }] },
    { day: 19, name: 'Metabolic Conditioning', exercises: [{ name: 'Complexes & circuits 25 min', calories: 230 }] },
    { day: 20, name: 'Deload', exercises: [{ name: 'Light movement 20 min', calories: 80 }, { name: 'Stretching', calories: 40 }] },
    { day: 21, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 22, name: 'Pressing Day', exercises: [{ name: 'Bench 4x6', calories: 150 }, { name: 'Overhead Press 4x8', calories: 140 }] },
    { day: 23, name: 'Pulling Day', exercises: [{ name: 'Deadlifts 4x5', calories: 180 }, { name: 'Rows 4x6', calories: 140 }] },
    { day: 24, name: 'Cardio Blast', exercises: [{ name: 'HIIT 25 min', calories: 260 }] },
    { day: 25, name: 'Leg Strength', exercises: [{ name: 'Squats 5x5', calories: 190 }, { name: 'Leg Press 4x8', calories: 150 }] },
    { day: 26, name: 'Recovery', exercises: [{ name: 'Swimming 35 min', calories: 180 }, { name: 'Mobility 10 min', calories: 60 }] },
    { day: 27, name: 'Full Body Power', exercises: [{ name: 'Olympic Lift Training 30 min', calories: 240 }] },
    { day: 28, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 29, name: 'Max Day', exercises: [{ name: 'Bench 5x3', calories: 160 }, { name: 'Squats 5x3', calories: 190 }, { name: 'Deadlifts 3x3', calories: 170 }] },
    { day: 30, name: 'Conditioning', exercises: [{ name: 'High intensity circuits 25 min', calories: 280 }] },
    { day: 31, name: 'Completion', exercises: [{ name: 'Full body test 40 min', calories: 300 }] }
  ],
  advanced: [
    { day: 1, name: 'Heavy Chest', exercises: [{ name: 'Bench 5x3', calories: 180 }, { name: 'Close Grip Bench 4x5', calories: 150 }] },
    { day: 2, name: 'Heavy Legs', exercises: [{ name: 'Squats 6x2', calories: 220 }, { name: 'Leg Press 4x6', calories: 160 }] },
    { day: 3, name: 'Conditioning', exercises: [{ name: 'Prowler Push/Pull 20 min', calories: 280 }] },
    { day: 4, name: 'Heavy Back', exercises: [{ name: 'Deadlifts 5x3', calories: 200 }, { name: 'T-Bar Rows 4x5', calories: 170 }] },
    { day: 5, name: 'Recovery Day', exercises: [{ name: 'Yoga 45 min', calories: 150 }, { name: 'Mobility', calories: 80 }] },
    { day: 6, name: 'Max Effort Upper', exercises: [{ name: 'Chain Bench 5x3', calories: 190 }, { name: 'Board Press 3x5', calories: 160 }] },
    { day: 7, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 8, name: 'Dynamic Effort', exercises: [{ name: 'Speed Squats 8x2', calories: 200 }, { name: 'Leg Curls 3x8', calories: 120 }] },
    { day: 9, name: 'Complex Work', exercises: [{ name: 'Power Cleans 5x3', calories: 220 }, { name: 'Push Press 5x3', calories: 180 }] },
    { day: 10, name: 'Conditioning Blast', exercises: [{ name: '30 min sled drags & sprints', calories: 320 }] },
    { day: 11, name: 'Accessory Lower', exercises: [{ name: 'Bulgarian Squats 4x8', calories: 160 }, { name: 'Sled Push 3x10', calories: 140 }] },
    { day: 12, name: 'Density Training', exercises: [{ name: 'High volume circuits 35 min', calories: 300 }] },
    { day: 13, name: 'Mobility Focus', exercises: [{ name: 'Yoga 50 min', calories: 160 }, { name: 'Stretching', calories: 60 }] },
    { day: 14, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 15, name: 'Max Upper Body', exercises: [{ name: 'Heavy Bench 5x1', calories: 170 }, { name: 'Heavy Rows 5x3', calories: 190 }] },
    { day: 16, name: 'Max Lower Body', exercises: [{ name: 'Heavy Squats 5x1', calories: 240 }, { name: 'Heavy Deadlifts 3x1', calories: 200 }] },
    { day: 17, name: 'Velocity Work', exercises: [{ name: 'Sprint training 25 min', calories: 300 }, { name: 'Battle ropes', calories: 100 }] },
    { day: 18, name: 'Olympic Lifting', exercises: [{ name: 'Snatch & Jerk complex 30 min', calories: 280 }] },
    { day: 19, name: 'Metabolic Finisher', exercises: [{ name: 'Complex barbell circuits 25 min', calories: 320 }] },
    { day: 20, name: 'Light Week', exercises: [{ name: 'Technical work & recovery 30 min', calories: 120 }] },
    { day: 21, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 22, name: 'Pressing Wave', exercises: [{ name: 'Bench 4x4', calories: 170 }, { name: 'Incline 4x6', calories: 160 }, { name: 'Machine Press 3x8', calories: 130 }] },
    { day: 23, name: 'Squatting Wave', exercises: [{ name: 'Squat 4x4', calories: 210 }, { name: 'Box Squat 4x6', calories: 190 }, { name: 'Leg Press 3x8', calories: 150 }] },
    { day: 24, name: 'Sport Specific', exercises: [{ name: 'Plyometric training 25 min', calories: 310 }] },
    { day: 25, name: 'Pulling Wave', exercises: [{ name: 'Deadlift 4x4', calories: 200 }, { name: 'Pin Pulls 4x6', calories: 180 }, { name: 'Rows 3x8', calories: 160 }] },
    { day: 26, name: 'Conditioning Peak', exercises: [{ name: 'HIIT + strength 35 min', calories: 330 }] },
    { day: 27, name: 'Technique Work', exercises: [{ name: 'Olympic lifts technical 30 min', calories: 260 }] },
    { day: 28, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 29, name: 'Total Max Effort', exercises: [{ name: 'Max Bench 5x1', calories: 180 }, { name: 'Max Squat 5x1', calories: 240 }, { name: 'Max Deadlift 3x1', calories: 210 }] },
    { day: 30, name: 'Explosive Work', exercises: [{ name: 'Plyometrics & sprints 25 min', calories: 330 }] },
    { day: 31, name: 'Final Assault', exercises: [{ name: 'Max effort conditioning 40 min', calories: 360 }] }
  ],
  elite: [
    { day: 1, name: 'Extreme Upper', exercises: [{ name: 'Bench 6x2', calories: 220 }, { name: 'Close Grip Bench 5x3', calories: 190 }, { name: 'Board Press 4x3', calories: 170 }] },
    { day: 2, name: 'Extreme Legs', exercises: [{ name: 'Squats 6x2', calories: 260 }, { name: 'Box Squats 5x3', calories: 220 }, { name: 'Leg Press 4x4', calories: 180 }] },
    { day: 3, name: 'Anaerobic Conditioning', exercises: [{ name: 'Sled drags 30 min', calories: 320 }, { name: 'Sprint intervals', calories: 140 }, { name: 'Rope climbs', calories: 100 }] },
    { day: 4, name: 'Extreme Back', exercises: [{ name: 'Deadlifts 6x2', calories: 240 }, { name: 'T-Bar Rows 5x3', calories: 210 }, { name: 'Pendulum Rows 4x4', calories: 180 }] },
    { day: 5, name: 'Active Recovery', exercises: [{ name: 'Ice bath recovery 20 min', calories: 50 }, { name: 'Light yoga 30 min', calories: 100 }] },
    { day: 6, name: 'Olympic Lifting Focus', exercises: [{ name: 'Clean & Jerk 5x3', calories: 260 }, { name: 'Snatch 5x3', calories: 240 }, { name: 'Front Squat 4x3', calories: 200 }] },
    { day: 7, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 8, name: 'Speed & Explosiveness', exercises: [{ name: 'Plyometric circuits 30 min', calories: 300 }, { name: 'Box jumps 5x3', calories: 150 }, { name: 'Med ball work', calories: 120 }] },
    { day: 9, name: 'Metabolic Stress', exercises: [{ name: 'Giant set circuits 40 min', calories: 340 }, { name: 'Supersets', calories: 120 }, { name: 'Complex compounds', calories: 140 }] },
    { day: 10, name: 'Battle Rope Burnout', exercises: [{ name: 'Battle ropes 30 min', calories: 340 }, { name: 'Heavy bag 20 min', calories: 200 }, { name: 'Conditioning', calories: 160 }] },
    { day: 11, name: 'Extreme Shoulders', exercises: [{ name: 'OHP 5x3', calories: 220 }, { name: 'Push Press 5x3', calories: 200 }, { name: 'Dumbbell Press 4x5', calories: 170 }] },
    { day: 12, name: 'Hybrid Training', exercises: [{ name: 'Strength + cardio 45 min', calories: 360 }, { name: 'Barbell complexes', calories: 180 }, { name: 'Sprint finisher', calories: 140 }] },
    { day: 13, name: 'Mobility & Prehab', exercises: [{ name: 'Mobility 50 min', calories: 160 }, { name: 'Joint prep 20 min', calories: 80 }, { name: 'Recovery stretching', calories: 60 }] },
    { day: 14, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 15, name: 'Total Body Max', exercises: [{ name: 'Bench 5x1', calories: 200 }, { name: 'Squat 5x1', calories: 240 }, { name: 'Deadlift 3x1', calories: 220 }] },
    { day: 16, name: 'Strongman Training', exercises: [{ name: 'Yoke walk 5x40m', calories: 280 }, { name: 'Farmer carry 5x50m', calories: 240 }, { name: 'Log press 5x3', calories: 200 }] },
    { day: 17, name: 'Cardio Extreme', exercises: [{ name: 'Assault bike 30 min', calories: 340 }, { name: 'Rowing 20 min', calories: 220 }, { name: 'Sled drags 10 min', calories: 140 }] },
    { day: 18, name: 'Powerlifting Day', exercises: [{ name: 'Bench singles', calories: 240 }, { name: 'Squat singles', calories: 260 }, { name: 'Deadlift singles', calories: 240 }, { name: 'Chains/Bands', calories: 120 }] },
    { day: 19, name: 'EMOM Challenge', exercises: [{ name: '45 min EMOM complex', calories: 340 }, { name: 'Multiple movement patterns', calories: 160 }] },
    { day: 20, name: 'Technical Deload', exercises: [{ name: 'Movement quality 45 min', calories: 140 }, { name: 'Light weight practice', calories: 80 }] },
    { day: 21, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 22, name: 'Accessory Overload', exercises: [{ name: 'High volume isolation 50 min', calories: 280 }, { name: 'Supersets', calories: 140 }, { name: 'Drop sets', calories: 120 }] },
    { day: 23, name: 'Conditional Capacity', exercises: [{ name: 'Long duration 60 min', calories: 320 }, { name: 'Moderate weight circuits', calories: 180 }] },
    { day: 24, name: 'VO2 Max Work', exercises: [{ name: 'Interval sprints 25 min', calories: 340 }, { name: 'High intensity circuits', calories: 180 }] },
    { day: 25, name: 'Compound Day', exercises: [{ name: 'Multi-joint 45 min', calories: 300 }, { name: 'Heavy compounds', calories: 200 }, { name: 'Chain/Band work', calories: 140 }] },
    { day: 26, name: 'Endurance Strength', exercises: [{ name: '40 min mixed', calories: 320 }, { name: 'Heavy carries', calories: 180 }, { name: 'Stamina building', calories: 140 }] },
    { day: 27, name: 'Explosive Power', exercises: [{ name: 'Plyometrics 40 min', calories: 340 }, { name: 'Olympic lifting', calories: 260 }, { name: 'Speed work', calories: 140 }] },
    { day: 28, name: 'Rest Day', exercises: [{ name: 'Complete rest', calories: 0 }] },
    { day: 29, name: 'Ultimate Challenge', exercises: [{ name: 'Heavy bench 5x1', calories: 220 }, { name: 'Heavy squat 5x1', calories: 260 }, { name: 'Heavy deadlift 3x1', calories: 240 }, { name: 'Conditioning', calories: 200 }] },
    { day: 30, name: 'All Out Power', exercises: [{ name: 'Explosive circuits 40 min', calories: 360 }, { name: 'Max speed work', calories: 180 }, { name: 'Sprint finisher', calories: 140 }] },
    { day: 31, name: 'Elite Completion', exercises: [{ name: 'Full assessment 50 min', calories: 400 }, { name: 'Multiple modalities', calories: 180 }, { name: 'Victory lap', calories: 140 }] }
  ]
};

export const getDayFromPlan = (difficulty: string, dayNumber: number): DayPlan | undefined => {
  const plan = exercisePlans[difficulty] || exercisePlans.beginner;
  return plan.find(p => p.day === dayNumber);
};

export const getTodaysPlan = (difficulty: string): DayPlan | undefined => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  // Cap at 31 days (in case of months with more days, use day 31)
  const dayNumber = Math.min(dayOfMonth, 31);
  return getDayFromPlan(difficulty, dayNumber);
};
