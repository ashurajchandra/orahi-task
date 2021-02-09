import React, { Component } from "react";
import BarGroup from "./BarGroup";

class BarGraph extends Component {
  render() {
    const { item, index } = this.props;
    console.log("PROPS", item);
    console.log("PROPS INDEX", index);

    let barHeight = 20;

    let barGroups = (
      <g transform={`translate(0, ${index * barHeight})`}>
        <BarGroup item={item} barHeight={barHeight} />
      </g>
    );

    // let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
    //                                             <BarGroup d={d} barHeight={barHeight} />
    //                                           </g>)

    return (
      <svg width="800" height="300">
        <g className="container">
          {/* <text className="title" x="10" y="30">
              Week beginning 9th July
            </text> */}
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }
}

export default BarGraph;
