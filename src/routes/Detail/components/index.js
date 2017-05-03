import React,{Component} from 'react'
import {Link} from 'react-router'
import './index.scss'
import Popup from './Popup'
import {Button} from 'react-bootstrap'

export default class Detail extends Component{
  constructor(props){
    super(props)
  }
  render (){
    let {list,routeParams} = this.props;
    var imgSrc = routeParams.img;
    var item = list.find(function(v,i){
      return v.id === imgSrc
    });
    let url = './../../static/img/'+item.img_l;
    return (
      <div className="container">
        <div className="detail">
          <ul className="breadcrumb">
            <li><Link to="/main">首页</Link></li>
            <li className="active">详情</li>
          </ul>
          <h2>{item.name}</h2>
          <hr/>
          <p>{item.material}</p>
          <img src={'./img/'+item.img_l} className="img-responsive"/>
          <br/>
          <div>{item.detail}</div>
          <br/>
          <div className="clearfix bottom30">
            <Popup>我要订餐</Popup>
            <Link to="/main" className="pull-right margin-right15">
              <Button bsStyle="primary" bsSize="sm">我再看看</Button></Link>
          </div>
        </div>

      </div>
    )
  }
}
