import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import EntryAgen from './entryAgen/EntryAgen'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/entry-agen'} component={EntryAgen} />
      </Fragment>
    </Router>
  )
}

export default App
