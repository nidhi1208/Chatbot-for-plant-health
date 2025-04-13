// routes/chat.js

const express = require('express');
const router = express.Router();
const { getChatbotResponse } = require('../controllers/chatController');

router.post('/', async (req, res) => {
  const { message } = req.body;
  const reply = await getChatbotResponse(message);
  res.json({ reply });
});

module.exports = router;
