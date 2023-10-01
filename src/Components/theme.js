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

const homeLight=createTheme({
    palette:{
        primary:{
            main:'#abd1c6'
        },
        headline:{
            main:'#001e1d'
        },
        subheading:{
            main:'#0f3433'
        },
        cardbackground:{
            main:'#004643'
        },
        cardheading:{
            main:'#fffffe'
        },
        cardparagraph:{
            main:'#abd1c6'
        }


    }
})

export {nav,homeLight};
