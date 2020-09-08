import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path={'/'} component={Home} />
      </Fragment>
    </Router>
  )
}

export default App
