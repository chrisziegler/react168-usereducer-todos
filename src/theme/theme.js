const white = '#FFFFFF';
const black = '#000';
const darkgray = '#38474a';
const lightgray = '#f9fafb';
// const teal = '#3CC1DA';
// const orange = '#FFB615';
// const red = '#FF2B15';

const themeLight = {
  background: white,
  body: black,
  highlight: lightgray,
};

const themeDark = {
  background: black,
  body: white,
  highlight: darkgray,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
