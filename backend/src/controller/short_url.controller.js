import { getShortUrl } from "../dao/short_url.js";
import { ShortUrlWithoutUserService } from "../services/short_url.service.js";

export const createShortUrl = async (req,res) => {
    let {url} = req.body;
    console.log(url);
    let shorturl = await ShortUrlWithoutUserService(url);
    res.send(process.env.APP_URL + shorturl);  
} 

export const redirectFromShortUrl = async (req, res) => {
    let { id } = req.params;
    let result = await getShortUrl(id);
    console.log(result);
    if (result) {
        return res.redirect(result.originalUrl);
    } else {
        return res.status(404).json({ message: 'URL not found' });
    }
}