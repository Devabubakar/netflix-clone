const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

const bodyParser = require('body-parser');

if (process.env !== 'production') dotenv.config();

const PORT = process.env.NODE_PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/browse', async (req, res) => {
  try {
    await axios(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_MOVIE_API_KEY}`
    ).then((response) =>
      res.status(200).json({
        status: 'success',
        data: response.data,
      })
    );
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`server running on port : ${PORT}`);
});
