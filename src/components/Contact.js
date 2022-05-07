import {React,useEffect} from "react";
import {
  Stack,
  Box,
  Grid,
  InputBase,
  Textarea,
  Typography,
} from "@mui/material";
import WebFont from 'webfontloader';
import { styled } from "@mui/material/styles";
import { theme } from "../theme/index";
import { ButtonShared } from "./ButtonShared";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const Contact = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderRadius: 300,
    padding: 4,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "70%",
    height: "53px",
    border: `1px solid ${theme.palette.secondary.light}`,
    color: `${theme.palette.secondary.main}`,
    fontSize: "14px",
  }));
  const StyledTextArea = styled(InputBase)(({ theme }) => ({
    borderRadius: "35px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "70%",
    height: "150px",
    border: `1px solid ${theme.palette.secondary.light}`,
    color: `${theme.palette.secondary.main}`,
    fontSize: "14px",
  }));
  const StyledLabel = styled(Typography)(({ theme }) => ({
    position: "absolute",
    marginBottom: "100px",
    left: "25px",
    lineHeight: "2px",
    backgroundColor: `${theme.palette.secondary.dark}`,
    zIndex: "2",
    textTransform: "uppercase",
  }));
  const StyledStart = styled(Typography)(({ theme }) => ({
    color: `${theme.palette.primary.main}`,
  }));
  const StyledNumber = styled(Typography)(({ theme }) => ({
    color: `${theme.palette.secondary.main}`,
    display:"inline",
    paddingLeft:"10px",
    textTransform:"capitalize"
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    color: ` ${theme.palette.secondary.main}`,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: "25px",
    padding: "20px",
  }));
  const StyledBoxChildern = styled(Box)(({ theme }) => ({
    color: ` ${theme.palette.primary.main}`,
    textTransform: "uppercase",
    fontWeight:"700",
    paddingRight:"22px",
    marginBottom:"8px"
  }));
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mr Dafoe', 'Chilanka']
      }
    });
   }, []);
  return (
    <Stack
    id="Contact"
      theme={theme}
      sx={{
        color: "secondary.main",
        mx: 5,
        mt: 2,
        position: "relative",
        fontSize: "12px",
        fontWeight: "500",
      }}
    >
      <Box component="div" sx={{ fontSize: "55px", fontWeight: "800" }}>
        Reviews
      </Box>
      <Box
        component="div"
        theme={theme}
        sx={{
          mb: 5,
          fontSize: "12px",
          fontWeight: "500",
          color: "primary.main",
        }}
      >
        WHAT CUSTOMERS SAY
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={6} sx={{ mb: 5 }}>
          <Box component="div" sx={{ mb: 5 }}>
            <StyledLabel variant="caption">
              full name
              <StyledStart variant="span"> *</StyledStart>
            </StyledLabel>
            <StyledInputBase placeholder="ej.: Genoveva Lian Hullt" />
          </Box>

          <Box component="div" sx={{ mb: 5 }}>
            <StyledLabel variant="caption">
              Email Address
              <StyledStart variant="span"> *</StyledStart>
            </StyledLabel>
            <StyledInputBase placeholder="example@domain.com" />
          </Box>

          <Box component="div" sx={{ mb: 5 }}>
            <StyledLabel variant="caption">
              Message
              <StyledStart variant="span"> *</StyledStart>
            </StyledLabel>
            <StyledTextArea placeholder="To Write"></StyledTextArea>
          </Box>
          <ButtonShared endIcon={<ChevronRightIcon/>} sx={{width:"200px"}}> Send Message</ButtonShared>

        </Grid>
        <Grid item xs={5} sx={{ mb: 5 }}>
          <StyledBox>
            <Stack variant="div" sx={{ mb: 5 }}>
              <Box variant="div" sx={{ fontSize: "18px", fontWeight: "800" }}>
                Joe Wilson
              </Box>
              <StyledBoxChildern fontSize="10px">
                {" "}
                consultant & mentor
              </StyledBoxChildern>
            </Stack>
            <Stack variant="div" >
            <StyledBoxChildern component="span"> age:<StyledNumber variant="caption">22</StyledNumber></StyledBoxChildern> 
           
            <StyledBoxChildern component="span"> RESIDENCE:<StyledNumber variant="caption"> USA</StyledNumber></StyledBoxChildern> 
            <StyledBoxChildern component="span"> FREELANCE:<StyledNumber variant="caption"> Available</StyledNumber></StyledBoxChildern> 
            <StyledBoxChildern component="span"> ADDRESS:<StyledNumber variant="caption"> San Francisco</StyledNumber></StyledBoxChildern> 
           
            <StyledBoxChildern component="span"> PHONE:<StyledNumber variant="caption"> +1 256 254 84 56</StyledNumber></StyledBoxChildern> 
            <StyledBoxChildern component="span"> E-MAIL:<StyledNumber variant="caption">  jwilson@domain.com</StyledNumber></StyledBoxChildern> 
            <Box variant="caption"
            sx={{fontFamily: ['Mr Dafoe'] ,fontSize:"32px",m:5}}>
            Rovan Magdi
            </Box>
            </Stack>
          </StyledBox>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Contact;
