import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/HomePage/Home";
import { useNavigate } from "react-router-dom";
import Profile from "./pages/ProfilePage/Profile";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Events from "./pages/Events/Events";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordReset/PasswordResetConfirm";
import EventForm from "./component/EventForm/EventForm";
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const user = "rex";

   useEffect(() => {
    if (!user) {
      if (pathname === '/login') {
        navigate('/login')
      } else {
        navigate('/signup')
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eventcreate" element={<EventForm />} />

            <Route path="/" element={<Home />} />
            <Route path="/passwordrecovery" element={<PasswordReset />} />
            <Route
              path="/passwordrecoveryconfirm"
              element={<PasswordResetConfirm />}
            />
          </Routes>
        </>
      </div>
    </ThemeProvider>
  );
}

export default App;
