import React from "react";
import { Box, Button, Grid, TextField, useMediaQuery } from "@mui/material";
import CloseImg from "../../assets/close.svg";
import PromoCode from "./PromoCode";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  paddingTop: 0,
  paddingBottom: 0,
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "28px",
  borderColor: "white",
};

const styleM = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "530px",
  paddingTop: 0,
  paddingBottom: 0,

  transform: "translate(-50%, -50%)",

  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "28px",
  borderColor: "white",
};

function CreatePromoCode({ open }) {
  const [promocode, setPromocode] = React.useState(false);
  const inputRef = React.useRef("");
  const isMatch2 = useMediaQuery("(max-width:978px)");

  return (
    <div>
      {promocode ? (
        <>
          <PromoCode open={(promocode) => setPromocode(promocode)} />
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
              <Box sx={styleM}>
                <Grid
                  sx={{
                    height: "35%",

                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <h3 style={{ color: "#3F3E8D", fontWeight: "bold" }}>
                    Create promo code
                  </h3>
                  <Button
                    sx={{
                      width: "100%",
                      height: "40px",
                      bgcolor: "#3F3E8D",
                      textTransform: "none",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Add code
                  </Button>
                  <h4
                    style={{ borderBottom: "1px solid gray", width: "80%" }}
                  />
                </Grid>
                <Grid item sx={{ width: "90%" }}>
                  <h4 style={{ fontWeight: "bold" }}>
                    Percentage Cut for the promocode
                  </h4>
                  <TextField
                    multiline
                    InputRef={inputRef}
                    sx={{
                      outline: "none",
                      marginTop: "10px",
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
                    minRows={1}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Grid>

                <Grid item sx={{ width: "90%" }}>
                  <h4 style={{ fontWeight: "bold" }}>
                    Promocode avaliable for
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
                    minRows={1}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Grid>
                <Grid
                  sx={{
                    width: "100%",
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
                    onClick={() => setPromocode(true)}
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
                      marginLeft: "50px",

                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Add
                  </Button>
                </Grid>
                <Box sx={{ position: "absolute", right: 8, top: 8 }}>
                  <img
                    onClick={() => open(false)}
                    style={{ height: "30px" }}
                    src={CloseImg}
                    alt=""
                  />
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box sx={style}>
                <Grid
                  sx={{
                    height: "35%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <h3 style={{ color: "#3F3E8D", fontWeight: "bold" }}>
                    Create promo code
                  </h3>
                  <Button
                    sx={{
                      width: "100%",
                      height: "40px",
                      bgcolor: "#3F3E8D",
                      textTransform: "none",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#3F3E8D",
                      },
                    }}
                  >
                    Add code
                  </Button>
                  <h4
                    style={{ borderBottom: "1px solid gray", width: "80%" }}
                  />
                </Grid>
                <Grid item sx={{ width: "40%" }}>
                  <h4 style={{ fontWeight: "bold" }}>
                    Percentage Cut for the promocode
                  </h4>
                  <TextField
                    multiline
                    InputRef={inputRef}
                    sx={{
                      outline: "none",
                      marginTop: "10px",
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
                    minRows={1}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Grid>

                <Grid item sx={{ width: "40%" }}>
                  <h4 style={{ fontWeight: "bold" }}>
                    Promocode avaliable for
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
                    minRows={1}
                    aria-readonly
                    required
                    fullWidth
                    name="eventlocation"
                  />
                </Grid>
                <Grid>
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
                    onClick={() => setPromocode(true)}
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
                <Box sx={{ position: "absolute", right: 8, top: 8 }}>
                  <img
                    onClick={() => open(false)}
                    style={{ height: "30px", cursor: "pointer" }}
                    src={CloseImg}
                    alt=""
                  />
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CreatePromoCode;
