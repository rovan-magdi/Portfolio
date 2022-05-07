import React from "react";
import { theme } from "../theme/index";
import { Box, Grid, Stack } from "@mui/material";
import Line from "./Line";
import {ButtonShared} from './ButtonShared'
const Portfolio = () => {
  return (
    <Box component="div" id="Portfolio">
      <Stack
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
          Portfolio
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
          LATEST WORKS
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mb: 5 }}>
            <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work1-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
             <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mb: 5 }}>
          <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work2-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
            <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={6} sx={{ mb: 5 }}>
            <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work7-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
            <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mb: 5 }}>
          <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work4-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
            <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={6} sx={{ mb: 5 }}>
            <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work5-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
            <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mb: 5 }}>
          <Box
              component="img"
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/work6-680x680.jpg"
              sx={{ height: "250px", width: "250px" }}
            ></Box>
            <Box component="div" theme={theme} sx={{color:"primary.main",width:"160px"}}>
                 GALLARY
             </Box>
            <Box component="div" sx={{fontWeight:"800",fontSize:"16px",width:"160px"}}>
            Alabaster Complete Collection
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mb: 5 }}>
</Grid>
        </Grid>
      <ButtonShared sx={{width:"150px",margin:"auto"}}> read more</ButtonShared>
      </Stack>
      <Line/>
    </Box>
  );
};

export default Portfolio;
