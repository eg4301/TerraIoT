// Import Amplify Packages
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';

// Import Queries
import * as queries from "./graphql/queries";

Amplify.configure(awsExports);

const client = generateClient();

export const [CO2_data, O2_data, atm_temperature_data, conductivity_data, humidity_data, pH_data, temperature_data] = [{},{},{},{},{},{},{}]

export async function GetSensorData() {

  // console.log(atm_temperature_data.widget == undefined)

  const ambient_data = await client.graphql({
    query : queries.allDatasByMAC,
    variables: { MAC : 2, limit : 100 }
  })

  const water_data = await client.graphql({
    query : queries.allDatasByMAC,
    variables: { MAC : 1, limit : 100 }
  })

  const [CO2, O2, atm_temperature, conductivity, humidity, pH, temperature] = [[],[],[],[],[],[],[]]

  for (let i = 0; i < ambient_data.data.allDatasByMAC.Datas.length; i++) {
    CO2.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[3].toFixed(3)])
    O2.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[6].toFixed(3)])
    atm_temperature.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[2].toFixed(3)])
    humidity.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[5].toFixed(3)])
  }

  for (let i = 0; i < water_data.data.allDatasByMAC.Datas.length; i++) {
    conductivity.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[4].toFixed(3)])
    pH.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[7].toFixed(3)])
    temperature.push([Date.parse(Object.values(ambient_data.data.allDatasByMAC.Datas[i])[1]), Object.values(ambient_data.data.allDatasByMAC.Datas[i])[8].toFixed(3)])
  }

  CO2_data['widget'] = [{"data" : {CO2}, "display" : "absolute"},{},{},{},{}]
  O2_data['widget'] = [{"data" : {O2}, "display" : "absolute"},{},{},{},{}]
  atm_temperature_data['widget'] = [{"data" : {atm_temperature}, "display" : "absolute"},{},{},{},{}]
  conductivity_data['widget'] = [{"data" : {conductivity}, "display" : "absolute"},{},{},{},{}]
  humidity_data['widget'] = [{"data" : {humidity}, "display" : "absolute"},{},{},{},{}]
  pH_data['widget'] = [{"data" : {pH}, "display" : "absolute"},{},{},{},{}]
  temperature_data['widget'] = [{"data" : {temperature}, "display" : "absolute"},{},{},{},{}]

  console.log(atm_temperature_data)
}