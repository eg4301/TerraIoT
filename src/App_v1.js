import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import { generateClient } from 'aws-amplify/api';
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

  const delayInMilliseconds = 5000;

  const getSensorData = async() => {
    
    const data = await client.graphql({
      query : queries.allDatasByMAC_pH,
      // variables: { MAC : 1073446240, timestamp : "2024-01-18T14:42:35Z"}
      variables: { MAC: 1, limit : 25 }
   });

   setTimeout (function() {
    console.log(data)
   }, delayInMilliseconds);
  }


  return (
    <div>
    <h1>Hello, {user.username}</h1>
     <button onClick={signOut}>Sign out</button>
     <button onClick={()=>getSensorData()}>Get Data</button>
     <Button variant = "contained">getSensorData</Button>
     <hr/>
    </div>
  );
}

export default withAuthenticator(App);