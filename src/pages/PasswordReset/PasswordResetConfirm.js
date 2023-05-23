import React from "react";
import authImg from "../../assets/Ticket.svg";
import barImg from "../../assets/barcode.svg";
import logo from "../../assets/logo.svg";
import "../LoginPage/Login.css";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme();
function PasswordResetConfirm() {
  const navigate = useNavigate();
  const isMatch = useMediaQuery("(max-width:1050px)");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
      confirmpassword: data.get("confirmpassword"),
    });
  };
  return (
    <div>
      {isMatch ? (
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "100px",
                }}
              >
                <img style={{ height: "70px" }} src={logo} alt="" />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    marginTop: 4,
                  }}
                  component="h1"
                  variant="h5"
                >
                  Password reset
                </Typography>
                <h5
                  style={{
                    color: "gray",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  Your password has been successfully reset. Click Login to
                  continue password
                </h5>
                <Grid
                  sx={{
                    width: "100%",
                    height: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      width: "150px",
                      height: "1px",
                      backgroundColor: "#3F3E8D",
                    }}
                  />
                  <p
                    style={{
                      width: "150px",
                      height: "1px",
                      backgroundColor: "#3F3E8D",
                    }}
                  />
                </Grid>

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    mt: 3,
                    width: "100%",
                  }}
                >
                  <Button
                    onClick={() => navigate("/login")}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mb: 2,
                      bgcolor: "#3F3E8D",
                      fontFamily: "Montserrat",
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "whiteSmoke",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      ) : (
        <>
          <div className="signup">
            <img className="signup_img" src={authImg} alt="" />
            <img className="bar_img" src={barImg} alt="" />
            <img className="minaleaddis_img" src={logo} alt="" />
            <div className="signup_infos">
              <div className="signup_forms">
                <ThemeProvider theme={theme}>
                  <Container
                    component="main"
                    maxWidth="xs"
                    sx={{ marginTop: "100px" }}
                  >
                    <CssBaseline />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          mt: "50px",
                          width: "250px",
                          textAlign: "center",
                          paddingBottom: "10px",
                          fontWeight: "bold",
                          fontFamily: "Montserrat",
                        }}
                        component="h1"
                        variant="h5"
                      >
                        Password reset
                      </Typography>
                      <h5
                        style={{
                          color: "#3F3E8D",
                          textAlign: "center",
                          marginBottom: "15px",
                        }}
                      >
                        Your password has been successfully reset. Click Login
                        to continue password{" "}
                      </h5>
                      <Container sx={{ display: "flex", width: "100%" }}>
                        <Typography
                          sx={{
                            width: "80%",
                            borderBottom: "1px solid gray",
                            marginRight: "20px",
                            textAlign: "center",
                          }}
                        ></Typography>
                        <Typography
                          sx={{
                            width: "80%",
                            borderBottom: "1px solid gray",
                            marginLeft: "20px",
                            textAlign: "center",
                          }}
                        ></Typography>
                      </Container>
                      <Typography
                        sx={{
                          marginTop: "18px",
                          borderBottom: "1px solid #F27405",
                          color: "gray",
                        }}
                      ></Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ width: "100%" }}
                      >
                        <Grid sx={{ width: "100%" }}>
                          <Button
                            onClick={() => navigate("/login")}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                              mb: 2,
                              bgcolor: "#3F3E8D",
                              fontFamily: "Montserrat",
                              textTransform: "none",
                              fontWeight: "bold",
                              color: "whiteSmoke",
                            }}
                          >
                            Login
                          </Button>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PasswordResetConfirm;
