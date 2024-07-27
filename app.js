
const express = require("express");
const app = express();
const port = 4000;

const { logger } = require("./logger");
const { loadModules } = require("./module");


loadModules(app)


app.listen(port, () => {
  logger.info(`Starting app at port ${port}`);
});
