import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";
import { get } from "mongoose";

export const ShortUrlWithoutUserService = async (url) => {
    let shorturl = await generateNanoId(7);
    await saveShortUrl(shorturl, url);
    return shorturl;
}

export const ShortUrlWithUserService = async (url, userId) => {
    let shorturl = await generateNanoId(7);
    let exists = await getCustomShortUrl(shorturl);
    if (exists){
        throw new Error('Short URL collision, try again');
    }
    await saveShortUrl(shorturl, url, userId);
    return shorturl;
}

