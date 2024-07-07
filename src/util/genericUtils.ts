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

const generateLoadingMessage = () => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
  };
  
  export default generateLoadingMessage;