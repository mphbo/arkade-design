const path = require("path");

module.exports = {
  entry: "./src/index.js", // Update with the entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Update with your desired output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.glsl$/,
        loader: "glslify-loader",
        exclude: /node_modules/,
      },
      // Add any additional loaders for other file types (e.g., GLSL loaders) here
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"], // Add any additional file extensions you want to support
  },
};
