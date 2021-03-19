const express = require("express");

const controller = express.Router();

const glues = require("../data/Glues");

const slugifier = require("../tools/Slugifier");

const slugified_data = slugifier(glues);

controller.get("/glues", (req, res) => {
  res.json(slugified_data);
});

controller.get("/glues/:slug", (req, res) => {
  const { slug } = req.params;

  const filter_data = slugified_data.filter((item) => {
    const item_slug = item.slug;

    return item_slug === slug;
  });

  res.json(filter_data);
});

module.exports = controller;
