import UrlSchema from "../models/shorturl.model.js";

export const saveShortUrl = async (shortUrl, LongUrl, UserId) => {
  let newUrl = new UrlSchema({
    originalUrl: LongUrl,
    shortUrl: shortUrl,
  });
  if (UserId) {
    newUrl.userId = UserId;
  }
  console.log(newUrl);
  newUrl.save();
};

export const getShortUrl = async (id) => {
    return await UrlSchema.findOneAndUpdate({ shortUrl: id }, { $inc: { clicks: 1 } });
}

export const getCustomShortUrl = async (slug) => {
    return await UrlSchema.findOne({ shortUrl: slug });
}