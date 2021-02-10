import React, { Component } from "react";
import BarGroup from "./BarGroup";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    const url = "https://demo5636362.mockable.io/stats";
    fetch(url, {
      headers: {
        mode: "no-cors",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is ", data.data);
        this.setState({ items: data.data });
      });
  }

  render() {
    let barHeight = 20;
    let barGroups = this.state.items.map((item, index) => (
      <g transform={`translate(0, ${index * barHeight})`}>
        <BarGroup item={item} barHeight={barHeight} />
      </g>
    ));
    // const { items } = this.state;
    // console.log("data from state", items);
    return (
      <div class="bar-graph">
        <svg width="800" height="500">
          <g className="container">
            <g className="chart" transform="translate(100,60)">
              {barGroups}
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Home;
