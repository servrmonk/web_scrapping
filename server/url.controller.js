const axios = require("axios");
const cheerio = require("cheerio");

const { object, string } = require("yup");

const schema = object({
  url: string().url().required(),
});

const getUrlPreview = async (req, res) => {
  try {
    const value = await schema.validate(req.body);

    console.log("Value in geturlpreview ", value);

    const { data } = await axios.get(value.url);
    const $ =  cheerio.load(data);
    const title =
      $(`meta[property="og:title"]`).attr("content") || $("title").text(); 

    const description =
      $(`meta[property="og:description"]`).attr("content") ||
      $(`meta[property="og:description"]`).attr("content");
    const image =
      $(`meta[property="og:image"]`).attr("content") ||
      $("img").first().attr("src"); 

    const previewData = {
      title: title || "No title available",
      description: description || "No description available",
      image: image || "No image available",
    };
    console.log("previewData", previewData);
    return res.status(200).json(previewData);
  } catch (error) {
    console.log("Erroror", error);

    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getUrlPreview,
};
