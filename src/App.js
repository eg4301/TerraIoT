import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getData } from "./graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { useState } from 'react';
import React from 'react';

Amplify.configure(awsExports);

function App({ signOut, user }) {

  const [data, setData] = useState(null);

  const client = generateClient();

  const getSensorData = async() => {
    //make a call to appsync api
    //timestamp: 2023-11-01T21:31:06Z
    const data = await client.graphql({
      query : getData,
      variables: { MAC : 1073446240, timestamp : "2023-11-01T21:31:24Z"}
   });
   debugger;
   setData(data.data.getData);
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
      </article>)
    }
  }

  return (
    <div>
    <h1>Hello, {user.username}</h1>
     <button onClick={signOut}>Sign out</button>
     <button onClick={()=>getSensorData()}>Get Data</button>
     <hr/>
    {viewData()}
    </div>
  );
}

export default withAuthenticator(App);