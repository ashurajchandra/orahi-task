import React, { Component } from "react";
import BarGroup from "./BarGroup";
import { Redirect } from "react-router-dom";

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
        this.setState({ items: data.data });
      });
  }

  render() {
    if (localStorage.getItem("token") == null) return <Redirect to="/login" />;
    let barHeight = 35;
    let barGroups = this.state.items.map((item, index) => (
      <g transform={`translate(0, ${index * barHeight})`}>
        <BarGroup item={item} barHeight={barHeight} />
      </g>
    ));

    return (
      <div className="home-body">
        <div class="bar-graph">
          <svg width="900" height="600" className="svg">
            <g className="container">
              <g className="chart" transform="translate(100,60)">
                {barGroups}
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Home;
