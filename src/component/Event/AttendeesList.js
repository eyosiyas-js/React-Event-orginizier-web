import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import profileImg from "../../assets/profile.svg";
function AttendeesList() {
  const isMatch = useMediaQuery("(max-width:978px)");

  return (
    <div>
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
            justifyContent: "center",
          }}
        >
          {isMatch ? (
            <>
              <h5 style={{ marginRight: "40px" }}>8:30 AM</h5>
            </>
          ) : (
            <>
              <h5 style={{ marginRight: "50px" }}>8:30 PM</h5>
              {/* <img
                style={{ transform: "rotate(90deg)", marginLeft: "90px" }}
                src={eventmoreImg}
              /> */}
            </>
          )}

          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default AttendeesList;
