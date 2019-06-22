const white = '#FFFFFF';
const black = '#000';
const darkgray = '#38474a';
const lightgray = '#f9fafb';
const blue = '#2852da';
const khaki = '#F4EDAE';
const bgImgLight = 'linear-gradient(#ff9d2f, #ff6126)';
const bgImgDark = 'linear-gradient(rgba(2,0,36,1), rgba(46,46,46,1))';
const shadowLight = '0 2px 2px rgba(0, 0, 0, 0.1)';
const shadowDark = '0 2px 2px rgba(255, 255, 255, 0.1)';

const themeLight = {
  header: bgImgLight,
  background: lightgray,
  border: black,
  body: black,
  highlight: blue,
  borders: darkgray,
  input: white,
  shadow: shadowLight,
};

const themeDark = {
  header: bgImgDark,
  background: black,
  border: black,
  body: white,
  highlight: darkgray,
  borders: darkgray,
  input: khaki,
  shadow: shadowDark,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
