import React,{Component} from 'react'
import {Media} from 'react-bootstrap'
import {Link} from 'react-router'
import './HomeView.scss'

class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    let {fetchData,list,filtertext} = this.props;
    if(list.length <=0){
      fetchData();
    }
  }
  componentDidMount(){
    let {filtertext} = this.props;
    this.refs.mySearch.value = filtertext
  }
  handleSearch(){
      var {filter,reset,setFiltertext} = this.props;
      let filtertext = this.refs.mySearch.value.trim();
      setFiltertext(filtertext);
      if(!!filtertext){
        filter(filtertext);
      }else{
        reset();
      }
  }
  render (){
    let {fetching,haveMore,list,getMoreData,filtertext} = this.props;
    return (
      <div className="container">
        <label>美食搜索</label>
        <div className="input-group">
          <input type="search" className="form-control" ref="mySearch"/>
          <span className="input-group-btn" onClick={this.handleSearch.bind(this)}>
            <button className="btn btn-default">搜索</button>
          </span>
        </div>
        <div className="list-group">
          {list.map(item=>(
            <Link key={item.id} className="list-group-item" to={'/main/detail/'+item.id}>
              <Media>
                <Media.Left>
                  <img width={64} height={64} src={'img/'+item.img} alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{item.name}</Media.Heading>
                  <p>{item.material}</p>
                </Media.Body>
              </Media>
            </Link>
          ))}
        </div>

        <button className="btn btn-primary btn-block btn-addmore" onClick={getMoreData}>
           {fetching? <span>加载中...</span>:(haveMore? <span>加载更多</span>:<span>没有更多数据</span>)}
        </button>
      </div>
    )
  }
}

export default HomeView;
