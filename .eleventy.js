module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("www/css");
  eleventyConfig.addPassthroughCopy("www/js");
  eleventyConfig.addPassthroughCopy("www/favicon.ico");
  eleventyConfig.addPassthroughCopy("www/robots.txt");
  return {
  	passthroughFileCopy: true,
    dir: {
      input: "www",
      output: "_site"
    }
  };
};
