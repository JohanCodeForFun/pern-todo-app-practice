const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('/db');

// require dotenv
// add dotenv for password

// middleware
app.use(cors());
app.use(express.json()) // req.body

// Routes

app.post('/todos', async (req, res) => {
  try {
    console.log(req.body)
  } catch (err) {
    console.error(err.message)
  }
})


// create a todo

// create a todo

// get a todo

// update a todo

// delete a todo

app.get('/:ouid/:quizid', (req, res) => {
  const {word, quizid} = req.params;
  res.json({ouid: quizid})
  // app.redirect('')
})

app.listen(5001, () => {
  console.log('server has started on port 5001')
})