const white = '#FFFFFF';
const black = '#000';
const darkgray = '#38474a';
const lightgray = '#f9fafb';
const blue = '#2852da';
const khaki = '#F4EDAE';

const themeLight = {
  background: lightgray,
  body: black,
  highlight: blue,
  borders: darkgray,
  input: white,
};

const themeDark = {
  background: black,
  body: white,
  highlight: darkgray,
  borders: darkgray,
  input: khaki,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
