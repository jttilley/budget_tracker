const config = {
  entry: {
    app: "./public/index.js",
    chart: "./public/db.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development"
}

module.exports = config;