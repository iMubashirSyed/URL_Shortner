export const createShortUrl = async (req,res) => {
    let {url} = req.body;
    let shorturl = nanoid(7);
    let newUrl = new UrlSchema({
        originalUrl: url,
        shortUrl: shorturl
    });
    console.log(newUrl)
    newUrl.save();
    res.send(shorturl);  
} 