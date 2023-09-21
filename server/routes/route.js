import express from 'express';

import { getNews } from '../contoller/newsController.js'

const route = express.Router();


// connection of the file
route.get("/news", getNews);
  

export default route;