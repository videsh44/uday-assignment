import React from "react";
import { useSelector } from "react-redux";
import FrameBoxContainer from "./FrameBoxContainer";
import "./home.css";

const Home = () => {
  const boxOne = useSelector((state) => state.boxOne);
  const boxTwo = useSelector((state) => state.boxTwo);
  return (
    <>
      <div className="frame-container">
        <div className="frame-box">
          <div className="box-heading">TEXT BOX 1</div>
          {boxOne.url ? (
            <FrameBoxContainer url={boxOne.url} />
          ) : (
            <span style={{ fontWeight: 800 }}>PLEASE ENTER URL IN INPUT </span>
          )}
        </div>
        <div className="frame-box">
          <div className="box-heading">TEXT BOX 2</div>
          {boxTwo.url ? (
            <FrameBoxContainer url={boxTwo.url} />
          ) : (
            <span style={{ fontWeight: 800 }}>PLEASE ENTER URL IN INPUT </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
