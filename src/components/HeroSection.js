import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../theme/index";
import "../App/App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Start from "./Start";
import About from "./About";
import Services from "./Services";
import Pricing from "./Pricing";
import Experience from "./Experience";
import Education from "./Education";
import Design_Skills from "./Design Skills";
import Language_Skills from "./Language Skills";
import Coding_Skills from "./Coding Skills";
import Reviews from "./Reviews";
import Clients from "./Clients";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "./Navbar";

const HeroSection = () => {
  const styles = {
    paperContainer: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      backgroundImage: `url(${"https://bslthemes.com/myour/wp-content/uploads/2020/06/man.jpg"})`,
      position: "fixed",
      // filter: "grayscale(100%)",
    },
  };
  const StyledStack = styled(Stack)(({ theme }) => ({
    backgroundColor: "#373B40",
    height: "300px",
    width: "300px",
    borderRadius: "50%",
    position: "relative",
    zIndex: "100",
    right: "20%",
    top: "150px",
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    maxWidth: "200px",
    margin: "auto",
    color: `${theme.palette.secondary.main}`,
    fontSize: "50px",
    fontWeight: "900",
  }));

  return (
    <>
      <Navbar />
      <Box component="section">
        <Grid container>
          <Grid item xs={5} ms={12} style={styles.paperContainer}>
            <Stack
              sx={{
                width: "100%",
                height: "677px",
              }}
            ></Stack>
          </Grid>
          <Grid
            theme={theme}
            item
            xs={7}
            ms={12}
            sx={{
              position: "relative",
              left: "41.65%",
              backgroundColor: "secondary.dark",
            }}
          >
            <StyledStack>
              <StyledBox component="span">
                Joé <br />
                Wilson
              </StyledBox>
            </StyledStack>
            <Box>
              <Start />
              <About />
              <Services />
              <Pricing />
              <Experience />
              <Education />
              <Design_Skills />
              <Language_Skills />
              <Coding_Skills />
              <Reviews />
              <Clients />
              <Portfolio />
              <Contact />
            </Box>
            <Stack
              style={{
                backgroundColor: "red",
                height: "30 px",
                width: "20px",
                position: "relative",
                bottom: "-200vh",
                right: "-87%",
                // top: "-2500px",
              }}
            >
              <Box
                component="div"
                position="fixed"
                sx={{
                  p: 1,
                  marginLeft: "5px",
                  display: "flex",
                  flexDirection: "column",
                  top: "65vh",
                }}
              >
                <FacebookIcon
                  theme={theme}
                  sx={{
                    color: "secondary.main",
                    border: "1px solid #585d65",
                    borderRadius: "50%",
                    padding: "15px",
                    height: "25px",
                    width: "25px",
                    margin: "auto",
                    // m:2
                  }}
                />

                <InstagramIcon
                  theme={theme}
                  sx={{
                    color: "secondary.main",
                    border: "1px solid #585d65",
                    borderRadius: "50%",
                    padding: "15px",
                    height: "25px",
                    width: "25px",
                    m: 1,
                  }}
                />
                <WhatsAppIcon
                  theme={theme}
                  sx={{
                    color: "secondary.main",
                    border: "1px solid #585d65",
                    borderRadius: "50%",
                    padding: "15px",
                    height: "25px",
                    width: "25px",
                    margin: "auto",
                  }}
                />
              </Box>
            </Stack>
           
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
