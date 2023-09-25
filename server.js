const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json('Hello World!');
})

//#region get all users
app.get('/users', (req, res) => {
  res.status(200).json("all users")
})
//#endregion

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

