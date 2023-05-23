import React from "react";
import authImg from "../../assets/Ticket.svg";
import barImg from "../../assets/barcode.svg";
import logo from "../../assets/logo.svg";
import "../LoginPage/Login.css"

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const theme = createTheme();
function PasswordReset() {
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
                  Set a new password
                </Typography>
                <h5
                  style={{
                    color: "gray",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  Your new password must be diffrent to your previous
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
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        className="input1"
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        className="input1"
                        name="confirmpassword"
                        label="confirmPassword"
                        type="password"
                        id="confirmpassword"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    onClick={() => navigate("/passwordrecoveryconfirm")}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "#3F3E8D",
                      fontFamily: "Montserrat",
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "whiteSmoke",
                    }}
                  >
                    Change password
                  </Button>
                  <Grid container flexDirection="column" alignItems="center">
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <KeyboardBackspaceIcon
                        onClick={() => navigate("/signup")}
                        sx={{ color: "#F27405" }}
                      />
                      <Link
                        onClick={() => navigate("/signup")}
                        variant="body2"
                        sx={{
                          cursor: "pointer",
                          color: "#F27405",
                          textDecoration: "none",
                        }}
                      >
                        Go back to login
                      </Link>
                    </Grid>
                  </Grid>
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
                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "-27px",
                          width: "250px",
                          textAlign: "center",
                          paddingBottom: "10px",
                          fontWeight: "bold",
                          fontFamily: "Montserrat",
                        }}
                        component="h1"
                        variant="h5"
                      >
                        Set a new password
                      </Typography>
                      <h5
                        style={{
                          color: "#3F3E8D",
                          textAlign: "center",
                          marginBottom: "15px",
                        }}
                      >
                        Your new password must be diffrent to your previous
                        password{" "}
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
                        sx={{ mt: 2, height: "330px" }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          container
                          spacing={2}
                        >
                          <Grid item xs={12}>
                            <TextField
                              className="input1"
                              required
                              fullWidth
                              id="password"
                              label="password"
                              name="password"
                              type="password"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              className="input1"
                              required
                              fullWidth
                              name="confirmpassword"
                              label="confirmPassword"
                              type="confirmpassword"
                              id="confirmpassword"
                              autoComplete="new-password"
                            />
                          </Grid>
                        </Grid>

                        <Button
                          onClick={() => navigate("/passwordrecoveryconfirm")}
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 2,
                            bgcolor: "#3F3E8D",
                            fontFamily: "Montserrat",
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "whiteSmoke",
                          }}
                        >
                          Reset password
                        </Button>
                        <Grid container justifyContent="center">
                          <Grid
                            item
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <KeyboardBackspaceIcon
                              onClick={() => navigate("/signup")}
                              sx={{ color: "#F27405" }}
                            />
                            <Link
                              onClick={() => navigate("/signup")}
                              variant="body2"
                              sx={{
                                cursor: "pointer",
                                color: "#F27405",
                                textDecoration: "none",
                              }}
                            >
                              Go back to login
                            </Link>
                          </Grid>
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

export default PasswordReset;
