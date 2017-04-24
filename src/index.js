// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile('public/index.html');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port:${port}`));
