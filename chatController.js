// controllers/chatController.js

const getChatbotResponse = async (message) => {
  // Define a standard response with basic plant care tips
  const reply = `🌿 Here are some basic plant care tips:
- **Light**: Most houseplants prefer bright, indirect sunlight. Place them near windows but avoid direct harsh sunlight.
- **Watering**: Water when the top inch of soil feels dry. Overwatering can lead to root rot.
- **Humidity**: Many indoor plants thrive in moderate humidity. Consider misting your plants or using a humidity tray.
- **Soil**: Use well-draining soil suitable for your specific plant type.
- **Fertilizing**: Feed your plants with a balanced fertilizer during the growing season, typically spring and summer.
- **Cleaning**: Wipe leaves with a damp cloth to remove dust and allow for better photosynthesis.
- **Repotting**: Repot your plants every 1-2 years to provide fresh soil and more room for growth.

Remember, each plant species has its unique needs, so it's beneficial to research specific care instructions for your plant. Happy planting! 🌱`;

  return reply;
};

module.exports = { getChatbotResponse };
