const express = require('express');
const app = express();
const PORT = 5000; // you can change the port

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend server is running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
