import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

function Footer(props) {
  const [state, setstate] = useState("let say it is working");

  const count = useSelector((state) => state.counter.count);

  console.log(props);
  const handlechange = () => {
    props.dispatch({ type: "make-a-Change", payload: 2 });
  };
  return (
    <div style={{ height: "60px", border: "solid black 2px" }}>
      <button onClick={handlechange}>change the value in redux</button>

      {count}
    </div>
  );
}
export default connect()(Footer);
