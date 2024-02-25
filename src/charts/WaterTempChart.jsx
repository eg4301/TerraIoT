// Import React Libraries
import React from "react";
import { TimeSeries, TimeRange } from "pondjs";

// Import Components
import ChartContainer from "../components/ChartContainer";
import ChartRow from "../components/ChartRow";
import Charts from "../components/Charts";
import YAxis from "../components/YAxis";
import LineChart from "../components/LineChart";
import ScatterChart from "../components/ScatterChart"
import Baseline from "../components/Baseline";
import Resizable from "../components/Resizable";
import EventMarker from "../components/EventMarker"

// Import temperature Data
import { temperature_data } from "../api_query";

export function GettemperatureData() {
    // const [data, setData] = useState({'widget':[{'data':{'temperature':[[1705588926000, 5.0000]]},'display':'absolute'},{},{},{},{}]})
    // const data = {'widget':[{'data':{'temperature':[[1705588926000, 5.0000]]},'display':'absolute'},{},{},{},{}]}
    if (temperature_data.widget != undefined) {
    const data = temperature_data
    const points = data.widget[0].data.temperature
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

    return (
        class temperature_Chart extends React.Component {
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
                            axis="temperature"
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
                            axis="temperature"
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
                                    id="temperature"
                                    label="temperature"
                                    min={croppedSeries.min("value")}
                                    max={croppedSeries.max("value")}
                                    width="60"
                                    format=".2f"
                                />
                                <Charts>
                                    <ScatterChart axis="temperature" series={croppedSeries} style={style} />
                                    <LineChart axis='temperature' series = {croppedSeries} style={style} />
                                    <Baseline
                                        axis="temperature"
                                        style={baselineStyleLite}
                                        value={croppedSeries.max()}
                                        label="Max"
                                        position="right"
                                    />
                                    <Baseline
                                        axis="temperature"
                                        style={baselineStyleLite}
                                        value={croppedSeries.min()}
                                        label="Min"
                                        position="right"
                                    />
                                    <Baseline
                                        axis="temperature"
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
        )
    }
    else {
    const data = {'widget':[{'data':{'temperature':[[1705588926000, 5.0000]]},'display':'absolute'},{},{},{},{}]}
    const points = data.widget[0].data.temperature
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

    return (
        class temperature_Chart extends React.Component {
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
                            axis="temperature"
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
                            axis="temperature"
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
                                    id="temperature"
                                    label="temperature"
                                    min={croppedSeries.min("value")}
                                    max={croppedSeries.max("value")}
                                    width="60"
                                    format=".2f"
                                />
                                <Charts>
                                    <ScatterChart axis="temperature" series={croppedSeries} style={style} />
                                    <LineChart axis='temperature' series = {croppedSeries} style={style} />
                                    <Baseline
                                        axis="temperature"
                                        style={baselineStyleLite}
                                        value={croppedSeries.max()}
                                        label="Max"
                                        position="right"
                                    />
                                    <Baseline
                                        axis="temperature"
                                        style={baselineStyleLite}
                                        value={croppedSeries.min()}
                                        label="Min"
                                        position="right"
                                    />
                                    <Baseline
                                        axis="temperature"
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
        )
    }
}

const Temperature_Chart = new GettemperatureData()

export default Temperature_Chart
