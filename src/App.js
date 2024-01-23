import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import React from 'react';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Typography, MenuItem, Menu, } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Air_temp from "./scenes/air_temp";
import CO2 from "./scenes/co2";
import O2 from "./scenes/o2";
import Humidity from "./scenes/humidity";
import Water_temp from "./scenes/water_temp";
import Conductivity from "./scenes/conductivity";
import PH from "./scenes/pH";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { tokens } from "././theme";
import Calendar from "./scenes/calendar/calendar";


Amplify.configure(awsExports);

function App({ signOut, user}) {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
              <IconButton
                style ={{ position: "absolute", top: "16px", right: "15px" }} IconComponent={PersonOutlinedIcon}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PersonOutlinedIcon/>
                </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </Menu>

              {/* <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.username}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box> */}


            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/air_temp" element={<Air_temp />} />
              <Route path="/co2" element={<CO2 />} />
              <Route path="/o2" element={<O2 />} />
              <Route path="/humidity" element={<Humidity />} />
              <Route path="/water_temp" element={<Water_temp />} />
              <Route path="/conductivity" element={<Conductivity />} />
              <Route path="/pH" element={<PH />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withAuthenticator(App);