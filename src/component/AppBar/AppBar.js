import * as React from "react";
import "./AppBar.css";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import logout from "../../assets/logout.svg";

import AvatarImg from "../../assets/Avatar.svg";
import DrawerComp from "./Drawer";

const HeaderBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="appBar">
      <React.Fragment>
        <AppBar sx={{ bgcolor: "white" }}>
          <Toolbar>
            <img className="logo" src={logo} alt="" />
            {isMatch ? (
              <>
                <Box sx={{ position: "absolute", right: "70px", flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <img className="avatar_img" src={AvatarImg} alt="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    PaperProps={{
                      style: {
                        width: 160,
                        borderRadius: 25,
                      },
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <div>
                      <div className="edit">
                        <MenuItem>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem>
                          <Typography textAlign="center">Events</Typography>
                        </MenuItem>
                      </div>
                      <div className="delete">
                        <MenuItem>
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem>
                          <Typography textAlign="center">Log out</Typography>
                          <img
                            style={{ height: "20px", marginLeft: "auto" }}
                            src={logout}
                            alt=""
                          />
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </Box>
                <DrawerComp />
              </>
            ) : (
              <>
                <Button
                  sx={{
                    marginLeft: "auto",
                    color: "#3F3E8D",
                    bgcolor: "white",
                    borderRight: 2,
                    borderLeft: 2,
                    borderTop: 2,
                    borderBottom: 2,
                    borderColor: "#F27405",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: "bold",
                    height: "35px",
                    width: "100px",
                    "&:hover": {
                      backgroundColor: "#F27405",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  Product
                </Button>
                <Button
                  sx={{
                    marginLeft: "25px",
                    color: "white",
                    borderRadius: "20px",
                    bgcolor: "#3E3F8D",

                    textTransform: "none",
                    fontWeight: "bold",
                    height: "35px",

                    width: "100px",
                    "&:hover": {
                      backgroundColor: "#F27405",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  Create
                </Button>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <img className="avatar_img" src={AvatarImg} alt="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "49px", position: "absolute", left: "23px" }}
                    PaperProps={{
                      style: {
                        width: 160,
                        borderRadius: 25,
                      },
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <div>
                      <div className="edit">
                        <MenuItem>
                          <Typography textAlign="center">Home</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem>
                          <Typography textAlign="center">Events</Typography>
                        </MenuItem>
                      </div>
                      <div className="delete">
                        <MenuItem>
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                      </div>
                      <div className="hide">
                        <MenuItem>
                          <Typography textAlign="center">Log out</Typography>
                          <img
                            style={{ height: "20px", marginLeft: "auto" }}
                            src={logout}
                            alt=""
                          />
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default HeaderBar;
