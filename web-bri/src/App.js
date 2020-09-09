import React, { Fragment, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import EntryAgen from './entryAgen/EntryAgen'
import ViewAgen from './viewAgen/ViewAgen'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/entry-agen'} component={EntryAgen} />
        <Route exact path={'/view-agen'} component={ViewAgen} />
      </Fragment>
    </Router>
  )
}

export default App
