import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./EventForm.css";
import CalendarPicker from "./CalendarPicker";
import MaskImg from "../../assets/Mask.svg";
import { useMediaQuery } from "@mui/material";
import EventForm2 from "./EventForm2/EventForm2";

const theme = createTheme();

function EventForm({ Next, nextValue, open }) {
  const [nextForm, setNextForm] = React.useState(false);
  const isMatch = useMediaQuery("(max-width:660px)");
  const eventNameRef = React.useRef("");
  const eventDescriptionRef = React.useRef(""); //
  const eventRegularRef = React.useRef(""); //
  const eventVipRef = React.useRef(""); //
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  const goToNextForm = () => {
    const eventName = eventNameRef.current.value;
    const eventDescription = eventDescriptionRef.current.value;
    const eventRegular = eventRegularRef.current.value;
    const eventVip = eventVipRef.current.value;
    if (
      eventName &&
      eventDescription &&
      eventRegular &&
      eventVip &&
      value &&
      value2
    ) {
      setNextForm(true);
      console.log("success");
    } else {
      setNextForm(true);

      console.log("must not be empty");
    }
  };
  return (
    <div>
      {nextForm ? (
        <>
          <EventForm2
            nextC={nextValue}
            open={open}
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
                    <span style={{ color: "#F27405" }}>Step one</span>{" "}
                  </h4>
                  <Box component="form" noValidate sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Name of the Event
                        </h5>
                        <TextField
                          sx={{ marginBottom: "10px" }}
                          maxRows={2}
                          className="inputForm"
                          name="eventname"
                          inputRef={eventNameRef}
                          required
                          multiline
                          fullWidth
                          id="eventname"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Description
                        </h5>
                        <TextField
                          sx={{
                            marginBottom: "10px",
                            bgcolor: "rgba(228, 232, 255, 0.3)",
                          }}
                          minRows={2}
                          InputProps={{
                            style: {
                              borderRadius: "12px",
                            },
                          }}
                          name="eventname"
                          inputRef={eventNameRef}
                          required
                          multiline
                          fullWidth
                          id="eventname"
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <h5
                          style={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          Regular Price{" "}
                        </h5>

                        <Grid sx={{ display: "flex" }}>
                          <TextField
                            sx={{ marginBottom: "35px" }}
                            type="number"
                            className="inputForm3"
                            name="regularprice"
                            inputRef={eventRegularRef}
                            required
                            fullWidth
                            id="regularprice"
                          />
                          <Button
                            sx={{
                              marginBottom: "35px",
                              width: "130px",

                              marginLeft: "15px",
                              backgroundColor: "rgba(228, 232, 255,0.3)",
                              color: "black",
                              fontWeight: "bold",
                              borderRadius: "12px",
                              "&:hover": {
                                backgroundColor: "rgb(232, 232, 232)",
                              },
                            }}
                          >
                            ETB
                            <img
                              style={{
                                height: "6px",
                                marginLeft: "6px",
                              }}
                              src={MaskImg}
                              alt=""
                            />
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid sx={{ marginLeft: "auto" }} item xs={12} sm={5}>
                        <h5
                          style={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          VIP Price
                        </h5>
                        <Grid sx={{ display: "flex" }}>
                          <TextField
                            sx={{ marginBottom: "35px" }}
                            required
                            type="number"
                            inputRef={eventVipRef}
                            className="inputForm3"
                            fullWidth
                            name="vipprice"
                            id="vipprice"
                          />
                          <Button
                            sx={{
                              marginBottom: "35px",
                              width: "130px",
                              marginLeft: "15px",
                              backgroundColor: "rgba(228, 232, 255,0.3)",

                              color: "black",
                              fontWeight: "bold",
                              borderRadius: "12px",
                              "&:hover": {
                                backgroundColor: "rgb(232, 232, 232)",
                              },
                            }}
                          >
                            ETB
                            <img
                              style={{ height: "6px", marginLeft: "6px" }}
                              src={MaskImg}
                              alt=""
                            />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
              <div>
                {isMatch ? (
                  <>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <h5
                        style={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        Date and Time
                      </h5>

                      <CalendarPicker
                        data1={(value) => setValue(value)}
                        data2={(value2) => setValue2(value2)}
                      />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid
                      sx={{
                        width: "730px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h5
                        style={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                          marginLeft: "90px",
                        }}
                      >
                        Date and Time
                      </h5>

                      <CalendarPicker
                        data1={(value) => setValue(value)}
                        data2={(value2) => setValue2(value2)}
                      />
                    </Grid>
                  </>
                )}
              </div>
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
                      onClick={() => Next(false)}
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
                      type="submit"
                      variant="contained"
                      onClick={goToNextForm}
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
                      onClick={() => Next(false)}
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: "350px",
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
                      type="submit"
                      variant="contained"
                      onClick={goToNextForm}
                      sx={{
                        mt: 3,
                        width: "350px",
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

export default EventForm;
