import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import CloseImg from "../../assets/close.svg";
import CardImg from "../../assets/Card.svg";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "#e4e8ff",
  boxShadow: 24,
  display: "flex",
  pb: 4,
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "12px",
};

const styleM = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  height: 400,
  bgcolor: "#e4e8ff",
  boxShadow: 24,
  display: "flex",
  pb: 4,
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "12px",
};

function PromoCode({ open }) {
  const isMatch = useMediaQuery("(max-width:876px)");

  return (
    <div>
      {isMatch ? (
        <>
          <Box sx={styleM}>
            <Grid>
              <h5 style={{ fontWeight: "bold", marginTop: "40px" }}>
                Here is your promocode for New Addis festival
              </h5>
            </Grid>
            <Grid sx={{ width: "100%" }}>
              <h5
                style={{
                  color: "#3F3E8D",
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                You can screen shot the page or download the
                <span>promocode</span>
              </h5>
            </Grid>
            <Grid
              sx={{
                width: "100%",
                height: "130px",
                marginTop: "30PX",
                bgcolor: "white",
                boxShadow: 24,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid sx={{ width: "100%", height: "90%", display: "flex" }}>
                <Grid
                  sx={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    borderRight: "5px solid gray",
                  }}
                >
                  <img  style={{ height: "70px" }} src={CardImg} alt="" />
                </Grid>
                <Grid
                  sx={{
                    width: "75%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <h1 style={{ fontSize: "47px", fontWeight: "bold" }}>
                    15572
                  </h1>
                  <CheckCircleOutlineIcon
                    sx={{
                      color: "#F27405",
                      fontSize: "30px",
                      position: "absolute",
                      right: 3,
                    }}
                  />
                </Grid>
              </Grid>
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
      ) : (
        <>
          <Box sx={style}>
            <Grid>
              <h3 style={{ fontWeight: "bold", marginTop: "30px" }}>
                Here is your promocode for New Addis festival
              </h3>
            </Grid>
            <Grid sx={{ width: "50%" }}>
              <h4
                style={{
                  color: "#3F3E8D",
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                You can screen shot the page or download the{" "}
                <span>promocode</span>
              </h4>
            </Grid>
            <Grid
              sx={{
                width: "80%",
                height: "130px",
                marginTop: "30PX",
                bgcolor: "white",
                boxShadow: 24,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid sx={{ width: "100%", height: "90%", display: "flex" }}>
                <Grid
                  sx={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    borderRight: "15px solid gray",
                  }}
                >
                  <img style={{ height: "100px" }} src={CardImg} alt="" />
                </Grid>
                <Grid
                  sx={{
                    width: "75%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
                    15572
                  </h1>
                  <CheckCircleOutlineIcon
                    sx={{
                      color: "#F27405",
                      fontSize: "30px",
                      position: "absolute",
                      right: 20,
                    }}
                  />
                </Grid>
              </Grid>
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
    </div>
  );
}

export default PromoCode;
