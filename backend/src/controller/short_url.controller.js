import { getCustomShortUrl, getShortUrl } from "../dao/short_url.js";
import { ShortUrlWithoutUserService, ShortUrlWithUserService } from "../services/short_url.service.js";

export const createShortUrl = async (req,res) => {
    let {url} = req.body;
    let shorturl;
    console.log(url);
    if (req.user){
        shorturl = await ShortUrlWithUserService(url);    
    } else {
        shorturl = await ShortUrlWithoutUserService(url);
    }
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

export const createCustomShortUrl = (req, res) => {
    const { url, slug } = req.body;
    let customUrl = getCustomShortUrl(slug);
    if (customUrl) {
        return res.status(400).json({ message: 'Custom slug already in use' });
    }
    
}