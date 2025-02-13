const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    defaultMeta: { service: "test-service" },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
      new winston.transports.Console({
        format: winston.format.timestamp(),
        level: "debug"
      }),
    ],
  });

module.exports = {
    logger
}