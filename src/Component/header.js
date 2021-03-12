import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  const [user, setuser] = useState({ name: "abeer" });

  return (
    <div style={{ height: "60px", border: "solid black 2px" }}>
      Header
      <button
        onClick={() => {
          props.dispatch({ type: "increament", payload: props.count + 1 });
        }}
      >
        increament
      </button>
      {user.name}
      <Link to="/">Home</Link>
      <Link to="/contactus/136">Contactus</Link>
      <button onClick={() => props.setuser({ name: "ali" })}>
        react state changes
      </button>
    </div>
  );
}
const readvalues = (store) => {
  return {
    count: store.counter.count,
  };
};
export default connect(readvalues)(Header);
