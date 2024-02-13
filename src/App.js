// Import Amplify Packages
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';

// IMport React Packaages
import React from 'react';
import { Button } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import scene constants
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
import Calendar from "./scenes/calendar/calendar";
import Google_Calendar from './scenes/google_calendar';

// Import MaterialUI Packages
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { tokens, ColorModeContext, useMode } from "./theme";
import { Box, Typography, MenuItem, Menu, Tooltip, CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Import Queries
import * as queries from "./graphql/queries"

Amplify.configure(awsExports);

const data = {}

function App({ signOut, user}) {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [clicked, setClicked] = useState();

  const client = generateClient();

  async function getSensorData() {
    
    const pH_data = await client.graphql({
      query : queries.allDatasByMAC_pH,
      // variables: { MAC : 1073446240, timestamp : "2024-01-18T14:42:35Z"}
      variables: { MAC: 1, limit : 25 }
   });
  
   const pHdata = []

   for (let i = 0; i < pH_data.data.allDatasByMAC_pH.Datas.length; i++) {
      pHdata.push([Date.parse(Object.values(pH_data.data.allDatasByMAC_pH.Datas[i])[0]), Object.values(pH_data.data.allDatasByMAC_pH.Datas[i])[1].toFixed(5)])
   }
   data['widget'] = [{"data" : {pHdata}, "display" : "absolute"},{},{},{},{}]
  //  console.log(data.widget[0].data.pHdata)

  }

  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />   
            {/* <button onClick={getSensorData}>GetData</button>     */}
              <Tooltip title = 'Notifications' style = {{ position: "absolute", top: "27px", right: "230px" }} arrow>
                <IconButton onClick={() => setClicked((prev) => !prev)}>
                  {clicked ? <NotificationsOffOutlinedIcon /> : <NotificationsOutlinedIcon/>}
                </IconButton>
              </Tooltip>
              <Tooltip title = 'Theme Toggling' style={{ position: "absolute", top: "27px", right: "270px" }} arrow>
                <IconButton  onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>
              </Tooltip>
              <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      style ={{ position: "absolute", top: "20px", right: "15px" }}
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                  <img
                    alt="profile-user"
                    width="40px"
                    height="40px"
                    src={`../../assets/Avatar.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                   <Box width="110px">
                    <Typography variant="h4">
                      Hi, {user.username.toUpperCase()}
                    </Typography>
                    </Box>
                    <ArrowDropDownIcon />
                  </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={signOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
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
              <Route path="/google_calendar" element={<Google_Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withAuthenticator(App);