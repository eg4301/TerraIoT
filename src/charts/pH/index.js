// Import React Libraries
import React from "react";
import { TimeSeries, TimeRange } from "pondjs";

// Import Components
import ChartContainer from "../../components/ChartContainer";
import ChartRow from "../../components/ChartRow";
import Charts from "../../components/Charts";
import YAxis from "../../components/YAxis";
import LineChart from "../../components/LineChart";
import Baseline from "../../components/Baseline";
import Resizable from "../../components/Resizable";

// Parsing the Data
const data = require('./dummy_data.json')
const points = data.widget[0].data.reverse()
const series = new TimeSeries({
    name: "USD_vs_EURO",
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

const baselineStyleExtraLite = {
    line: {
        stroke: "#32d15d",
        strokeWidth: 1,
        opacity: 0.2,
        strokeDasharray: "1,1"
    },
    label: {
        fill: "steelblue"
    }
};

class PH_Chart extends React.Component {
    state = {
        tracker: null,
        timerange: new TimeRange([1236985288649, 1326654398343])
    };

    handleTrackerChanged = tracker => {
        this.setState({ tracker });
    };

    handleTimeRangeChange = timerange => {
        this.setState({ timerange });
    };

    render() {
        const { timerange } = this.state;
        return (
            <Resizable>
                <ChartContainer
                    enablePanZoom={true}
                    timeRange={timerange}
                    onTimeRangeChanged={this.handleTimeRangeChange}
                    format="%b '%y"
                    // timeAxisTickCount={5}
                >
                    <ChartRow height="1100" >
                        <YAxis
                            id="pH"
                            label="pH"
                            min={series.min()}
                            max={series.max()}
                            width="60"
                            format=".2f"
                        />
                        <Charts>
                            <LineChart axis="pH" series={series} style={style} />
                            <Baseline
                                axis="pH"
                                style={baselineStyleLite}
                                value={series.max()}
                                label="Max"
                                position="right"
                            />
                            <Baseline
                                axis="pH"
                                style={baselineStyleLite}
                                value={series.min()}
                                label="Min"
                                position="right"
                            />
                            <Baseline
                                axis="pH"
                                style={baselineStyleExtraLite}
                                value={series.avg() - series.stdev()}
                            />
                            <Baseline
                                axis="pH"
                                style={baselineStyleExtraLite}
                                value={series.avg() + series.stdev()}
                            />
                            <Baseline
                                axis="pH"
                                style={baselineStyle}
                                value={series.avg()}
                                label="Avg"
                                position="right"
                            />
                        </Charts>
                    </ChartRow>
                </ChartContainer>
            </Resizable>
        );
    }
}

export default PH_Chart