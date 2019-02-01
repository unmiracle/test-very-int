import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './config'

// styles
import './assets/styles/index.scss'

import Container from './containers'

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
