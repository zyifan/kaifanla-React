import HomeView from './containers'
//import { injectReducer } from '../../store/reducers'
export default HomeView;

/*export default (store)=>{
  const reducer = require('./reducers').default;
  injectReducer(store,{key:'Home',reducer});
  return HomeView;
}*/

/*export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./containers').default
      const reducer = require('./reducers').default;
      injectReducer(store, { key: 'Home', reducer })
      cb(null, HomeView)
    })
  }
})*/


// Sync route definition
/*
export default {
  component: HomeView
}
*/
