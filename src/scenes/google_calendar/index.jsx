import React, { useState } from "react";
import "../../styles.css";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

import { Box, useTheme, TextField, IconButton } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { ObjectSchema } from "yup";


//put your google calendar api key here
const API_KEY = "AIzaSyAtD4GE6lVWDUy4YriPnBh1x85gjigcj7A";

//replace calendar id with one you want to test

let calendars = [
  { calendarId: "en.singapore#holiday@group.v.calendar.google.com" },
];

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: "3px",
    color:"#948fb3" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `,
};

 

const Google_Calendar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // console.log(event.target.value);
      setValue(event.target.value)
      
    }
  };

  // var key = Object.keys({value})[0]

  // const api_key = {value}[key]

  // console.log(api_key)

  return (

    <div className="App">
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
              <input
        type="text"
        id="message"
        name="message"
        onKeyDown={handleKeyDown}
      />
          {/* <TextField value = {value} id="outlined-basic" label="Google API Key" variant="outlined" sx={{width:'300px'}} onKeyown={handlekeyDown}/> */}
        </Box>
      </Box>
      <body>
        <div
          style={{
            width: "90%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px",
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </body>
    </div>
  );
}

export default Google_Calendar