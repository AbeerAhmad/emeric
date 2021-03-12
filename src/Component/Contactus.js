import React from "react";
import ContactSubcomp from "./ContactSubcomp";

export default function Contactus(props) {
  console.log(props);
  return (
    <div style={{ background: "yellow", flex: 1 }}>
      this is contact us page
      <ContactSubcomp  />
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        Go back
      </button>
    </div>
  );
}
