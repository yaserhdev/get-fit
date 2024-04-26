const db = require('../config/connection');
const { Exercise, Category } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Exercise', 'exercises');
        await cleanDB('Category', 'categories');
        await Category.create(categorySeeds);
        for (let i = 0; i < exerciseSeeds.length; i++) {
            const { _id, name } = await Exercise.create(exerciseSeeds[i]);
            const category = await Category.findOneAndUpdate(
                { name: name },
                {
                    $addToSet: {
                        exercises: _id,
                    },
                },
            );
        };
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Seeding complete!');
    process.exit(0);
});
