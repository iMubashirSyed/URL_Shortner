import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectToMongoDB from './src/config/mongo.config.js';
import UrlSchema from './src/models/shorturl.model.js';
import short_url from './src/routes/short_url.route.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/create', short_url)

app.get('/:id', async (req, res) => {
    let { id } = req.params;
    let urlData = await UrlSchema.findOne({ shortUrl: id });
    if (urlData) {
        res.redirect(urlData.originalUrl);
    } else {
        return res.status(404).json({ message: 'URL not found' });
    }
});

app.listen(3000, () => {
    connectToMongoDB();
    console.log("Server is running on port 3000");
})