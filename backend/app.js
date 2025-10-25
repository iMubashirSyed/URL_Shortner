import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './src/config/mongo.config.js';
import short_url from './src/routes/short_url.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/create', short_url)

app.get('/:id', redirectFromShortUrl)

app.listen(3000, () => {
    connectToMongoDB();
    console.log("Server is running on port 3000");
})