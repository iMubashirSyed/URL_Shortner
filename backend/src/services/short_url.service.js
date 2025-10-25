import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url.js";

export const ShortUrlWithoutUserService = async (url) => {
    let shorturl = await generateNanoId(7);
    await saveShortUrl(shorturl, url);
    return shorturl;
}

export const ShortUrlWithUserService = async (url, userId) => {
    let shorturl = await generateNanoId(7);
    await saveShortUrl(shorturl, url, userId);
    return shorturl;
}