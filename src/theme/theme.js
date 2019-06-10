const white = '#FFFFFF';
const black = '#161617';
const darkgray = '#4C4B4B';
const gray = '#F8F8F9';
// const darkblue = '#689fce';
const lightblue = '#7FAED6';

const themeLight = {
  background: gray,
  body: black,
  highlight: lightblue,
};

const themeDark = {
  background: black,
  body: white,
  highlight: darkgray,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
