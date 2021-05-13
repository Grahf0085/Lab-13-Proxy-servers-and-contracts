/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatGeo } from './munge-utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

// API routes,
app.get('/location', async (req, res) => {
  // use SQL query to get data...
  try {

    const response = await request.get('https://us1.locationiq.com/v1/search.php')
      .query({ key: process.env.LOCATION_API_KEY })
      .query({ q: req.query.search })
      .query({ format: 'json' });

    const location = formatGeo(response.body);

    res.json(location);

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default app;