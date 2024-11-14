const express = require('express');
const app = express();
const port = process.env.PORT || 5005;

// Middleware to serve the JSON file as an API
app.get('/api', (req, res) => {
  const data = require('./db.json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
