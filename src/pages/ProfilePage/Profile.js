import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  Container, Grid,  } from "@mui/material";
import HeaderBar from "../../component/AppBar/AppBar";
import RoutingBar from "../../component/RoutingBar/RoutingBar";
import "./Profile.css";
import profileImg from "../../assets/profile.svg";
import EditProfile from "./EditProfile";

const theme = createTheme();

function Profile() {
  const [edit, setEdit] = React.useState(false);

  return (
    <div className="Profile">
      <HeaderBar />
      <div className="profile_route_bar">
        <RoutingBar />
      </div>
      <div>
        {edit ? (
          <>
            <EditProfile next={(edit) => setEdit(edit)} />
          </>
        ) : (
          <>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 6,
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
                    <img
                      style={{ height: "100px", marginBottom: "15px" }}
                      src={profileImg}
                      alt=""
                    />
                    <h5 style={{ fontWeight: 900 }}>Sifan Tilahun</h5>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <h5 style={{ color: "gray" }}>@rasifan </h5>
                      <CheckCircleOutlineIcon
                        sx={{ marginLeft: "10px", color: "#F27405" }}
                      />
                    </Grid>
                  </Box>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      width: " 100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold" }}>Phone Number</h5>
                    <input
                      disabled={true}
                      value={"+251931528565"}
                      style={{
                        marginBottom: "30px",
                        borderRadius: "8px",
                        height: "40px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "rgba(228, 232, 255, 0.3)",
                      }}
                      multiline
                      required
                    />
                  </Grid>
                  <Grid item sx={{ width: "100%" }}>
                    <h5 style={{ fontWeight: "bold" }}>Email</h5>
                    <input
                      disabled={true}
                      value={"eyosiyasat@gmail.com"}
                      style={{
                        marginBottom: "30px",

                        borderRadius: "8px",
                        height: "40px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "rgba(228, 232, 255, 0.3)",
                      }}
                      multiline
                      required
                    />
                  </Grid>
                  <Grid item sx={{ width: "100%" }}>
                    <h5 style={{ fontWeight: "bold" }}>Plan Selected</h5>
                    <input
                      disabled={true}
                      value={"Basic"}
                      style={{
                        borderRadius: "8px",
                        height: "40px",
                        width: "100%",
                        border: "none",
                        backgroundColor: "rgba(228, 232, 255, 0.3)",
                      }}
                      multiline
                      name="eventhashtag"
                      required
                      id="eventhashtag"
                      autoFocus
                    />
                  </Grid>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 1,
                      bgcolor: "white",
                      color: "black",
                      textTransform: "none",
                      border: "3px solid black",
                      borderRadius: "8px",
                      boxShadow: "none",
                      fontWeight: "500",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                  >
                    Change Password
                  </Button>

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setEdit(true)}
                    sx={{
                      mt: 1,
                      mb: 2,
                      bgcolor: "white",
                      color: "black",
                      textTransform: "none",
                      border: "3px solid #F27405",
                      borderRadius: "8px",
                      boxShadow: "none",
                      fontWeight: "500",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: "#F27405",
                        color: "white",
                      },
                    }}
                  >
                    Edit
                  </Button>
                </Box>
              </Container>
            </ThemeProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
