import React from 'react';
import './rightbar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
function Rightbar() {
  return (
    <div className='rightbar'>
        <div className='button-container'>
            <div className='button'>
            <AccountCircleTwoToneIcon />
                <span style={{paddingLeft:"5px"}}>Avalanche</span>
                <ExpandMoreIcon />
            </div>
            <div className='button' style={{backgroundColor:"transparent",border:"1px solid blue"}}>
            <AccountCircleTwoToneIcon />
                <span style={{paddingLeft:"5px"}}>fnhffnnnjjj</span>
                <ExpandMoreIcon />
            </div>
        </div>
        <div style={{display:"flex",alignItems:"center",marginTop:"20px"}}>
        <KeyboardBackspaceIcon style={{ color: "#fff" }} />
        <span style={{color:"#fff",marginLeft:"7px"}}>Custom Link</span>
        </div>
        <div style={{marginTop:"20px",color:"#fff"}}>
        <span>https://localhost:3000</span>

        </div>
        <div style={{marginTop:"20px"}}>
        <input type="text" className='input' placeholder='Enter'/>

        </div>
        <div className='button-container' style={{margin:"20px"}}>
            <div className='button' style={{backgroundColor:"blue"}}>
            <AccountCircleTwoToneIcon />
                <span style={{paddingLeft:"5px"}}>Custom </span>
                <ExpandMoreIcon />
            </div>
            <div className='button' style={{backgroundColor:"transparent",border:"1px solid blue"}}>
            <AccountCircleTwoToneIcon />
                <span style={{paddingLeft:"5px"}}>Cancel</span>
                <ExpandMoreIcon />
            </div>
        </div>
    </div>
  )
}

export default Rightbar