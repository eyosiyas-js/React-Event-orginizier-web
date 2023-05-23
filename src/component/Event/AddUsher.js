import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import CreateUsher from "./CreateUsher";
import UsherRoute from "./UsherRoute";
import CloseImg from "../../assets/close.svg";
import UshersList from "./UshersList";

function AddUsher({ open }) {
  const [ushers, setUshers] = React.useState(false);
  const isMatch2 = useMediaQuery("(max-width:1024px)");
  return (
    <div>
      {isMatch2 ? (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              minHeight: "50%",
              height: "84%",
              transform: "translate(-50%, -50%)",
              paddingTop: 0,
              paddingBottom: 2,
              width: "95%",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "28px",
              borderColor: "white",
              overflowY: "scroll",
            }}
          >
            <Grid
              sx={{
                width: "100%",
                marginTop: "30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  marginBottom: "30px",
                  color: "#3F3E8D",
                  fontWeight: "bold",
                }}
              >
                Add Usher{" "}
              </h3>
              <UsherRoute RouteValue={(ushers) => setUshers(ushers)} />
            </Grid>
            <Grid item sx={{ width: "100%", height: "100%" }}>
              <Grid item sx={{ width: "100%", height: "100%" }}>
                {!ushers ? (
                  <>
                    <Grid item sx={{ width: "100%", height: "100%" }}>
                      <CreateUsher open={open} />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item sx={{ width: "100%", height: "100%" }}>
                      <Grid item sx={{ width: "100%", height: "12%" }}>
                        <Grid
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            borderTop: "1px solid lightgray",
                            borderBottom: "1px solid lightgray",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                          }}
                        >
                          <h4>Name</h4>
                          <h4>USK</h4>
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          width: "100%",
                          height: "82%",
                        }}
                      >
                        <Grid
                          sx={{
                            width: "100%",
                            height: "75%",
                            overflowY: "scroll",
                          }}
                        >
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                          <UshersList />
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
            <Box sx={{ position: "absolute", right: 8, top: 8 }}>
              <img
                style={{ height: "30px" }}
                onClick={() => open(false)}
                src={CloseImg}
                alt=""
              />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
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
            }}
          >
            <Grid
              item
              sx={{ width: "70%", marginTop: "30px", textAlign: "center" }}
            >
              <h3
                style={{
                  marginBottom: "30px",
                  color: "#3F3E8D",
                  fontWeight: "bold",
                }}
              >
                Add Usher
              </h3>
              <UsherRoute RouteValue={(ushers) => setUshers(ushers)} />
            </Grid>
            <Grid item sx={{ width: "100%", height: "100%" }}>
              <Grid item sx={{ width: "100%", height: "100%" }}>
                {!ushers ? (
                  <>
                    <Grid item sx={{ width: "100%", height: "100%" }}>
                      <CreateUsher open={open} />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Grid
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          marginBottom: "20px",
                        }}
                      >
                        <Grid item sx={{ width: "50%", height: "100%" }}>
                          <Grid
                            item
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              marginTop: "40px",
                              borderTop: "1px solid rgba(128,128,128,0.7)",
                              borderBottom: "1px solid rgba(128,128,128,0.7)",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                            }}
                          >
                            <h4>Name</h4>
                            <h4>USK</h4>
                          </Grid>
                          <Grid
                            sx={{
                              height: "50%",
                              width: "100%",
                              overflowY: "scroll",
                              "::-webkit-scrollbar": {
                                width: "8px",
                              },
                              "::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                              },
                              "::-webkit-scrollbar-thumb": {
                                background: "gray",
                                borderRadius: "20px",
                              },
                            }}
                          >
                            <UshersList />
                            <UshersList />
                            <UshersList />
                            <UshersList />
                            <UshersList />
                            <UshersList />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
            <Box sx={{ position: "absolute", right: 8, top: 8 }}>
              <img
                style={{ height: "30px", cursor: "pointer" }}
                onClick={() => open(false)}
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

export default AddUsher;
