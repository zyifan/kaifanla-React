import {connect} from 'react-redux';
import Detail from '../components'

const mapStateToProps = (state)=>{
  return {
    list : state.home.list
  }
};

export default connect(mapStateToProps)(Detail);
