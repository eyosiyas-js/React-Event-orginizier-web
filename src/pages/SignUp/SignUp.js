import React, { useState } from "react";
import authImg from "../../assets/Ticket.svg";
import barImg from "../../assets/barcode.svg";
import "./SignUp.css";
import logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme();
function SignUp() {
  const navigate = useNavigate();
  const isMatch = useMediaQuery("(max-width:1050px)");

  const [value, setValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
                <img style={{height:"70px"}}src={logo} alt="" />
                <Typography
                  sx={{ fontWeight: "bold", marginBottom: "15px",marginTop:4 }}
                  component="h1"
                  variant="h5"
                >
                  Sign up
                </Typography>
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
                <Typography
                  sx={{ marginTop: "10px",borderBottom:"1px solid #F27405",color:"gray" }}
                  component="h1"
                  variant="h5"
                >
                  Account Details
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    mt: 5,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        className="input1"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        className="input1"
                        name="username"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        className="input1"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Confirmpassword"
                        label="Confirm Password"
                        className="input1"
                        type="password"
                        id="Confirmpassword"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <PhoneInput
                        country={"et"}
                        fullwidth
                        value={value}
                        onChange={setValue}
                        placeholder="Enter phone number"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 1,
                      fontFamily: "Montserrat",
                      textTransform: "none",
                      bgcolor: "#3F3E8D",
                    }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        onClick={() => navigate("/login")}
                        variant="body2"
                        sx={{
                          cursor: "pointer",
                          color: "#3F3E8D",
                          textDecoration: "none",
                        }}
                      >
                        Already have an account?{" "}
                        <span style={{ color: "#F27405" }}>Sign-In</span>
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
                  <Container component="main" maxWidth="xs">
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
                        }}
                        component="h1"
                        variant="h5"
                      >
                        Sign Up
                      </Typography>
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
                          marginTop: "8px",
                          borderBottom: "1px solid #F27405",
                          color: "gray",
                        }}
                      >
                        Account Details
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 2 }}
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
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              autoFocus
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              className="input1"
                              autoComplete="given-name"
                              name="username"
                              required
                              fullWidth
                              id="username"
                              label="Username"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              className="input1"
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              className="input1"
                              required
                              fullWidth
                              name="Confirmpassword"
                              label="Confirm Password"
                              type="password"
                              id="Confirmpassword"
                              autoComplete="new-password"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <PhoneInput
                              country={"et"}
                              value={value}
                              fullWidth
                              onChange={setValue}
                              placeholder="Enter phone number"
                            />
                          </Grid>
                        </Grid>

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 1,
                            fontFamily: "Montserrat",
                            textTransform: "none",
                            bgcolor: "#3F3E8D",
                          }}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link
                              onClick={() => navigate("/login")}
                              variant="body2"
                              sx={{
                                cursor: "pointer",
                                color: "#3F3E8D",
                                textDecoration: "none",
                              }}
                            >
                              Already have an account?{" "}
                              <span style={{ color: "#F27405" }}>Sign-In</span>
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

export default SignUp;
