import {  Grid, useMediaQuery } from "@mui/material";
import React from "react";
import profileImg from "../../assets/profile.svg";
import eventmoreImg from "../../assets/eventmore.svg";

function UshersList() {
  const isMatch = useMediaQuery("(max-width:978px)");

  return (
    <>
      <Grid
        sx={{
          width: "100%",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "45px", marginRight: "20px" }}
            src={profileImg}
            alt=""
          />
          <h5>Sifan Tilahun</h5>
        </Grid>
        <Grid
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {isMatch ? (
            <>
              <h5 style={{ marginLeft: "30px" }}>2345897</h5>
              <img
                style={{ transform: "rotate(90deg)", marginLeft: "40px" }}
                src={eventmoreImg}
                alt=""
              />
            </>
          ) : (
            <>
              <h5 style={{ marginLeft: "60px" }}>2345</h5>
              <img
                style={{ transform: "rotate(90deg)", marginLeft: "90px" }}
                src={eventmoreImg}
                alt=""
              />
            </>
          )}

          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </>
  );
}

export default UshersList;
