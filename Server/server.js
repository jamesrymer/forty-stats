import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/allPlayerStats', async (req, res) => {
    const { playerName, timeWindow, accountType } = req.query;

  try {
    const response = await axios.get(`https://fortnite-api.com/v2/stats/br/v2?name=${playerName}&timeWindow=season&accountType=${accountType}`, {
      headers: {
        'Authorization': 'f8a9f129-f73e-4e88-8ec3-2dd57d35b6af'
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while trying to fetch data from Fortnite API');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});