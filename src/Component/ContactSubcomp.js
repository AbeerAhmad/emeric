import React from "react";
import { connect, useSelector } from "react-redux";
function Subcomponent(props) {
  console.log(props);

  return (
    <div
      style={{ width: "200px", height: "200px ", border: "solid black 2px" }}
    >
      sub comp {props.count}
    </div>
  );
}
const readvalues = (store) => {
  return {
    count: store.counter.count,
  };
};
export default connect(readvalues)(Subcomponent);
