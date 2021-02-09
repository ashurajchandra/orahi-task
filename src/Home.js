import React, { Component } from "react";
import BarGraph from "./BarGraph";

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
    const { items } = this.state;
    console.log("data from state", items);
    return (
      <div>
        <h3>i am home component</h3>
        {items.map(
          (item, index) => (
            <BarGraph item={item} index={index} />
          )
          // <div>
          //   <div className="month">Month:{item.month}</div>
          //   <div className="stat">Stat:{item.stat}</div>
          // </div>
        )}
      </div>
    );
  }
}

export default Home;
