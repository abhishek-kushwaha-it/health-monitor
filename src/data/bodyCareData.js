export const bodyCareGuidelines = {
    skin: {
        title: '🧴 Skin Care',
        content: {
            routine: 'Morning and Night after bath',
            product: 'Parachute Coconut Oil',
            description: 'Your skin quality is your first impression in looks',
            tips: [
                'Apply moisturizer after bathing',
                'Include healthy fats in diet',
                'Eat salads, protein, and fiber-rich foods',
                'Stay hydrated throughout the day'
            ]
        }
    },
    hydration: {
        title: '💧 Hydration',
        content: {
            routine: 'Daily hydration protocol',
            product: 'Water & nutrient-rich foods',
            description: 'Essential for skin elasticity and overall health',
            tips: [
                'Drink 4-5 liters of water daily',
                'Include hydrated food sources',
                'Eat fiber-rich foods',
                'Maintain skin moisture with oils'
            ]
        }
    },
    eye: {
        title: '👁️ Eye Care',
        content: {
            rule: '20-20-20 Rule',
            description: 'Every 20 minutes, look at something 20 feet away for 20 seconds',
            products: [
                { name: 'Lubricant Drops', use: 'As needed for dry eyes' },
                { name: 'Polarized Lenses', use: 'Outdoor, sunny settings - minimizes glare' },
                { name: 'AG/AR Lenses', use: 'Indoor & night - anti-glare/anti-reflective' },
                { name: 'Photochromic Lenses', use: 'Changes color with light, full UV protection' },
                { name: 'Blue-light Lenses', use: 'Filters digital screen light, prevents eye strain' },
                { name: 'Hard-coated Lenses', use: 'Durable, scratch-resistant for plastic lenses' }
            ],
            conditions: {
                myopia: 'Nearsightedness: See near clear, far blurry → Concave (−) lenses',
                hypermetropia: 'Farsightedness: See far clear, near blurry → Convex (+) lenses'
            },
            nutrition: 'Hydrated and fiber-rich food sources'
        }
    },
    teeth: {
        title: '🦷 Teeth Care',
        content: {
            description: 'Maintain strong enamel and healthy gums with proper oral hygiene',
            enamel: 'The hard, outer protective layer - strongest substance in your body',
            fluoride: 'Natural mineral that strengthens enamel',
            morning: [
                'Brush for 2 minutes with soft-bristled brush',
                'Use low-RDA toothpaste (0-70 RDA)',
                'Floss between teeth',
                'Rinse thoroughly with water'
            ],
            evening: [
                'Brush again for 2 minutes',
                'Use fluoride mouthwash',
                'Clean tongue gently',
                'Avoid eating after brushing'
            ],
            schedule: [
                { title: 'Daily Brushing', frequency: '2x daily - Morning & Night' },
                { title: 'Flossing', frequency: 'Daily - Once before bed' },
                { title: 'Professional Cleaning', frequency: 'Every 6 months' },
                { title: 'Dental Checkup', frequency: 'Bi-annual or annual' },
                { title: 'Whitening', frequency: 'Annually under dentist supervision' }
            ],
            foods: [
                'Milk and dairy products (calcium)',
                'Leafy greens (vitamins & minerals)',
                'Almonds and walnuts (phosphorus)',
                'Crunchy fruits & vegetables',
                'Green and black tea (fluoride)'
            ],
            rdaScale: {
                low: '0-70: Low abrasive - Daily use, protects enamel',
                medium: '70-100: Medium abrasive - Acceptable for most',
                high: '100-250: Too abrasive - May damage enamel'
            },
            maintenance: [
                'Use low-abrasive toothpaste',
                'Pair with soft-bristled brush',
                'Avoid over-brushing',
                'Enamel cannot regenerate once lost'
            ]
        }
    },
    hair: {
        title: '💇 Hair Care',
        content: {
            description: 'Keratin-based hair care for strength, growth, and scalp health',
            structure: 'Hair is made primarily of keratin (protein)',
            growth: {
                daily: '0.3-0.5 mm per day',
                monthly: '~1 cm per month',
                yearly: '~12 cm per year'
            },
            washingSchedule: [
                { type: 'Hair Wash', frequency: 'Alternate days (2-3 times per week)' },
                { type: 'Oil Massage', frequency: '2-3 times per week' },
                { type: 'Deep Conditioning', frequency: 'Weekly' },
                { type: 'Protein Treatment', frequency: 'Bi-weekly' }
            ],
            products: [
                { type: 'Coconut Oil', recommendation: 'For dry scalp and dandruff - penetrates hair shaft', frequency: '2x per week' },
                { type: 'Mustard Oil', recommendation: 'For regrowth and cold weather protection', frequency: '1-2x per week' },
                { type: 'Dabur Amla Oil', recommendation: 'For daily use and hair fall prevention', frequency: 'Daily or alternate days' },
                { type: 'Rosemary Oil (Diluted)', recommendation: 'Natural growth support and dandruff relief', frequency: '2-3x per week' }
            ],
            nutrients: [
                { nutrient: 'Protein', role: 'Builds hair structure' },
                { nutrient: 'Iron', role: 'Prevents hair thinning & shedding' },
                { nutrient: 'Biotin (B7)', role: 'Improves strength, texture, growth' },
                { nutrient: 'Zinc', role: 'Repairs tissue, maintains oil glands' },
                { nutrient: 'Vitamin D', role: 'Stimulates hair follicles' },
                { nutrient: 'Omega-3', role: 'Keeps scalp and hair hydrated' },
                { nutrient: 'Vitamin E', role: 'Antioxidant; promotes circulation' },
                { nutrient: 'Vitamin A', role: 'Helps produce sebum (natural oil)' }
            ],
            routine: [
                'Use mild shampoo',
                'Wash hair alternatively (not daily)',
                'Avoid heat styling and chemicals',
                'Trim split ends regularly'
            ],
            treatments: [
                {
                    name: 'Minoxidil',
                    type: 'FDA-approved medicinal',
                    use: 'Pattern baldness, thinning',
                    timeline: '3-6 months for results',
                    note: 'May have side effects'
                },
                {
                    name: 'Rosemary Oil',
                    type: 'Natural essential oil',
                    use: 'Natural growth support, dandruff',
                    timeline: '2-3x per week, diluted',
                    note: 'Gentle alternative to minoxidil'
                },
                {
                    name: 'Redensyl',
                    type: 'Plant-based active',
                    use: 'Hair loss and thinning',
                    timeline: '2-3 months for results',
                    note: 'Daily application needed for maintenance'
                }
            ]
        }
    },
    meals: {
        title: '🍽️ Diet & Nutrition',
        content: {
            description: 'Balanced nutrition plan with macronutrients, micronutrients, and meal schedule',
            hydration: '4-5 Liters water per day',
            mealStructure: [
                { 
                    name: '🕐 Morning (Pre-Workout)', 
                    description: 'Light, energy-boosting breakfast',
                    time: '6:00 - 7:00 AM',
                    calories: '140 kcal'
                },
                { 
                    name: '💪 Breakfast (Post-Workout)',
                    description: 'Protein and nutrient-rich meal',
                    time: '8:00 - 9:00 AM',
                    calories: '414 kcal'
                },
                { 
                    name: '🌞 Lunch',
                    description: 'Heavy meal with carbs, protein, and vegetables',
                    time: '12:30 - 1:30 PM',
                    calories: '854 kcal'
                },
                { 
                    name: '🌙 Dinner',
                    description: 'Balanced meal with light carbs and protein',
                    time: '7:00 - 8:00 PM',
                    calories: '887 kcal'
                }
            ],
            healthyFoods: [
                { emoji: '🥚', name: 'Eggs', benefits: 'Complete protein, Choline for brain health', frequency: 'Daily - 2-3 eggs' },
                { emoji: '🥗', name: 'Leafy Greens', benefits: 'Iron, Calcium, Vitamins A & K', frequency: 'Daily in salads' },
                { emoji: '🥜', name: 'Nuts & Seeds', benefits: 'Healthy fats, Protein, Minerals', frequency: '30-50g daily' },
                { emoji: '🥛', name: 'Milk & Dairy', benefits: 'Calcium, Protein, Vitamin D', frequency: 'Daily - 2 cups' },
                { emoji: '🍌', name: 'Bananas', benefits: 'Potassium, Energy, B vitamins', frequency: '1-2 daily' },
                { emoji: '🥕', name: 'Colorful Vegetables', benefits: 'Antioxidants, Fiber, Vitamins', frequency: 'Every meal' }
            ],
            foodsToLimit: [
                '⚠️ Refined sugar and sugary drinks - Causes energy crashes and weight gain',
                '⚠️ Processed & packaged food - High sodium and artificial additives',
                '⚠️ Fried foods - High in unhealthy fats and calories',
                '⚠️ Excessive caffeine - Can disrupt sleep and hydration',
                '⚠️ Alcohol - Empty calories and liver stress',
                '⚠️ High-fat meats - Choose lean protein instead'
            ],
            dailyIntake: [
                '💧 Water: 4-5 liters throughout the day',
                '🥛 Milk: 500 ml (with breakfast or before bed)',
                '🍌 Fruits: 1-2 servings daily (seasonal)',
                '🥗 Vegetables: 3-4 servings in main meals',
                '💊 Multivitamin: Daily if deficient',
                '☀️ Sunlight: 20 minutes daily for Vitamin D'
            ],
            macronutrients: [
                { name: 'Protein', sources: 'Eggs, Soya, Lentils, Chickpeas', benefit: 'Helps muscle repair and recovery' },
                { name: 'Complex Carbs', sources: 'Oats, Brown rice, Whole wheat, Fruits', benefit: 'Steady energy for endurance' },
                { name: 'Healthy Fats', sources: 'Almonds, Walnuts, Chia seeds, Flaxseeds', benefit: 'Support brain, joints, and hormones' },
                { name: 'Fiber', sources: 'Vegetables, Fruits, Sprouts', benefit: 'Improves digestion and metabolism' }
            ],
            micronutrients: [
                { name: 'Vitamin A', sources: 'Carrots, Sweet potatoes', benefit: 'Vision and immunity' },
                { name: 'Vitamin B12', sources: 'Eggs, Dairy', benefit: 'Nerves and red blood cells' },
                { name: 'Biotin (B7)', sources: 'Eggs, Nuts, Seeds', benefit: 'Energy and skin health' },
                { name: 'Vitamin C', sources: 'Lemon, Amla, Oranges', benefit: 'Boosts immunity and recovery' },
                { name: 'Vitamin D', sources: 'Sunlight (20 min/day), Fish', benefit: 'Strengthens bones and hormones' },
                { name: 'Vitamin E', sources: 'Almonds, Avocado', benefit: 'Acts as an antioxidant' },
                { name: 'Iron', sources: 'Beetroot, Spinach', benefit: 'Supports haemoglobin and stamina' },
                { name: 'Zinc', sources: 'Pumpkin seeds, Chickpeas', benefit: 'Improves recovery and immunity' },
                { name: 'Potassium', sources: 'Banana, Dates', benefit: 'Balances muscles and heart' },
                { name: 'Omega-3', sources: 'Walnuts, Fatty fish', benefit: 'Reduces inflammation and sharpens mind' }
            ],
            mealSchedule: [
                {
                    time: '🕐 Morning – Pre-Workout',
                    calories: '140 kcal',
                    protein: '3g',
                    carbs: '21g',
                    fats: '5.6g',
                    items: [
                        { food: 'Warm water with lemon (500 ml)', kcal: '5', p: '0g', c: '2g', f: '0g' },
                        { food: 'Soaked raisins (16 pcs – ~24 g)', kcal: '72', p: '0.5g', c: '18g', f: '0g' },
                        { food: 'Soaked almonds (6 pcs – ~9 g)', kcal: '63', p: '2.5g', c: '1g', f: '5.6g' }
                    ],
                    benefit: 'Quick energy, Fiber, antioxidants, magnesium, vitamin E, hair & skin support'
                },
                {
                    time: '💪 Post-Workout / Breakfast',
                    calories: '414 kcal',
                    protein: '16g',
                    carbs: '42g',
                    fats: '18g',
                    items: [
                        { food: 'Soaked chickpeas (½ cup – 100 g)', kcal: '164', p: '10g', c: '27g', f: '2.5g' },
                        { food: 'Chia + flax seeds (1 tbsp each – 14 g + 14 g)', kcal: '125', p: '4g', c: '6g', f: '9.5g' },
                        { food: 'Walnuts (5 pcs – ~10 g)', kcal: '65', p: '1.5g', c: '1g', f: '6g' },
                        { food: 'Juice: 1 beetroot + 2 carrots + 2 gooseberries', kcal: '60', p: '0.5g', c: '8g', f: '0g' }
                    ],
                    benefit: 'Protein, Fiber, antioxidants, ALA omega-3, vitamins A & C, minerals for hair & immunity'
                },
                {
                    time: '🌞 Afternoon',
                    calories: '854 kcal',
                    protein: '38.5g',
                    carbs: '118g',
                    fats: '27.3g',
                    items: [
                        { food: 'Vegetable curry or paneer (100–150 g)', kcal: '200', p: '16g', c: '8g', f: '10g' },
                        { food: 'Curd (100 g, veg days)', kcal: '70', p: '3.5g', c: '4g', f: '3g' },
                        { food: 'Chapattis + ghee (4 × 50 g = 200 g wheat + 10 g ghee)', kcal: '544', p: '18g', c: '98g', f: '14g' },
                        { food: 'Salad (1 bowl – 100g)', kcal: '40', p: '1g', c: '8g', f: '0.3g' }
                    ],
                    benefit: 'Complex carbs, protein, calcium, vitamins A & K, Fiber, omega-3 (ALA from flax + ghee)'
                },
                {
                    time: '🌙 Night',
                    calories: '887 kcal',
                    protein: '45g',
                    carbs: '108g',
                    fats: '30.5g',
                    items: [
                        { food: 'Mixed dal (½ cup cooked – 100 g)', kcal: '120', p: '9g', c: '16g', f: '3g' },
                        { food: 'Chapattis + ghee (2 × 50 g = 100 g wheat + 5 g ghee)', kcal: '272', p: '9g', c: '49g', f: '2g' },
                        { food: 'Banana milk (250 ml)', kcal: '155', p: '5g', c: '12g', f: '7g' },
                        { food: '2 boiled eggs', kcal: '40', p: '12g', c: '1g', f: '10g' },
                        { food: 'Roasted chana (50 g)', kcal: '200', p: '10g', c: '30g', f: '3.5g' }
                    ],
                    benefit: 'Protein (animal + plant), Fiber, vitamins B12, zinc, selenium, omega-3'
                }
            ],
            dailyTotals: {
                calories: '2295 kcal',
                protein: '102.5g',
                carbs: '289g',
                fats: '81.5g'
            },
            weeklyAdditions: [
                { item: 'Fish (salmon, mackerel, sardine)', frequency: 'Sunday', benefit: 'EPA + DHA omega-3: heart, brain, hair' }
            ],
            monthlyRequirements: [
                { item: 'Almonds 250 gm', cost: '₹200' },
                { item: 'Raisins 500 gm', cost: '₹250' },
                { item: 'Chickpeas 3 kg', cost: '₹250' },
                { item: '60 eggs', cost: '₹500' },
                { item: 'Chia 500 gm', cost: '₹300' },
                { item: 'Flax 500 gm', cost: '₹200' },
                { item: 'Walnuts 500 gm', cost: '₹500' },
                { item: 'Roasted Chana 2 Kg', cost: '₹200' },
                { item: 'Wheat 8 Kg', cost: '₹400' },
                { item: 'Milk 10 Lt', cost: '₹800' },
                { item: 'Ghee 500 gm', cost: '₹300' },
                { item: 'Pulse 3 Kg', cost: '₹300' },
                { item: 'Banana: 4 DZ', cost: '₹200' }
            ],
            monthlyFresh: {
                items: 'Cucumber, Tomato, Onion, Carrot, Beetroot, Gooseberry, Lemon, Paneer',
                cost: '₹1,000 per month'
            },
            monthlyFruits: {
                note: 'As per season – any time',
                cost: '₹600 per month'
            },
            monthlyOthers: {
                note: 'Other miscellaneous items',
                cost: '₹2,000 per month'
            },
            totalMonthlyCost: '₹8,000 per month',
            note: '❌ SAY NO TO PACKAGING and OUTSIDE FOOD - Either discuss or decide, but you cannot do both'
        }
    }
};
