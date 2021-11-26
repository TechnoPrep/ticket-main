const db = require('../config/connection');
const { User, SavedEvent } = require('../models');

const userSeeds = require('./userData.json');
const eventSeeds = require('./savedEvents.json');

db.once('open', async () => {
  try {
    await SavedEvent.deleteMany({});
    await User.deleteMany({});
  
    await User.create(userSeeds);
    console.log('User Data Seeded');
    
    for (let i = 0; i < eventSeeds.length; i++) {
      const { 
        _id, 
        userId
      } = await SavedEvent.create(eventSeeds[i]);
      
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            savedEvents: _id
          },
        }
      );
      console.log(user);
    }
} catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
