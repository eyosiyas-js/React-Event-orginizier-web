import { Box, Button, Grid, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import UskCode from "./UskCode";

export default function CreateUsher({open}) {
  const [uskCode, setUskCode] = React.useState(false);
  const isMatch2 = useMediaQuery("(max-width:878px)");

  const inputRef = React.useRef("");

  return (
    <div>
      {uskCode ? (
        <>
          <UskCode open={(uskCode) => setUskCode(uskCode)} />
          <Grid
            sx={{
              position: "absolute",
              top: "50%",
              marginTop: "220px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: "#3F3E8D",
                marginLeft: "20px",
                textTransform: "none",
                width: "200px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                "&:hover": {
                  backgroundColor: "#3F3E8D",
                },
              }}
            >
              Download
            </Button>
          </Grid>
        </>
      ) : (
        <>
          {isMatch2 ? (
            <>
              <Grid
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "flex",
                  alignItems: "center",

                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "95%",
                  }}
                >
                  <h4
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    Pull the name of the usher
                  </h4>
                  <TextField
                    multiline
                    InputRef={inputRef}
                    sx={{
                      outline: "none",
                      marginTop: "10px",
                      marginBottom: "50px",
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
                    minRows={2}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Box>
                <Grid
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    onClick={() => open(false)}
                    variant="contained"
                    sx={{
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

                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setUskCode(true)}
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "350px",
                      height: "60px",
                      borderRadius: "12px",
                      textTransform: "none",
                      bgcolor: "#3F3E8D",
                      fontSize: "20px",
                      fontWeight: "bold",
                      boxShadow: "none",
                      textShadow: "none",
                      marginLeft: "70px",

                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "65%",
                  }}
                >
                  <h4
                    style={{
                      marginTop: "50px",
                    }}
                  >
                    Pull the name of the usher
                  </h4>
                  <TextField
                    multiline
                    InputRef={inputRef}
                    sx={{
                      outline: "none",
                      marginTop: "10px",
                      marginBottom: "100px",
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
                    minRows={2}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Box>
                <Grid
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    onClick={() => open(false)}
                    variant="contained"
                    sx={{
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

                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setUskCode(true)}
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "350px",
                      height: "60px",
                      borderRadius: "12px",
                      textTransform: "none",
                      bgcolor: "#3F3E8D",
                      fontSize: "20px",
                      fontWeight: "bold",
                      boxShadow: "none",
                      textShadow: "none",
                      marginLeft: "70px",

                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </>
      )}
    </div>
  );
}
