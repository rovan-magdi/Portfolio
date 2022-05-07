import { Button, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../theme";

export const ButtonShared = styled(Button, {
  shouldForwardProp: (props) => {
    return props !== "color";
  },
  name: "MuiStyledButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})({
    backgroundColor: "none",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontWeight: "900",
    borderRadius: "35px",
    border: "1px solid #585d65",
    color: "white",
    height: "65px",
    '&:hover':{
      color:`${theme.palette.primary.main}`

    }
});
