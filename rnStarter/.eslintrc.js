module.exports = {
  root: true,
  extends: [
    'airbnb',
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
}
