import React from "react";
import { theme } from "../theme/index";
import { Box, Grid, Stack } from "@mui/material";
import Line from'./Line'

const Clients = () => {
  return (
      <>
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
        Clients
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
        MY PARTNERS
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={3} sx={{ mb: 5, filter: "grayscale(100%)" }}>
          <Box
            component="img"
            src="https://bslthemes.com/myour/wp-content/uploads/2020/06/client4-256x232.png"
            sx={{
              height: "90px",
              filter: " opacity(50%)",
              transition: "filter 0.5s",
              "&:hover": {
                filter: " opacity(100%)",
              },
            }}
          ></Box>
        </Grid>
        <Grid item xs={3} sx={{ mb: 5 }}>
          <Box
            component="img"
            src="https://bslthemes.com/myour/wp-content/uploads/2020/06/client1-256x123.png"
            sx={{
              height: "50px",
              filter: " opacity(50%)",
              transition: "filter 0.5s",
              "&:hover": {
                filter: " opacity(100%)",
              },
            }}
          ></Box>
        </Grid>{" "}
        <Grid item xs={3} sx={{ mb: 5 }}>
          <Box
            component="img"
            src="https://bslthemes.com/myour/wp-content/uploads/2020/06/client2-256x92.png"
            sx={{
              height: "40px",
              filter: " opacity(50%)",
              transition: "filter 0.5s",
              "&:hover": {
                filter: " opacity(100%)",
              },
            }}
          ></Box>
        </Grid>{" "}
        <Grid item xs={3} sx={{ mb: 5 }}>
          <Box
            component="img"
            src="https://bslthemes.com/myour/wp-content/uploads/2020/06/client3.png"
            sx={{
              height: "90px",
              filter: " opacity(50%)",
              transition: "filter 0.5s",
              "&:hover": {
                filter: " opacity(100%)",
              },
            
            }}
          ></Box>
        </Grid>
      </Grid>
    </Stack>
      <Line/>
     </>
  );
};

export default Clients;
