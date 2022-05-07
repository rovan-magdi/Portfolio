import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { Box, Grid, Stack, Button } from "@mui/material";
import { theme } from "../theme/index";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ButtonShared } from "./ButtonShared";

function Pricing() {
    const styles = {
        button: {
          backgroundColor: "none",
          paddingLeft: "25px",
          paddingRight: "25px",
          fontSize: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
          fontWeight: "900",
          borderRadius: "35px",
          border: "1px solid #585d65",
          color: "white",
          height: "55px",
          marginTop:"25px"
        },
      };
    const items = [
        { id: 1, title: "item #1" },
        { id: 2, title: "item #2" },
        { id: 3, title: "item #3" },
        { id: 4, title: "item #4" },
        { id: 5, title: "item #5" },
    ];

    return (
        <>
        <Stack
            theme={theme}
            sx={{
                color: "secondary.main",
                // width: "800px",
                mx: 5,
                mt: 2,
                position: "relative",
                fontSize: "12px",
                fontWeight: "500",
                // top: "18vh",
                // fontSize: "14px",
            }}
        >
            <Box component="div" sx={{ fontSize: "55px", fontWeight: "800" }}>
                Pricing
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
                MY PLANS
            </Box>

            {/* <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={true}
        interval={5000}
        animation={"slide"}
        swipe={true}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{ 
            style: {
                backgroundColor: "",
                opacity: 0.4
            }
        }} 
        style={styles.image}
      > */}
            <Box component="div" >

                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ textAlign: "center" }}>
                        <StarIcon theme={theme}
                            sx={{ color: "primary.main", fontSize: "50px", mb: 1 }} />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px" }}                        >
                            Basic
                        </Box>
                        <Box component="span">
                            <Box component="span" sx={{ fontSize: "11px", fontWeight: "800", position: "relative", bottom: "36px" }}>$</Box>
                            <Box component="span" sx={{ fontSize: "55px", fontWeight: "800" }}>39</Box>
                            <Box component="span" sx={{ fontSize: "11px", fontWeight: "800" }}>hours</Box>
                        </Box>

                        <Box component="div" sx={{ mt: 3 }}>
                            <Box component="div" sx={{ mt: 2 }}>
                                Web Development
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                Advetising
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                Game Development
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                              <Box component="del">Music Writing</Box>  
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                <Box component="del" sx={{ p: 1 }}>Photography</Box>

                               
                            </Box>
                        </Box>

                        <ButtonShared endIcon={<ChevronRightIcon/>} sx={{mt:3}}> Buy now </ButtonShared>

                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: "center" }}>
                        <RocketLaunchIcon theme={theme}
                            sx={{ color: "primary.main", fontSize: "50px", mb: 1 }} />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px" }}                        >
                            Premium
                        </Box>
                        <Box component="span">
                            <Box component="span" sx={{ fontSize: "11px", fontWeight: "800", position: "relative", bottom: "36px" }}>$</Box>
                            <Box component="span" sx={{ fontSize: "55px", fontWeight: "800" }}>59</Box>
                            <Box component="span" sx={{ fontSize: "11px", fontWeight: "800" }}>hours</Box>
                        </Box>

                        <Box component="div" sx={{ mt: 3 }}>
                            <Box component="div" sx={{ mt: 2 }}>
                                Web Development
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                Advetising
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                Game Development
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                Music Writing
                            </Box>
                            <Box component="div" sx={{ mt: 2 }}>
                                <Box component="span" sx={{ p: 1 }}>Photography</Box>

                                <Box component="span" theme={theme} sx={{ height: "50px", width: "50px", backgroundColor: "primary.main", color: "secondary.dark", p: 0.2 }}>

                                    new
                                </Box>
                            </Box>
                        </Box>

                   <ButtonShared endIcon={<ChevronRightIcon/>} sx={{mt:3}}> Buy now </ButtonShared>
                    </Grid>
                </Grid>
               
            </Box>
            
            {/* </Carousel> */}
        </Stack>
          <Box
          component="div"
          sx={{
              //   mt: 5
              marginTop: "60px",
              //   mb:5,
              height: "1px",
              width: "700px",
              height: "1px",
              backgroundColor: "#585d65",
          }}
      ></Box>
      </>
    );
}
export default Pricing;
