const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("www/css");
  eleventyConfig.addPassthroughCopy("www/js");
  eleventyConfig.addPassthroughCopy("www/favicon.ico");
  eleventyConfig.addPassthroughCopy("www/robots.txt");

  //used for sitemap
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });


  return {
  	passthroughFileCopy: true,
    dir: {
      input: "www",
      output: "_site"
    }
  };
};
