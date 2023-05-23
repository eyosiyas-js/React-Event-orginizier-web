import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, useMediaQuery } from "@mui/material";
import UploadImg from "../../../assets/upload.svg";
import "./EventForm3.css";
import Modal from "@mui/material/Modal";

import EventFormComplete from "../EventFormComplete/EventFormComplete";
import { useDropzone } from "react-dropzone";

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "white",
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "white",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 1,
          backgroundColor: "#3F3E8D",

          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            backgroundColor: "gray",
          },
        },
      },
    },
  },
});

function EventForm3({ nextValue, Next, open, nextC }) {
  function cut(str, maxLength, { side = "end", ellipsis = "..." } = {}) {
    if (str.length > maxLength) {
      switch (side) {
        case "start":
          return ellipsis + str.slice(-(maxLength - ellipsis.length));
        case "end":
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis;
      }
    }
    return str;
  }
  const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    open(false);
    Next(false);
    setOpenModal(false);
    nextC(false);
  };

  const [hashTagValue, setHashTagValue] = React.useState("");
  const [checkedReview2, setCheckedReview2] = React.useState();
  const [checkedRating2, setCheckedRating2] = React.useState();
  const [checkedReview, setCheckedReview] = React.useState(true);
  const [checkedRating, setCheckedRating] = React.useState(true);
  React.useEffect(() => {
    if (checkedRating === true) {
      setCheckedRating2(false);
    } else {
      setCheckedRating2(true);
    }
    if (checkedReview === true) {
      setCheckedReview2(false);
    } else {
      setCheckedReview2(true);
    }
  }, [checkedReview, checkedRating]);
  const handleChange = (event) => {
    setCheckedReview(event.target.checked);
  };
  const handleChange2 = (event) => {
    setCheckedRating(event.target.checked);
  };

  const isMatch = useMediaQuery("(max-width:860px)");
  const eventHashTagRef = React.useRef("");
  const goToNextForm = () => {
    console.log({ review: checkedReview2 });
    console.log({ rating: checkedRating2 });
    setOpenModal(true);
  };
  return (
    <div>
      {isMatch ? (
        <>
          <ThemeProvider theme={theme}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h4 style={{ color: "#3F3E8D", marginTop: "30px" }}>
                Event Information |
                <span style={{ color: "#F27405" }}>Step Three</span>{" "}
              </h4>
              <Container
                component="main"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CssBaseline />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box component="form" noValidate sx={{ mt: 5 }}>
                    <Grid container>
                      <h5 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                        Hash tags
                      </h5>

                      <Grid item xs={12}>
                        <Grid
                          sx={{
                            display: "flex",
                            marginBottom: "25px",
                            alignItems: "center",
                          }}
                        >
                          <Grid
                            xs={2}
                            sx={{
                              width: "45px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "rgba(228, 232, 255, 0.3)",
                              borderRadius: "7px",
                            }}
                          >
                            <h3>#</h3>
                          </Grid>
                          <Grid xs={12}>
                            <TextField
                              sx={{
                                marginBottom: "10px",
                                marginLeft: "8px",
                                bgcolor: "rgba(228, 232, 255, 0.3)",
                              }}
                              multiline
                              InputProps={{
                                style: {
                                  color: "",
                                  borderRadius: "12px",
                                },
                              }}
                              name="eventhashtag"
                              inputRef={eventHashTagRef}
                              required
                              fullWidth
                              id="eventhashtag"
                              autoFocus
                            />
                          </Grid>
                          {hashTagValue ? (
                            <>
                              <Button
                                onClick={() => setHashTagValue("")}
                                sx={{
                                  width: "80px",
                                  height: "27px",
                                  bgcolor: "#3F3E8D",
                                  color: "white",
                                  marginLeft: "15px",

                                  borderRadius: "12px",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#3F3E8D",
                                  },
                                }}
                              >
                                Remove
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() =>
                                  setHashTagValue(
                                    `# ${eventHashTagRef.current.value}`
                                  )
                                }
                                sx={{
                                  width: "80px",
                                  height: "27px",
                                  bgcolor: "#3F3E8D",
                                  color: "white",
                                  borderRadius: "12px",
                                  marginLeft: "15px",

                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#3F3E8D",
                                  },
                                }}
                              >
                                Add
                              </Button>
                            </>
                          )}
                        </Grid>
                      </Grid>
                      <Grid xs={12} sx={{}}>
                        <TextField
                          multiline
                          sx={{
                            marginBottom: "10px",
                            bgcolor: "rgba(228, 232, 255, 0.3)",
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "gray",
                              },
                            },
                          }}
                          InputProps={{
                            style: {
                              color: "",
                              borderRadius: "12px",
                            },
                          }}
                          id="outlined-basic"
                          variant="outlined"
                          value={hashTagValue}
                          minRows={2}
                          aria-readonly
                          required
                          fullWidth
                          name="eventlocation"
                        />
                      </Grid>

                      <Grid
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%",
                        }}
                      >
                        <Grid sx={{ display: "flex", alignItems: "center" }}>
                          <h5 style={{ fontWeight: "bold" }}>Review</h5>

                          <Switch
                            checked={checkedReview}
                            onChange={handleChange}
                            name="checkedA"
                          />
                        </Grid>
                        <Grid sx={{ display: "flex", alignItems: "center" }}>
                          <h5 style={{ fontWeight: "bold" }}>Rating</h5>

                          <Switch
                            checked={checkedRating}
                            onChange={handleChange2}
                            name="checkedA"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold" }}>Flyer/Picture</h5>
                  </Box>
                  <Box
                    {...getRootProps()}
                    sx={{
                      backgroundColor: "rgba(228, 232, 255, 0.4)",
                      border: "2px solid gray",
                      borderStyle: "dashed",
                      marginBottom: "60px",

                      borderRadius: "5px",
                      width: "220px",
                      height: "140px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input {...getInputProps()} />

                    <img
                      loading="lazy"
                      style={{ height: "40px" }}
                      src={UploadImg}
                      alt=""
                    />
                    {files.map((file) => (
                      <>
                        <h6 style={{ marginTop: "10px" }}>
                          {cut(file.path, 35)}{" "}
                        </h6>
                        <h6 style={{ marginLeft: "5px" }}>{file.type}</h6>
                      </>
                    ))}
                  </Box>
                </Box>
              </Container>

              <>
                <div
                  style={{
                    width: "90%",
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
                      marginLeft: "10px",

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
                      marginLeft: "30px",

                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Create
                  </Button>
                </div>
              </>
            </div>
          </ThemeProvider>
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h4 style={{ color: "#3F3E8D", marginTop: "30px" }}>
                Event Information |{" "}
                <span style={{ color: "#F27405" }}>Step Three</span>{" "}
              </h4>

              <Container
                component="main"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CssBaseline />

                <Box
                  sx={{
                    width: "500px",
                    // display: "flex",
                    // flexDirection: "column",
                  }}
                >
                  <Box component="form" noValidate sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <h5
                          style={{ marginBottom: "10px", fontWeight: "bold" }}
                        >
                          Hash tags
                        </h5>
                        <Grid
                          sx={{
                            display: "flex",
                            marginBottom: "25px",
                            alignItems: "center",
                          }}
                        >
                          <Grid
                            sx={{
                              width: "45px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "rgba(228, 232, 255, 0.3)",
                              borderRadius: "7px",
                            }}
                          >
                            <h3>#</h3>
                          </Grid>

                          <Grid xs={8}>
                            <TextField
                              sx={{ marginLeft: "20px" }}
                              maxRows={2}
                              className="inputForm"
                              name="eventhashtag"
                              inputRef={eventHashTagRef}
                              required
                              multiline
                              fullWidth
                              id="eventhashtag"
                              autoFocus
                            />
                          </Grid>

                          {hashTagValue ? (
                            <>
                              <Button
                                onClick={() => setHashTagValue("")}
                                sx={{
                                  width: "80px",
                                  height: "27px",
                                  bgcolor: "#3F3E8D",
                                  color: "white",
                                  marginLeft: "30px",
                                  borderRadius: "12px",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#3F3E8D",
                                  },
                                }}
                              >
                                Remove
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() =>
                                  setHashTagValue(
                                    `# ${eventHashTagRef.current.value}`
                                  )
                                }
                                sx={{
                                  width: "80px",
                                  height: "27px",
                                  bgcolor: "#3F3E8D",
                                  color: "white",
                                  marginLeft: "30px",
                                  borderRadius: "12px",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#3F3E8D",
                                  },
                                }}
                              >
                                Add
                              </Button>
                            </>
                          )}
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        {/* <h5 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                      Location
                    </h5> */}
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            width: "100%",
                            borderRadius: "12px",
                          }}
                        >
                          {/* <p sx={{width:"100%"}}>{hashTagValue}</p> */}
                          <TextField
                            multiline
                            sx={{
                              marginBottom: "10px",
                              bgcolor: "rgba(228, 232, 255, 0.3)",
                              "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                  borderColor: "gray",
                                },
                              },
                            }}
                            InputProps={{
                              style: {
                                color: "",
                                borderRadius: "12px",
                              },
                            }}
                            id="outlined-basic"
                            variant="outlined"
                            value={hashTagValue}
                            minRows={2}
                            aria-readonly
                            required
                            fullWidth
                            name="eventlocation"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          marginTop: "20px",
                          marginBottom: "60px",
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%",
                        }}
                      >
                        <Grid sx={{ display: "flex", alignItems: "center" }}>
                          <h5 style={{ fontWeight: "bold" }}>Review</h5>

                          <Switch
                            checked={checkedReview}
                            onChange={handleChange}
                            name="checkedA"
                          />
                        </Grid>
                        <Grid sx={{ display: "flex", alignItems: "center" }}>
                          <h5 style={{ fontWeight: "bold" }}>Rating</h5>

                          <Switch
                            checked={checkedRating}
                            onChange={handleChange2}
                            name="checkedA"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: 3,
                  }}
                >
                  <Box
                    sx={{
                      mt: 5,

                      marginLeft: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h5 style={{ fontWeight: "bold" }}>Flyer/Picture</h5>
                  </Box>
                  <Box
                    {...getRootProps()}
                    sx={{
                      mt: 2,
                      backgroundColor: "rgba(228, 232, 255, 0.4)",
                      border: "2px solid gray",
                      borderStyle: "dashed",

                      borderRadius: "5px",
                      width: "170px",
                      height: "100px",
                      marginLeft: "90px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input {...getInputProps()} />

                    <img
                      loading="lazy"
                      style={{ height: "36px" }}
                      src={UploadImg}
                      alt=""
                    />
                    {files.map((file) => (
                      <>
                        <h6 style={{ marginTop: "10px" }}>
                          {cut(file.path, 20)}{" "}
                        </h6>
                        <h6 style={{ marginLeft: "5px" }}>{file.type}</h6>
                      </>
                    ))}
                  </Box>
                </Box>
              </Container>

              <div
                style={{
                  width: "80%",
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
                  onClick={goToNextForm}
                  type="submit"
                  variant="contained"
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
                  Create
                </Button>
              </div>
            </Container>
          </ThemeProvider>
        </>
      )}
      <div>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <EventFormComplete
            open={open}
            nextC={nextC}
            openModal={(openModal) => setOpenModal(openModal)}
            Next={Next}
          />
        </Modal>
      </div>
    </div>
  );
}
export default EventForm3;
