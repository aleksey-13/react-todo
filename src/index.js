import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { Provider, initialState, reducer } from 'store/index'

import './index.scss'

ReactDOM.render(
    <Provider initialState={initialState} reducer={reducer}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
