import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, useMediaQuery } from "@mui/material";

import hideImg from "../../assets/hide.svg";

import CloseImg from "../../assets/close.svg";
import "./Event.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "350px",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "12px",
  borderColor: "white",
};

function EventHide({ open }) {
  const isMatch = useMediaQuery("(max-width:760px)");
  return (
    <>
      {isMatch ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            pt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "12px",
            borderColor: "white",
          }}
        >
          <img
            loading="lazy"
            style={{
              height: "90px",
              filter:
                "invert(22%) sepia(85%) saturate(7451%) hue-rotate(357deg) brightness(108%) contrast(115%)",
            }}
            src={hideImg}
            alt=""
          />
          <h3
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            Are you sure you want to
            <span style={{ color: "#F27405" }}> HIDE</span> your event from the
            attendees?
          </h3>
          <h6
            style={{
              marginTop: "20px",
              fontSize: "8px",
              color: "gray",
            }}
          >
            if you select 'yes' , your event will not be shown on the attendee
            app
          </h6>
          <Grid
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => open(false)}
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "160px",
                height: "40px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "white",
                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                color: "black",
                border: "1px solid #F27405",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              No
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "160px",
                height: "40px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "#3F3E8D",

                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#3F3E8D",
                },
              }}
            >
              Yes
            </Button>
          </Grid>
          <Box sx={{ position: "absolute", right: 4, top: 4 }}>
            <img
              onClick={() => open(false)}
              style={{ height: "30px", cursor: "pointer" }}
              src={CloseImg}
              alt=""
            />
          </Box>
        </Box>
      ) : (
        <Grid sx={style}>
          <img
            loading="lazy"
            style={{
              height: "140px",
              filter:
                "invert(22%) sepia(85%) saturate(7451%) hue-rotate(357deg) brightness(108%) contrast(115%)",
            }}
            src={hideImg}
            alt=""
          />
          <h3
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Are you sure you want to
            <span style={{ color: "#F27405" }}> HIDE</span> your event from the
            attendees?
          </h3>

          <h5 style={{ marginTop: "20px", color: "gray" }}>
            if you select 'yes' , your event will not be shown on the attendee
            app
          </h5>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button
              onClick={() => open(false)}
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "200px",
                height: "40px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "white",
                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                color: "black",
                border: "1px solid #F27405",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              No
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "200px",
                height: "40px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "#3F3E8D",
                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#3F3E8D",
                },
              }}
            >
              Yes
            </Button>
          </Grid>

          <Box sx={{ position: "absolute", right: 4, top: 4 }}>
            <img
              onClick={() => open(false)}
              style={{ height: "30px", cursor: "pointer" }}
              src={CloseImg}
              alt=""
            />
          </Box>
        </Grid>
      )}
    </>
  );
}

export default EventHide;
