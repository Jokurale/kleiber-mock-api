const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const CombinedControllers = require("./controllers/MasterController");

app.use(CombinedControllers);

// *** CORS
app.options(cors());
app.use(cors());

// *** Body Parsing
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.json({ error: "Invalid sytanx." });
  } else next();
});

app.get("/", (req, res) => {
  res.json({ message: "Mock API is up and running." });
});

app.use("*", (req, res) => {
  res.json({
    error: "Path has not been resolved.",
    status: 404,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("[INFO] Mock API is up and running");
});
