import React,{useState,useEffect} from "react";
import "./main.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import bitcoin from "./bitcoin.png";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import axios from 'axios';


function Main() {
  const [user,setUser]=useState([]);
  useEffect(()=>{
   async function fetchData(){
     try{
       const res=await axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data");
       setUser(res.data.data[0]);
       console.log(user);

     }
     catch(err){
       console.log(err);
     }

    }
    fetchData();

  },[])
  return (
    <div className="main">
      <div className="first-row">
        <div>
          <span style={{ color: "#fff", fontSize: "1.2rem" }}>Section</span>
          <hr style={{ color: "blue" }} />
        </div>
        <div className="button">
          <AccountCircleTwoToneIcon />
          <span style={{ paddingLeft: "5px" }}>0.2 $XYZ</span>
          <div
            style={{
              backgroundColor: "aqua",
              padding: "3px 7px",
              color: "blue",
              borderRadius: "10px",
              marginLeft: "15px",
              fontSize: "0.9rem",
            }}
          >
            Buy $XYZ
          </div>
        </div>
      </div>
      <div className="second-row">
        <h4>
          Front end application includes React ,Javascript,Html,Css and version
          control
        </h4>
        <img
          alt=""
          src={bitcoin}
          height="70"
          width="70"
          className="bitcoin-img"
        />
        <div className="cross-button">x</div>
        <span
          style={{
            backgroundColor: "#fff",
            color: "blueviolet",
            padding: "3px 10px",
            borderRadius: "10px",
            marginTop: "10px",
            display: "inline-block",
          }}
        >
          Tutorial
        </span>
      </div>
      <div className="third-row">
        <h4>Your Rewards</h4>
        <div className="button-group">
          <h2>$0.898337373773</h2>
          <div className="button" style={{ backgroundColor: "blue" }}>
            <AccountCircleTwoToneIcon />
            <span style={{ paddingLeft: "5px" }}>Custom </span>
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="three-group">
          <div>$40 AVAX</div>
          <div>$10 BNB</div>
          <div>$210 BTC</div>
        </div>
      </div>
      <div className="fourth-row">
        <div className="third-row" style={{ marginRight: "20px" }}>
          <h4>12.5 of fee</h4>
          <h5 style={{ color: "rgb(26, 25, 25)" }}>
            Your referral link for XYZ
          </h5>
          <div className="link-input">
            <span>https://localhost:464664</span>
            <span>
              <FileCopyOutlinedIcon />
            </span>
          </div>
        </div>
        <div className="third-row">
          <h4>12.5 of fee</h4>
          <h5 style={{ color: "rgb(26, 25, 25)" }}>
            Your referral link for XYZ
          </h5>
          <div className="link-input">
            <span>https://localhost:464664</span>
            <span>
              <FileCopyOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="fifth-row">
        <div style={{ color: "#fff" ,marginRight:"20px"}}>
          <span>First Tab</span>
          <hr />
        </div>
        <div style={{ color: "rgb(26, 25, 25)" }}>
          <span>Second Tab</span>
        </div>
      
      </div>
      <div className="sixth-row" style={{marginTop:"10px"}}> 
        <span>Asset</span>
        <span>Amount</span>
        <span>User Account</span>
        <span>Referral Earning</span>
        </div>
        
    
      <div className="sixth-row" style={{padding:"15px 0px",marginTop:"3px"}}> 
          <span style={{display:"flex",alignItems:"center"}}> <AccountCircleTwoToneIcon className="icon-color"/>{user.asset}</span>
          <span>{user.amount}</span>
          <span style={{overflow:"hidden",textOverflow:"ellipsis"}}>{user.user}</span>
          <span>{user.referral_earnings}</span>
          </div>

        
    
    </div>
  );
}

export default Main;
