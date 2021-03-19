const slugify = require("slugify");

module.exports = (dataset) => {
  let output_set = [];

  dataset.forEach((item, index) => {
    const { name } = item;
    const slug = slugify(name).toLowerCase();

    output_set.push({
      ...item,
      id: index + 1,
      slug,
    });
  });

  return output_set;
};
