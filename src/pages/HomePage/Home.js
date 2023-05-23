import React, { useEffect, useState } from "react";
import HeaderBar from "../../component/AppBar/AppBar";
import RoutingBar from "../../component/RoutingBar/RoutingBar";
import "./Home.css";
import DashboardImg from "../../assets/dashbord.svg";
import { Button, Container, Modal, useMediaQuery } from "@mui/material";
import AccountVerify from "../../component/AccountVerify/AccountVerify";
import UploadID from "../../component/UploadID/UploadID";
import EventForm from "../../component/EventForm/EventForm";

function Home() {

  const [openForm, setOpenForm] = React.useState(false);
  const [openVerify, setOpenVerify] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);

  const handleCloseVerify = () => {
    setNextValue(false);
    setOpenVerify(false);
  };
  const handleCloseUpload = () => {
    setNextValue(false);
    setOpenUpload(false);
  };

  const [nextValue, setNextValue] = useState(false);
  useEffect(() => {
    console.log(nextValue);
  }, [nextValue]);
  const [accVerified, setAccVerified] = useState(true);
  const isMatch = useMediaQuery("(max-width:460px)");
  const nextOption = () => {
    setNextValue(true);
    setOpenVerify(true);
    setOpenUpload(true);
  };
  return (
    <div className="home" style={{ width: "100%" }}>
      {isMatch ? (
        <>
          <HeaderBar />
          <div className="home_route_bar">
            <RoutingBar />
          </div>

          {nextValue ? (
            <>
              {accVerified ? (
                <>
                  {openForm ? (
                    <>
                      <EventForm
                        nextValue={(nextValue) => setNextValue(nextValue)}
                        open={(openUpload) => setOpenUpload(openUpload)}
                        Next={(openForm) => setOpenForm(openForm)}
                      />
                    </>
                  ) : (
                    <>
                      <Modal
                        open={openUpload}
                        onClose={handleCloseUpload}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <div style={{ width: "100%" }}>
                          <UploadID
                            form={(openForm) => setOpenForm(openForm)}
                            next={(nextValue) => setNextValue(nextValue)}
                            open={(openUpload) => setOpenUpload(openUpload)}
                          />
                        </div>
                      </Modal>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Modal
                    open={openVerify}
                    onClose={handleCloseVerify}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div>
                      <AccountVerify
                        next={(nextValue) => setNextValue(nextValue)}
                        open={(openVerify) => setOpenVerify(openVerify)}
                      />
                    </div>
                  </Modal>
                </>
              )}
            </>
          ) : (
            <>
              <Container
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <img
                  src={DashboardImg}
                  className="img"
                  alt=""
                  style={{
                    height: "320px",
                    textAlign: "center",
                  }}
                />
                <h2
                  className="text"
                  style={{
                    font: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "19px",
                    marginTop: "25px",
                  }}
                >
                  Dashboard is under construction!
                </h2>
                <Button
                  className="button"
                  sx={{
                    width: "350px",
                    bgcolor: "#3F3E8D",
                    color: "white",
                    height: "50px",
                    marginTop: "40px",
                    borderRadius: "13px",
                    textTransform: "none",
                    fontSize: "17px",
                    "&:hover": {
                      backgroundColor: "#F27405",
                      color: "white",
                    },
                  }}
                  onClick={nextOption}
                >
                  Create an event
                </Button>
              </Container>
            </>
          )}
        </>
      ) : (
        <>
          <HeaderBar />
          <div className="home_route_bar">
            <RoutingBar />
          </div>

          {nextValue ? (
            <>
              {accVerified ? (
                <>
                  {openForm ? (
                    <>
                      <EventForm
                        nextValue={(nextValue) => setNextValue(nextValue)}
                        open={(openUpload) => setOpenUpload(openUpload)}
                        Next={(openForm) => setOpenForm(openForm)}
                      />
                    </>
                  ) : (
                    <>
                      <Modal
                        open={openUpload}
                        onClose={handleCloseUpload}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <div style={{ width: "100%" }}>
                          <UploadID
                            form={(openForm) => setOpenForm(openForm)}
                            next={(nextValue) => setNextValue(nextValue)}
                            open={(openUpload) => setOpenUpload(openUpload)}
                          />
                        </div>
                      </Modal>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Modal
                    open={openVerify}
                    onClose={handleCloseVerify}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div>
                      <AccountVerify />
                    </div>
                  </Modal>
                </>
              )}
            </>
          ) : (
            <>
              <Container
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <img
                  src={DashboardImg}
                  className="img"
                  alt=""
                  style={{ height: "320px", textAlign: "center" }}
                />
                <h2
                  style={{
                    font: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "23px",
                    marginTop: "25px",
                  }}
                >
                  Dashboard is under construction!
                </h2>
                <Button
                  sx={{
                    width: "350px",
                    bgcolor: "#3F3E8D",
                    color: "white",
                    height: "50px",
                    marginTop: "40px",
                    borderRadius: "13px",
                    textTransform: "none",
                    fontSize: "17px",
                    "&:hover": {
                      backgroundColor: "#F27405",
                      color: "white",
                    },
                  }}
                  onClick={nextOption}
                >
                  Create an event
                </Button>
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
