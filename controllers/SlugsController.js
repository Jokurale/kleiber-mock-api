const express = require("express");

const controller = express.Router();

const glues = require("../data/Glues");

const { slugs } = require("../tools/Slugifier");

const response_slugs = {
  glues_slugs: slugs(glues),
};

const ALLOWED_TYPES = { glues: true, applications: true };

controller.get(["/slugs", "/slugs/:type"], (req, res) => {
  const { type } = req.params;

  if (!type) {
    res.json({ ...response_slugs });
  }

  if (type in ALLOWED_TYPES) {
    const slugs_selector = `${type}_slugs`;

    res.json({
      [slugs_selector]: response_slugs[slugs_selector],
    });
  }
});

module.exports = controller;
