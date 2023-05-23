import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material/styles";

import {  Container, Grid, Switch } from "@mui/material";
import HeaderBar from "../../component/AppBar/AppBar";
import RoutingBar from "../../component/RoutingBar/RoutingBar";
import "./Events.css";
import Event from "../../component/Event/Event";

const theme = createTheme();

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 78,
  height: 44,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    marginTop: 4,
    padding: 0,
    transform: "translateX(6px)",

    "&.Mui-checked": {
      transform: "translateX(40px)",
      color: "#fff",
      "&+.MuiSwitch-track": {
        backgroundColor: "gray",

        opacity: 0.5,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
  },
  "& .MuiSwitch-track": {
    borderRadius: 40 / 2,
    backgroundColor: "#F27405",
    opacity: 1,
  },
}));

function Events() {
  const [checkedReview, setCheckedReview] = React.useState(false);

  const handleChange = (event) => {
    setCheckedReview(event.target.checked);
  };
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <HeaderBar />
      <div className="events_routing_bar">
        <RoutingBar />
      </div>
      <div>
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" sx={{display:"flex",justifyContent:"center"}}>
              <div style={{ width: "650px" }} className="main">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "Center",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                      <h5
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          marginRight: "20px",
                        }}
                      >
                        Live
                      </h5>

                      <MaterialUISwitch
                        checked={checkedReview}
                        onChange={handleChange}
                        name="checkedA"
                      />
                      <h4
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          marginLeft: "20px",
                        }}
                      >
                        Past
                      </h4>
                    </Grid>
                    <Box sx={{ width: "100%" }}>
                      <Grid sx={{ width: "100%", marginY: "40px" }}>
                        <Event />
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Container>
          </ThemeProvider>
        </>
      </div>
    </div>
  );
}

export default Events;
