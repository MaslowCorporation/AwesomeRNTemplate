
module.exports = {
  presets: [
    //'babel-preset-expo'
    "@babel/preset-react"
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
