import React from "react";

function BarGroup(props) {
  const { item } = props;
  const { stat } = props.item;
  const { month } = props.item;
  console.log("item's stat", stat);
  console.log("item's month", month);
  console.log("bargroup props", item);
  let barPadding = 2;
  let barColour = "#348AA7";
  let widthScale = (stat) => stat * 2;

  let width = widthScale(props.item.stat);
  console.log("width", width);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.item.month}
      </text>
      <rect
        y={barPadding * 0.2}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 2}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.item.stat}
      </text>
    </g>
  );
}

export default BarGroup;
