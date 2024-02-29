import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main:"#24E6BE",
    },
    secondary: {
      main: "#24E6BE",
    },
   
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);


export default theme;