import { colors, responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme  = createTheme({

  palette: {
    primary: {
      main: "#5ED6C5",
      light:"#68E0CF",
      dark: colors.orange[800],
    },
    secondary: {
      main: "#FFFFFF",
      light:'#585D65',
      dark:"#373B40"

    },
    

  },typography: {
    caption:{

      textSize:"12px",
      fontWeight:"900"
    }
      
    
    }
})
export {theme};
