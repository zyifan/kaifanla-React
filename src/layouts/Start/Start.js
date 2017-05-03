import React from 'react';
import '../../styles/core.scss'
import './Start.scss';
import startImg from './../../static/img/kid-foods.jpg'
import {Link} from 'react-router';

export const Start = ()=>(
  <div className="start">
    <div id="table">
      <div id="tableCell">
          <h1 className="text-center">开饭啦<small>在线订餐</small></h1>
          <Link to="/Main" className="start-a">
            <img src={startImg}/>
          </Link>
      </div>
    </div>
  </div>
)

export default Start;
