import React from "react";
import Iframe from "react-iframe";

const FrameBoxContainer = (props) => {
  return (
    <div style={{ minWidth: "800px", overflowX: "auto" }}>
      <Iframe
        url={props.url}
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default FrameBoxContainer;
