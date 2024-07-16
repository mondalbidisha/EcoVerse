const loadingMessages = [
    "Planting trees... Please wait a moment!",
    "Cleaning up the ocean... Hang tight!",
    "Harnessing solar power... Just a sec!",
    "Recycling good vibes... Almost there!",
    "Composting data... Stay tuned!",
    "Charging with wind energy... Almost ready!",
    "Watering our ideas... Please hold on!",
    "Growing greener... Just a moment!",
    "Reducing carbon footprint... Loading soon!",
    "Sowing seeds of sustainability... Patience, please!"
];

export const generateLoadingMessage = () => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
};

export const hasValidFcmToken = () => {
    // Get the user object from localStorage
    const user = localStorage.getItem('user');
    
    // Check if the user object exists
    if (user) {
      // Parse the user object
      const userObj = JSON.parse(user);
      
      // Check if the fcmToken exists and is not null
      if (userObj.fcmToken) {
        return true;
      }
    }
    // Return false if user object doesn't exist or doesn't have a valid fcmToken
    return false;
  }
  
  