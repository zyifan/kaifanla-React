import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'detail/:img',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Detail = require('./containers').default
      //const reducer = require('./reducers').default
      //injectReducer(store, { key: 'detail', reducer })
      cb(null, Detail)
    })
  }
})

