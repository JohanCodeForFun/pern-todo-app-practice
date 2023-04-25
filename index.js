const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('/db');

// require dotenv
// add dotenv for password

// Routes

// create a todo

// get a todo

// update a todo

// delete a todo



// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({hello: "dggf"})
})

app.listen(5001, () => {
  console.log('server has started on port 5001')
})