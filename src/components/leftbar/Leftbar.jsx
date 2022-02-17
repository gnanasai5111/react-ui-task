import React from "react";
import "./leftbar.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AllOutIcon from "@material-ui/icons/AllOut";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LanguageIcon from "@material-ui/icons/Language";
import PublicIcon from "@material-ui/icons/Public";
function Leftbar() {
  return (
    <div className="leftbar">
      <div className="first-icon-box-container">
        <div className="first-icon-box">
          <div className="circle">N</div>
          <span>
            <strong>Name</strong>
          </span>
        </div>
        <KeyboardBackspaceIcon style={{ color: "#fff" }} />
      </div>
      <div className="left-icon-container">
        <AspectRatioIcon />
        <span>Home</span>
      </div>
      <div className="left-icon-container">
        <AllOutIcon />
        <span>Section 1</span>
      </div>
      <div className="left-icon-container">
        <AddShoppingCartIcon />
        <span>Section 2</span>
      </div>
      <div className="left-icon-container">
        <AssignmentTurnedInIcon />
        <span>Section 3</span>
      </div>
      <div className="left-icon-container">
        <AccountBalanceIcon />
        <span>Section 4</span>
      </div>
      <div className="left-icon-container">
        <AspectRatioIcon />
        <span>Section 5</span>
      </div>
      <div className="left-icon-container">
        <AllOutIcon />
        <span>Section 6</span>
      </div>
      <div className="left-icon-container">
        <AddShoppingCartIcon />
        <span>Section 7</span>
      </div>
      <div className="left-icon-container">
        <AssignmentTurnedInIcon />
        <span>Section 8</span>
      </div>
      <div className="left-icon-container">
        <AccountBalanceIcon />
        <span>Documentation</span>
      </div>
      <div className="bottom-container">
        <div className="top-first-row">
          <div style={{ backgroundColor: "#777", marginRight: "10px" }}>
            <div className="bottom-circle">N</div>$0.90
          </div>
          <div
            style={{ backgroundColor: "aqua", padding: "3px", color: "blue" }}
          >
            Buy $XYZ
          </div>
        </div>
        <div className="top-second-row">
          <div>
            <LanguageIcon className="globe-icon"/>
          </div>
          <div
            style={{
              backgroundColor: "#1a1919",
              padding: "5px 7px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:"7px"
            }}
          >
            <PublicIcon className="globe-icon" />
            <div className="small-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
