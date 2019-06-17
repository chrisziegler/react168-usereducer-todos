const white = '#FFFFFF';
const black = '#000';
const darkgray = '#38474a';
const lightgray = '#f9fafb';
const blue = '#2852da';

const themeLight = {
  background: lightgray,
  body: black,
  highlight: blue,
  borders: darkgray,
};

const themeDark = {
  background: black,
  body: white,
  highlight: darkgray,
  borders: darkgray,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
