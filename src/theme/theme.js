const white = '#FFFFFF';
const black = '#161617';
const gray = '#F8F8F9';
const darkblue = '#483D8B';
const lightblue = '#00BFFF';

const themeLight = {
  background: gray,
  body: black,
  highlight: darkblue,
};

const themeDark = {
  background: black,
  body: white,
  highlight: lightblue,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
