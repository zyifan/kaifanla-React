import React, { Component, PropTypes } from 'react'
import { browserHistory, Router,hashHistory } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={hashHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer

//<Router history={browserHistory} children={routes} />
