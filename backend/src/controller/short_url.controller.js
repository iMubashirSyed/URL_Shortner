import { getCustomShortUrl, getShortUrl } from "../dao/short_url.js";
import { ShortUrlWithoutUserService, ShortUrlWithUserService } from "../services/short_url.service.js";

export const createShortUrl = async (req,res) => {
    let data = req.body;
    let shorturl;
    console.log(data.url);
    if (req.user){
        shorturl = await ShortUrlWithUserService(data.url,req.user._id, data.slug);    
    } else {
        shorturl = await ShortUrlWithoutUserService(data.url);
    }
    console.log(shorturl);
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

// export const createCustomShortUrl = (req, res) => {
//     const { url, slug } = req.body;
//     let customUrl = getCustomShortUrl(slug);
//     if (customUrl) {
//         return res.status(400).json({ message: 'Custom slug already in use' });
//     }
    
// }