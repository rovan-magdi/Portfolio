import React from "react";
import { theme } from "../theme/index";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Grid, Stack, Avatar } from "@mui/material";
import Line from'./Line'

const Reviews = () => {
  return (
      <Box component="div" id="blogs">
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
          <Box component="div" sx={{ display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 60, height: 60 }}
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/rev1.png"
            />
            <Box component="div" sx={{ mx: 2 }}>
              <Box component="div" sx={{ fontSize: "16px", fontWeight: "800" }}>
                Joseph Mackey
              </Box>
              <Box
                component="div"
                theme={theme}
                sx={{ color: "primary.main", mt: 1, fontSize: "12px" }}
              >
                DEVELOPER
              </Box>
            </Box>
          </Box>
          <Box component="div" sx={{ display: "flex", mt: 2 }}>
            <Box
              component="div"
              theme={theme}
              sx={{ color: "primary.main", mx: 2 }}
            >
              <FormatQuoteIcon />
            </Box>
            <Box component="div" sx={{fontSize:"16px",fontWeight:"400",width:"200px"}}>
              Excellent all around! What stood out most was Jake's excellent
              service. He made sure our order was placed in time, even though we
              were ordering on a holiday.
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ mb: 5 }}>
          <Box component="div" sx={{ display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 60, height: 60 }}
              src="https://bslthemes.com/myour/wp-content/uploads/2020/06/user_03.jpg"
            />
            <Box component="div" sx={{ mx: 2 }}>
              <Box component="div" sx={{ fontSize: "16px", fontWeight: "800" }}>
              Laura Owens               </Box>
              <Box
                component="div"
                theme={theme}
                sx={{ color: "primary.main", mt: 1, fontSize: "12px" }}
              >
                 Designer 
              </Box>
            </Box>
          </Box>
          <Box component="div" sx={{ display: "flex", mt: 2 }}>
            <Box
              component="div"
              theme={theme}
              sx={{ color: "primary.main", mx: 2 }}
            >
              <FormatQuoteIcon />
            </Box>
            <Box component="div"sx={{fontSize:"16px",fontWeight:"400",width:"200px"}}>
              Excellent all around! What stood out most was Jake's excellent
              service. He made sure our order was placed in time, even though we
              were ordering on a holiday.
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
      <Line/>
     </Box>
  );
};

export default Reviews;
