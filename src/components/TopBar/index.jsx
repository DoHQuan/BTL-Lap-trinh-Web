import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
    const location = useLocation();
    console.log(location.pathname);
    const parts = location.pathname.split("/");
    const page = parts[1];
    const userId = parts[2];  
    const user = models.userModel(userId)
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
            Đỗ Hà Quân
          </Typography>
          <Typography variant="h6">Photos of: {user.first_name} {user.last_name}</Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
