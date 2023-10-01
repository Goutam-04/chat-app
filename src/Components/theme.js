import { createTheme } from '@mui/material/styles';

const nav = createTheme({
  palette: {
    primary: {
      main: '#004643', // Your primary color
    },
    secondary: {
      main: '#fffffe', // Your secondary color
    },
    paragraph: {
      main: '#abd1c6', // Your secondary color
    },
    background: {
      default: '#004643', // Background color
    },
    text: {
      primary: '#333333', // Paragraph text color
    },
  },
});

export {nav};
