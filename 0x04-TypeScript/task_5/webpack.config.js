const path = require('path');

module.exports = {
  entry: './js/main.ts', // Entry point relative to task_5/
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // All .ts files
        use: 'ts-loader', // Use ts-loader for TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development', // You can switch to 'production' later
  devtool: 'source-map', // Useful for debugging TypeScript
};

