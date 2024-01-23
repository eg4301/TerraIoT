import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports'
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import Co2OutlinedIcon from '@mui/icons-material/Co2Outlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BatterySaverOutlinedIcon from '@mui/icons-material/BatterySaverOutlined';

Amplify.configure(awsExports)

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            align = 'center'
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="0px"
              >
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`../../assets/TerraIoT.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                <Typography variant="h4" color={colors.grey[100]}>
                  TerraIoT
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/Ting.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  EG4301
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontSize: 15 }}
            >
              Ambient Charts
            </Typography>
            <Item
              title="Air Temperature"
              to="/air_temp"
              icon={<DeviceThermostatOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="CO2"
              to="/co2"
              icon={<Co2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="O2"
              to="/o2"
              icon={<AirOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Humidity"
              to="/humidity"
              icon={<OpacityOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px", fontSize: 15 }}
              // align = "center"
            >
              Water Charts
            </Typography>
            <Item
              title="Water Temperature"
              to="/water_temp"
              icon={<WaterOutlinedIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Conductivity"
              to="/conductivity"
              icon={<BoltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="pH"
              to="/pH"
              icon={<BatterySaverOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
