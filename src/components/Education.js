import React from "react";
import { Box, Grid, Stack, Button, Typography } from "@mui/material";
import { theme } from "../theme/index";
import Line from'./Line'

const Education = () => {
  return (
    <>
      <Stack
        theme={theme}
        id="Education"
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
        Education
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
          STUDIED AT
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={4} sx={{}}>
            <Box component="div">
              <Box
                sx={{
                  transform: "rotate(90deg)",
                  position: "absolute",
                  bottom: "150px",
                  transformOrigin: "bottom left",
                }}
              >
                <Box
                  theme={theme}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "primary.main",
                  }}
                >
                 2010-2011
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", m: 3 }}
            >
               Programming Course Paris 
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4} sx={{}}>
            <Box
              sx={{
                transform: "rotate(90deg)",
                bottom: "150px",
                position: "absolute",
                transformOrigin: "bottom left",
              }}
            >
              <Box
                theme={theme}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "primary.main",
                }}
              >
                2009-2010
              </Box>
            </Box>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", m: 3, width: "200px" }}
            >
              Web Design Course London 
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>
          </Grid>
        </Grid>
      </Stack>
      <Line/>
    </>
  );
};

export default Education;
