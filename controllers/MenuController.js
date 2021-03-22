const express = require("express");

const controller = express.Router();

const glues_menu_items = require("../data/MenuGluesItems");

const combined_menu = {
  glues: glues_menu_items,
};

const ALLOWED_SLUGS = { glues: true, applications: true };

controller.get("/menu", (req, res) => {
  res.json(combined_menu);
});

controller.get("/menu/:slug", (req, res) => {
  const { slug } = req.params;

  if (slug in ALLOWED_SLUGS) res.json(combined_menu[slug]);
});

module.exports = controller;
