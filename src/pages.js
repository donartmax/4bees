const HtmlWebPackPlugin = require("html-webpack-plugin");
const Path = require("path");

const fs = require("fs");

function generateHtmlPlugins(templateDir, folder = "") {
  // Read files in template directory
  const templateFiles = fs.readdirSync(Path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split(".");
    const name = parts[0];
    // Create new HTMLWebpackPlugin with options

    return new HtmlWebPackPlugin({
      filename: `${folder}/${name}/index.html`,
      template: Path.resolve(__dirname, `${templateDir}/${name}/index.html`),
      chunks: ["app", "test"]
    });
  });
}

const phasesPages = generateHtmlPlugins(
  "./views/how-we-do-it/phases/",
  "how-we-do-it/phases"
);

let pages = [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    chunks: ["app", "test", "home"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/what-we-do/index.html",
    filename: "./what-we-do/index.html",
    chunks: ["app", "test", "whatwedo"]
  }),
  // napraviti redirekciju od development ide ka our-products
  new HtmlWebPackPlugin({
    template: "./src/views/joinus/index.html",
    filename: "./joinus/index.html",
    chunks: ["app", "test"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-solutions/applications/index.html",
    filename: "./development/our-solutions/applications/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-solutions/business/index.html",
    filename: "./development/our-solutions/business/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-solutions/design/index.html",
    filename: "./development/our-solutions/design/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-solutions/outsourcing/index.html",
    filename: "./development/our-solutions/outsourcing/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-solutions/mobile/index.html",
    filename: "./development/our-solutions/mobile/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template:
      "./src/views/development/our-solutions/digital-marketing/index.html",
    filename: "./development/our-solutions/digital-marketing/index.html",
    chunks: ["app", "test", "slider_solutions"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-products/index.html",
    filename: "./development/our-products/index.html"
  }),

  new HtmlWebPackPlugin({
    template: "./src/views/development/our-products/kanpeki/index.html",
    filename: "./development/our-products/kanpeki/index.html",
    chunks: ["app", "test", "product"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-products/deducto-pharma/index.html",
    filename: "./development/our-products/deducto-pharma/index.html",
    chunks: ["app", "test", "product"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/development/our-products/project-manager/index.html",
    filename: "./development/our-products/project-manager/index.html",
    chunks: ["app", "test", "product"]
  }),

  new HtmlWebPackPlugin({
    template: "./src/views/how-we-do-it/index.html",
    filename: "./how-we-do-it/index.html",
    chunks: ["app", "test", "howwedoit"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/how-we-do-it/index.html",
    filename: "./how-we-do-it/index.html",
    chunks: ["app", "test", "howwedoit"]
  }),
  new HtmlWebPackPlugin({
    template: "./src/views/contact/index.html",
    filename: "./contact/index.html",
    chunks: ["app", "test", "contact"]
  }),
  ...phasesPages
];

module.exports = { pages };
