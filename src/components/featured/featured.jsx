import React from 'react'
import "./featured.css"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
import  KeyboardArrowUpOutlinedIcon  from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className="title">Total revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className='bottom'>
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <p className="title">Totale sales made today :</p>
        <p className="amount">896117$</p>
        <p className="desc">Transactions and payments</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured