import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ininialize } from '../actions/user'

import Public from './public'

export const history = createBrowserHistory()

class Container extends Component {
  state = {
    initialized: false,
  }

  componentDidMount = async () => {
    try {
      await ininialize()
    } catch (e) {
      history.replace('/')
      alert(e.message || e)
    } finally {
      this.setState({ initialized: true })
    }
  }

  render = () => {
    return this.state.initialized ? (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    ) : (
      <div>Loading ...</div>
    )
  }
}

export default Container
