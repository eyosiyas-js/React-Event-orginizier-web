import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Select, useMediaQuery } from "@mui/material";
import LocationImg from "../../../assets/location.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EventForm3 from "../EventForm3/EventForm3";
import "./EventForm2.css";
const theme = createTheme();

function EventForm2({ nextValue, Next, open, nextC }) {
  const [nextForm, setNextForm] = React.useState(false);

  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");

  const isMatch = useMediaQuery("(max-width:660px)");
  const eventVenueRef = React.useRef("");
  const eventLocationRef = React.useRef(""); //
  const goToNextForm = () => {
    console.log(eventVenueRef.current.value);
    console.log(eventLocationRef.current.value);
    console.log(category);
    console.log(subCategory);
    const location = eventLocationRef.current.value;
    const venue = eventVenueRef.current.value;
    if (category && subCategory && venue && location) {
      setNextForm(true);
    } else {
      console.log("must not be emepty!");
      setNextForm(true);
    }
  };

  return (
    <div>
      {nextForm ? (
        <>
          <EventForm3
            open={open}
            nextC={nextC}
            nextValue={(nextForm) => setNextForm(nextForm)}
            Next={Next}
          />
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Container component="main" maxWidth="sm">
                <CssBaseline />

                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#3F3E8D" }}>
                    Event Information |{" "}
                    <span style={{ color: "#F27405" }}>Step Two</span>{" "}
                  </h4>
                  <Box component="form" noValidate sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Venue
                        </h5>
                        <TextField
                          sx={{ marginBottom: "10px" }}
                          maxRows={2}
                          className="inputForm"
                          name="eventvenue"
                          inputRef={eventVenueRef}
                          required
                          multiline
                          fullWidth
                          id="eventvenue"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12} sm={7}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Location
                        </h5>
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <TextField
                            sx={{ marginBottom: "10px" }}
                            className="inputForm2"
                            inputRef={eventLocationRef}
                            multiline
                            required
                            fullWidth
                            id="eventlocation"
                            name="eventlocation"
                          />
                          <Button
                            sx={{
                              marginBottom: "10px",
                              position: "absolute",
                              right: 0,
                              top: 0,
                              backgroundColor: "rgba(228, 232, 255,0.4)",
                              color: "black",
                              fontWeight: "bold",
                              borderRadius: "12px",
                              "&:hover": {
                                backgroundColor: "rgb(232, 232, 232)",
                              },
                            }}
                          >
                            <img
                              style={{ height: "30px" }}
                              src={LocationImg}
                              alt=""
                            />
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Event category
                        </h5>

                        <Grid sx={{ display: "flex", position: "relative" }}>
                          <Select
                            variant="outlined"
                            fullWidth
                            IconComponent={KeyboardArrowDownIcon}
                            sx={{
                              height: 40,
                              borderRadius: "12px",
                              backgroundColor: "rgba(228, 232, 255, 0.3)",
                              "& .MuiSvgIcon-root": {
                                color: "#F27405",
                                width: "40px",
                                height: "70px",
                                marginTop: "-20px",
                              },
                            }}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Sub category
                        </h5>

                        <Grid sx={{ display: "flex", position: "relative" }}>
                          <Select
                            variant="outlined"
                            fullWidth
                            IconComponent={KeyboardArrowDownIcon}
                            sx={{
                              height: 40,
                              borderRadius: "12px",
                              backgroundColor: "rgba(228, 232, 255, 0.3)",
                              "& .MuiSvgIcon-root": {
                                color: "#F27405",
                                width: "40px",
                                height: "70px",
                                marginTop: "-20px",
                              },
                            }}
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                          >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>

              {isMatch ? (
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={() => nextValue(false)}
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: "300px",
                        height: "60px",
                        color: "black",
                        bgcolor: "white",
                        borderRight: 2,
                        borderLeft: 2,
                        borderTop: 2,
                        borderBottom: 2,
                        borderColor: "#F27405",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        textShadow: "none",
                        marginBottom: "30px",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={goToNextForm}
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: "300px",
                        height: "60px",
                        borderRadius: "12px",
                        textTransform: "none",
                        bgcolor: "#3F3E8D",
                        fontSize: "20px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        textShadow: "none",
                        marginBottom: "30px",
                        marginLeft: "70px",
                        "&:hover": {
                          backgroundColor: "#3F3E8D",
                        },
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => nextValue(false)}
                      sx={{
                        mt: 3,
                        width: "330px",
                        height: "60px",
                        color: "black",
                        bgcolor: "white",
                        marginLeft: "10px",
                        borderRight: 2,
                        borderLeft: 2,
                        borderTop: 2,
                        borderBottom: 2,
                        borderColor: "#F27405",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        textShadow: "none",
                        marginBottom: "30px",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={goToNextForm}
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: "330px",
                        height: "60px",
                        borderRadius: "12px",
                        textTransform: "none",
                        bgcolor: "#3F3E8D",
                        fontSize: "20px",
                        fontWeight: "bold",
                        boxShadow: "none",
                        textShadow: "none",
                        marginBottom: "30px",
                        marginLeft: "70px",

                        "&:hover": {
                          backgroundColor: "#3F3E8D",
                        },
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </>
              )}
            </Container>
          </ThemeProvider>
        </>
      )}
    </div>
  );
}

export default EventForm2;
