module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    devServer: {
      contentBase: __dirname + "/public",
      port: 9009
    },
    output: {
      path: __dirname + "/public/js",
      filename: "main.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    }
  };
