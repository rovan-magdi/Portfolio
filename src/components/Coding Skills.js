import React from "react";
import { Box, Grid, Stack, Button, Typography } from "@mui/material";
import { theme } from '../theme/index'
// import Progress from 'react-circle-progress-bar'
import'./styles.css';
const Coding_Skills = () => {
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
                Design Skills
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
                CREATIVE ABILITY
            </Box>
            <Grid container spacing={5} xs={12}>
                <Grid item xs={4} sx={{ mb: 5 }}>
                   
                <Box component="div" class="pie" > 90%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              WordPress
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
                <Grid item xs={4} sx={{ mb: 5 }}>
                <Box component="div" class="pie1" > 75%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              HTML, CSS

            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
                <Grid item xs={4} sx={{ mb: 5 }}>
                <Box component="div" class="pie2" > 85%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              Python
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} xs={12}>
                <Grid item xs={4} sx={{ mb: 5 }}>
                   
                <Box component="div" class="pie3" > 95%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              Angular
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
                <Grid item xs={4} sx={{ mb: 5 }}>
                <Box component="div" class="pie" > 90%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              JavaScript
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
                <Grid item xs={4} sx={{ mb: 5 }}>
                <Box component="div" class="pie1" > 75%</Box>
                <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              PHP, MYSQL
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              frEtiam sit amet orci eget eros faucibus tincidunt.
            </Typography>
                </Grid>
            </Grid>
        </Stack>
         <Box
         component="div"
         sx={{
           //   mt: 5
           marginTop: "70px",
           //   mb:5,
           height: "1px",
           width: "700px",
           height: "1px",
           backgroundColor: "#585d65",
         }}
       ></Box>
       </>
    );
};

export default Coding_Skills;
