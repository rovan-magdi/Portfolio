import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack, Button } from "@mui/material";
import { theme } from "../theme/index";
import Typical from "react-typical";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ButtonShared } from "./ButtonShared";
import Line from "./Line";
import {BrowserRouter} from'react-router-dom';
import {HashLink as Link} from'react-router-hash-link'

const StyledBoxOne = styled(Box)(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
  width: "450px",
  position: "relative",
  top: "14vh",
  fontSize: "14px",
}));
const StyledBoxTwo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "230px",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  // mt: 5,
  color: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: "50%",
  padding: "25px",
  height: "65px",
  width: "15px",
  animation:"example 1s linear 0s infinite alternate",
  '@keyframes example ': {
    "0%": {
       transform:'translate(0px,0px)'
    },
    
    "50%": {
       transform:'translate(0px,-20px)'
    },
    
    "100%": {
       transform:'translate(0px,5px)'
    }
 
 }
}));
const Start = () => {
  // const nagavite=useNavigate();
  const goTo=()=>
  {
    // nagavite('#about');
  }
  return (
    <Box component="div" id="Home">

    <BrowserRouter>
    <StyledBoxOne>
      <Stack theme={theme} sx={{ m: 5, mb: "18px", color: "primary.light" }}>
        <Typical
          steps={[
            "CONSULTANT AND MENTOR ",
            1000,
            "WEB DESIGNER ",
            1000,
            "PROGRAMMER ",
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </Stack>
      <Stack sx={{ m: 5, fontWeight: "bolder" }}>
        Hello! I am Web Developer from United States, New York. I have rich
        experience in web site design and building, also I am good at wordpress.
        I love to talk with you about our unique.
      </Stack>
     
      <StyledBoxTwo component="div" sx={{ m: 5 }}>
        <ButtonShared endIcon={<ChevronRightIcon />}>Contact us</ButtonShared>
          <Link to="#About" smooth>
        <StyledButton  >
          <KeyboardArrowDownIcon />
        </StyledButton>
          </Link>
      </StyledBoxTwo>
      <Line />
    </StyledBoxOne>
      </BrowserRouter>
    </Box>

  );
};

export default Start;
