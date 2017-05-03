import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchData,getMoreData,filter,reset,setFiltertext} from './../actions';
import HomeView from './../components/HomeView'

const mapStateToProps = (state)=>{
  return {
    fetching:state.home.fetching,
    list:state.home.list,
    haveMore:state.home.haveMore,
    oList:state.home.oList,
    filtertext:state.home.filtertext
  }
}
const mapDispatchToProps ={
    fetchData,
    getMoreData,
    filter,
    reset,
    setFiltertext
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeView)
