import React from "react";
import { Box, Grid, Stack, Button, Typography } from "@mui/material";
import { theme } from "../theme/index";
import Line from "./Line";

const Design_Skills = () => {
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
        <Grid container spacing={5}>
          <Grid item xs={4} sx={{ mb: 5 }}>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              Web Layout
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>
            <Box
              theme={theme}
              component="div"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: "secondary.light",
                position: "relative",
                mt: 3,
              }}
            >
              <Box
                theme={theme}
                component="span"
                sx={{
                  height: "2px",
                  width: "90%",
                  backgroundColor: "primary.main",
                  position: "absolute",
                }}
              >
                <Box
                  theme={theme}
                  component="span"
                  sx={{
                    top: "-22px",
                    left: "0px",
                    position: "relative",
                    color: "primary.main",
                  }}
                >
                  90%
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4} sx={{}}>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", width: "30px", mb: 5 }}
            >
              Illustrations
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>

            <Box
              theme={theme}
              component="div"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: "secondary.light",
                position: "relative",
                mt: 3,
              }}
            >
              <Box
                theme={theme}
                component="span"
                sx={{
                  height: "2px",
                  width: "70%",
                  backgroundColor: "primary.main",
                  position: "absolute",
                }}
              >
                <Box
                  theme={theme}
                  component="span"
                  sx={{
                    top: "-22px",
                    left: "0px",
                    position: "relative",
                    color: "primary.main",
                  }}
                >
                  70%
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={4} sx={{ mb: 5 }}>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              Photoshop
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>
            <Box
              theme={theme}
              component="div"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: "secondary.light",
                position: "relative",
                mt: 3,
              }}
            >
              <Box
                theme={theme}
                component="span"
                sx={{
                  height: "2px",
                  width: "95%",
                  backgroundColor: "primary.main",
                  position: "absolute",
                }}
              >
                <Box
                  theme={theme}
                  component="span"
                  sx={{
                    top: "-22px",
                    left: "0px",
                    position: "relative",
                    color: "primary.main",
                  }}
                >
                  95%
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4} sx={{}}>
            <Box
              component="div"
              sx={{ fontSize: "20px", fontWeight: "800", mb: 5 }}
            >
              Graphic Design
            </Box>
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna
            </Typography>
            <Box
              theme={theme}
              component="div"
              sx={{
                height: "2px",
                width: "100%",
                backgroundColor: "secondary.light",
                position: "relative",
                mt: 3,
              }}
            >
              <Box
                theme={theme}
                component="span"
                sx={{
                  height: "2px",
                  width: "85%",
                  backgroundColor: "primary.main",
                  position: "absolute",
                }}
              >
                <Box
                  theme={theme}
                  component="span"
                  sx={{
                    top: "-22px",
                    left: "0px",
                    position: "relative",
                    color: "primary.main",
                  }}
                >
                  85%
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Line />
    </>
  );
};

export default Design_Skills;
