module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'screens': './src/screens',
          'components': './src/components',
          'utils': './src/utils',         
          'assets': './src/assets',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
          '.png'
        ],
      }
    ]
  ]
};
