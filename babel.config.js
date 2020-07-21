module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          navigation: './src/navigation',
          utils: './src/utils',
          screens: './src/screens',
          api: './src/api',
          components: './src/components',
        },
      },
    ],
  ],
};
