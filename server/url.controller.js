const axios = require("axios");
const cheerio = require("cheerio");
const { object, string } = require("yup");

const schema = object({
  url: string().url().required(),
});

const getUrlPreview = async (req, res) => {
  try {
    // Validate URL from the request body
    const value = await schema.validate(req.body);
    console.log("Value in getUrlPreview:", value);

    // Fetch the page data using axios
    const { data } = await axios.get(value.url);
    const $ = cheerio.load(data);

    // Extract title, description, and image
    const title =
      $("meta[property='og:title']").attr("content") || $("title").text();

    const description =
      $("meta[property='og:description']").attr("content") ||
      $("meta[name='description']").attr("content") || 
      "No description available";

    let image =
      $("meta[property='og:image']").attr("content") ||
      $("img").first().attr("src") || 
      "No image available";

    // If image URL is relative, resolve it to an absolute URL
    if (image && !image.startsWith("http")) {
      const { protocol, host } = new URL(value.url);
      image = `${protocol}//${host}${image}`;
    }

    // Prepare the preview data
    const previewData = {
      title: title || "No title available",
      description: description,
      image: image,
    };

    console.log("Preview Data:", previewData);
    return res.status(200).json(previewData);
  } catch (error) {
    console.error("Error in getUrlPreview:", error.message);
    return res.status(500).json({ error: "Failed to generate preview" });
  }
};

module.exports = {
  getUrlPreview,
};
