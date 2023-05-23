import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import CloseImg from "../../assets/close.svg";

function AccountVerify({ open, next }) {
  return (
    <div>
      <>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "350px",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            borderRadius: "12px",
            borderColor: "white",
            "@media (max-width: 860px)": {
              width: "95%",
            },
          }}
        >
          <Grid item sx={{ marginTop: "40px" }}>
            <Typography
              sx={{
                color: "#3F3E8D",
                fontWeight: "bold",
                fontSize: "17px",

                "@media (max-width: 300px)": {
                  fontSize: "13px",
                },
              }}
            >
              Your account has not been verified
            </Typography>
          </Grid>
          <Grid
            sx={{
              width: "75%",
              height: "75px",
              borderRadius: "25px",
              bgcolor: "rgba(128,128,128,0.3)",
              marginTop: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "20px",
              "@media (max-width: 680px)": {
                width: "90%",
              },
            }}
          >
            <TelegramIcon
              sx={{
                fontSize: "70px",
                cursor: "pointer",
                "@media (max-width: 680px)": {
                  fontSize: "50px",
                },
              }}
            />
            <PhoneIcon
              sx={{
                fontSize: "70px",
                cursor: "pointer",
                "@media (max-width: 680px)": {
                  fontSize: "50px",
                },
              }}
            />
            <MailIcon
              sx={{
                fontSize: "70px",
                cursor: "pointer",
                "@media (max-width: 680px)": {
                  fontSize: "50px",
                },
              }}
            />
          </Grid>
          <h6 style={{ marginTop: "20px", color: "gray" }}>
            Please contact the admin using any of the channels.
          </h6>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "200px",
                height: "45px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "white",
                fontSize: "17px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                color: "black",
                border: "3px solid #F27405",
                "&:hover": {
                  backgroundColor: "white",
                },
                "@media (max-width: 860px)": {
                  width: "160px",
                },
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 6,
                width: "200px",
                height: "45px",
                borderRadius: "7px",
                textTransform: "none",
                bgcolor: "#3F3E8D",
                fontSize: "17px",
                fontWeight: "bold",
                boxShadow: "none",
                textShadow: "none",
                marginBottom: "10px",
                "&:hover": {
                  backgroundColor: "#3F3E8D",
                },
                "@media (max-width: 860px)": {
                  width: "160px",
                },
              }}
            >
              Okay
            </Button>
          </Grid>
          <Box sx={{ position: "absolute", right: 4, top: 4 }}>
            <img
              onClick={() => {
                open(false);
                next(false);
              }}
              style={{ height: "30px", cursor: "pointer" }}
              src={CloseImg}
              alt=""
            />
          </Box>
        </Box>
      </>
    </div>
  );
}

export default AccountVerify;
