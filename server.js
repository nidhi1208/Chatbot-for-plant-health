const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;

const chatRoutes = require('./routes/chat');

app.use(cors());
app.use(bodyParser.json());

// Serve frontend from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API Route
app.use('/api/chat', chatRoutes);

// Route to serve index.html directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Groq server running on http://localhost:${PORT}`);
});
