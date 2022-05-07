import { Stack, Box, Grid } from '@mui/material';
import { theme } from "../theme/index";

import React from 'react';

const About = () => {
    return (
        <div id="About">
        <Stack theme={theme}
            sx={{
                color: "secondary.main",
                width: "600px",
                mx: 5,
                mt: 2,
                position: "relative",
                top: "18vh",
                // fontSize: "14px",
            }}>
            <Box component="div" sx={{ fontSize: "55px", fontWeight: "800" }}>About Me</Box>
            <Box component="div" theme={theme}
                sx={{ mb: 5, fontSize: "12px", fontWeight: "500", color: "primary.main" }}>MY STORY</Box>
            <Box 
                sx={{ mb: 5, fontSize: "14px", fontWeight: "500" }}
                >
                Pellentesque posuere. Praesent turpis. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc,
                eu sollicitudin urna dolor sagittis lacus.
            </Box>
            <Box sx={{mb: 5, fontSize: "14px"}}>
            Pellentesque posuere. Praesent turpis. Aenean posuere, 
            tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
            </Box>
            <Grid container spacing={2} sx={{mb: 2, fontSize: "14px",fontWeight: "500"}}>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                    AGE:
                </Grid>
                <Grid  item xs={3}>
                    24
                </Grid>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                RESIDENCE:
                </Grid>
                <Grid  item xs={3}>
                USA
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, fontSize: "14px", fontWeight: "500"}}>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                FREELANCE:
                </Grid>
                <Grid  item xs={3}>
                Available
                </Grid>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                ADDRESS:
                </Grid>
                <Grid  item xs={3}>
                San Francisco
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, fontSize: "14px",fontWeight: "500"  }}>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                PHONE:
                </Grid>
                <Grid  item xs={3}>
                +1 256 254 84 56
                </Grid>
                <Grid  item xs={3} theme={theme} sx={{color: "primary.main"}}>
                E-MAIL:
                </Grid>
                <Grid  item xs={3}>
                jwilson@domain.com
                </Grid>
            </Grid>

        </Stack>
            <Box
        component="div"
        sx={{
        //   mt: 5
        marginTop:"180px",
        //   mb:5,
          height: "1px",
          width: "700px",
          height: "1px",
          backgroundColor: "#585d65",
        }}
      ></Box>
      </div>
    );
};

export default About;