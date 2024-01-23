import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import * as queries from "./graphql/queries";
import { getData } from "./graphql/queries";
import { useState } from 'react';
import { Button } from '@mui/material';
import React from 'react';

Amplify.configure(awsExports);

function App({ signOut, user }) {

  const [data, setData] = useState(null);

  const client = generateClient();

  const getSensorData = async() => {
    
  //   const data = await client.graphql({ 
  //     query: queries.allData, 
  //     variables: { limit : 25 } 
  //   });
  //   setData = (sensordata.push(data.allData))
  //   console.log(data.length);
  //   console.log(Object.getPrototypeOf(data));
  //   // for (const [key, value] of Object.entries(data)) {
  //   //   console.log(`${key}: ${value}`);
  //   // }
  //   // debugger;
  //   // setData = (data.data.allData)
  // };


  //   make a call to appsync api
  //   timestamp: 2023-11-01T21:31:06Z
    const data = await client.graphql({
      query : queries.allData,
      // variables: { MAC : 1073446240, timestamp : "2024-01-18T14:42:35Z"}
      variables: { limit : 25 }
   });
   setData(data.data.getData);
   console.log(data.length)
  }

  const viewData = () => {
    if (data) {
      return (<article>
        <h3>{data.timestamp}</h3>
        <p>{data.CO2}</p>
        <p>{data.O2}</p>
        <p>{data.atm_temperature}</p>
        <p>{data.conductivity}</p>
        <p>{data.humidity}</p>
        <p>{data.pH}</p>
        <p>{data.temperature}</p>
        <h3>{data.MAC}</h3>
        {data[0]}
      </article>)
    }
  }

  return (
    <div>
    <h1>Hello, {user.username}</h1>
     <button onClick={signOut}>Sign out</button>
     <button onClick={()=>getSensorData()}>Get Data</button>
     <Button variant = "contained">getSensorData</Button>
     <hr/>
    {viewData()}
    </div>
  );
}

export default withAuthenticator(App);