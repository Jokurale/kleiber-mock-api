const slugify = require("slugify");

module.exports.slugifier = (dataset) => {
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

module.exports.slugs = (dataset) => {
  let output_set = [];

  dataset.forEach((item) => {
    const { name } = item;
    const slug = slugify(name).toLowerCase();

    output_set.push(slug);
  });

  return output_set;
};
