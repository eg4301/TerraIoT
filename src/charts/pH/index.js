// Import Amplify Libraries
import { Amplify } from "aws-amplify";
import awsExports from '../../../src/aws-exports'
import { generateClient } from 'aws-amplify/api';

// Import React Libraries
import React from "react";
import { TimeSeries, TimeRange } from "pondjs";
import { useState, useEffect } from "react";

// Import Components
import ChartContainer from "../../components/ChartContainer";
import ChartRow from "../../components/ChartRow";
import Charts from "../../components/Charts";
import YAxis from "../../components/YAxis";
import LineChart from "../../components/LineChart";
import ScatterChart from "../../components/ScatterChart"
import Baseline from "../../components/Baseline";
import Resizable from "../../components/Resizable";
import EventMarker from "../../components/EventMarker"

// Import Queries
import * as queries from "../../graphql/queries"


// Amplify.configure(awsExports);

// const client = generateClient();

// function GetpHData() {

    // const [PHdata, setData] = useState({'widget': [{"data" : [[170324984,5]] , "display" : "absolute"},{},{},{},{}]})

    // useEffect(() => {

    // async function getSensorData() {
    
    // const pH_data = await client.graphql({
    //     query : queries.allDatasByMAC_pH,
    //     // variables: { MAC : 1073446240, timestamp : "2024-01-18T14:42:35Z"}
    //     variables: { MAC: 1, limit : 25 }
    // });

    // const pHdata = []

    // for (let i = 0; i < pH_data.data.allDatasByMAC_pH.Datas.length; i++) {
    //     pHdata.push([Date.parse(Object.values(pH_data.data.allDatasByMAC_pH.Datas[i])[0]), Object.values(pH_data.data.allDatasByMAC_pH.Datas[i])[1]])
    // }

    // setData(PHdata['widget'] = [{"data" : {pHdata}, "display" : "absolute"},{},{},{},{}])
    // };

    // getSensorData()}, []);

    // Parsing the Data
    
    const data = require("./dummy_data.json")
    const points = data.widget[0].data.reverse()
    const series = new TimeSeries({
        columns: ["time", "value"],
        points
    });

    const style = {
        value: {
            stroke: "#a02c2c",
            opacity: 0.2
        }
    };

    const baselineStyle = {
        line: {
            stroke: "#32d15d",
            strokeWidth: 1,
            opacity: 0.4,
            strokeDasharray: "none"
        },
        label: {
            fill: "#32d15d"
        }
    };

    const baselineStyleLite = {
        line: {
            stroke: "#32d15d",
            strokeWidth: 1,
            opacity: 0.5
        },
        label: {
            fill: "#32d15d"
        }
    };

    const NullMarker = props => {
        return <g />;
    };

    class PH_Chart extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timerange: new TimeRange([1236985288649, 1326654398343]),
                tracker: null,
                trackerEvent: null,
                // markerMode: "flag"
            };
        }

        handleTrackerChanged = t => {
            if (t) {
                const e = series.atTime(t);
                const eventTime = new Date(
                    e.begin().getTime() + (e.end().getTime() - e.begin().getTime()) / 2
                );
                const eventValue = e.get("value");
                const v = `${eventValue > 0 ? "+" : ""}${eventValue}`;
                this.setState({ tracker: eventTime, trackerValue: v, trackerEvent: e });
            } else {
                this.setState({ tracker: null, trackerValue: null, trackerEvent: null });
            }
        };

        handleTimeRangeChange = timerange => {
            this.setState({ timerange });
        };

        renderMarker = () => {
            if (!this.state.tracker) {
                return <NullMarker />;
            }
            if (this.state.markerMode === "flag") {
                return (
                    <EventMarker
                        type="flag"
                        axis="pH"
                        event={this.state.trackerEvent}
                        column="value"
                        info={[{ label: "Anomaly", value: this.state.trackerValue }]}
                        infoTimeFormat="%Y"
                        infoWidth={120}
                        markerRadius={2}
                        markerStyle={{ fill: "black" }}
                    />
                );
            } else {
                return (
                    <EventMarker
                        type="point"
                        axis="pH"
                        event={this.state.trackerEvent}
                        column="value"
                        markerLabel={this.state.trackerValue}
                        markerLabelAlign="left"
                        markerLabelStyle={{ fill: "#2db3d1"}}
                        markerRadius={3}
                        markerStyle={{ fill: "#2db3d1" }}
                    />
                );
            }
        };

        render() {
            const { timerange } = this.state;
            const croppedSeries = series.crop(timerange);
            return (
                <Resizable>
                    <ChartContainer
                        enablePanZoom={true}
                        timeRange={timerange}
                        onTimeRangeChanged={this.handleTimeRangeChange}
                        onTrackerChanged={this.handleTrackerChanged}
                        format="%b '%y"
                        // timeAxisTickCount={5}
                    >
                        <ChartRow height = "180">
                            <YAxis
                                id="pH"
                                label="pH"
                                min={croppedSeries.min("value")}
                                max={croppedSeries.max("value")}
                                width="60"
                                format=".2f"
                            />
                            <Charts>
                                <ScatterChart axis="pH" series={croppedSeries} style={style} />
                                <LineChart axis='pH' series = {croppedSeries} style={style} />
                                <Baseline
                                    axis="pH"
                                    style={baselineStyleLite}
                                    value={croppedSeries.max()}
                                    label="Max"
                                    position="right"
                                />
                                <Baseline
                                    axis="pH"
                                    style={baselineStyleLite}
                                    value={croppedSeries.min()}
                                    label="Min"
                                    position="right"
                                />
                                <Baseline
                                    axis="pH"
                                    style={baselineStyle}
                                    value={croppedSeries.avg()}
                                    label="Avg"
                                    position="right"
                                />
                                {this.renderMarker()}
                            </Charts>
                        </ChartRow>
                    </ChartContainer>
                </Resizable>
            );
        }
    }

//     return PH_Chart;
// };

export default PH_Chart