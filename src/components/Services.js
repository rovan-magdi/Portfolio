import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { theme } from "../theme/index";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BarChartIcon from "@mui/icons-material/BarChart";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VideocamIcon from "@mui/icons-material/Videocam";
import Line from'./Line'

const Services = () => {
    return (
        <>
            <Stack
                theme={theme}
                sx={{
                    color: "secondary.main",
                    width: "600px",
                    mx: 5,
                    mt: 2,
                    position: "relative",
                    // top: "18vh",
                    // fontSize: "14px",
                }}
            >
                <Box component="div" sx={{ fontSize: "55px", fontWeight: "800" }}>
                    Services
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
                    WHAT I DO
                </Box>

                <Grid container spacing={2} sx={{ mb: 5, fontWeight: "500" }}>
                    <Grid item xs={6}>
                        <AccountBalanceIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "30px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "30px", mb: 3 }}
                        >
                            Economic Science
                        </Box>
                        <Box component="div" fontSize="14px">
                            Economics is a social science concerned with the production,
                            consumption of goods and services.
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <BarChartIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "30px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "40px", mb: 3 }}
                        >
                            Marketing& Advertising
                        </Box>
                        <Box component="div" fontSize="14px">
                            Advertising Management though is a complex process of employing various media to sell a product or service.
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{ mb: 5, fontSize: "14px", fontWeight: "500" }}
                >
                    <Grid item xs={6}>
                        <CodeOffIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "50px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "30px", mb: 3 }}
                        >
                            Web
                            Development
                        </Box>
                        <Box component="div" fontSize="14px">
                            Economics is a social science concerned with the production,
                            consumption of goods and services.
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <MusicNoteIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "40px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "30px", mb: 3 }}
                        >
                            Music
                            Writing
                        </Box>
                        <Box component="div" fontSize="14px">
                            Sheet music is the basic form in which Western classical music is notated so
                            that it can be learned and performed by solo singers.
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{ mb: 5, fontSize: "14px", fontWeight: "500" }}
                >
                    <Grid item xs={6}>
                        <VideogameAssetIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "40px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "30px", mb: 3 }}
                        >
                            Game
                            Development
                        </Box>
                        <Box component="div" fontSize="14px">
                            Come Up With a Game Idea. An idea is the first thing that comes to mind when a game is being described before creating.
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <VideocamIcon
                            theme={theme}
                            sx={{ color: "primary.main", fontSize: "40px", mb: 1 }}
                        />
                        <Box
                            component="div"
                            sx={{ fontWeight: "800", fontSize: "18px", width: "30px", mb: 3 }}
                        >
                            Photography& Video
                        </Box>
                        <Box component="div" fontSize="14px">
                            Sessions. If you are a photographer that spends most of the time in a portrait studio, you can charge for your session.
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
          <Line/>
        </>
    );
};

export default Services;
