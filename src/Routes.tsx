import { Switch, Route, Router } from "react-router-dom"
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          Main
        </Route>
        <Route exact path="/settings">
          Settings
        </Route>
        <Route exact path="/portfolio/new">
          New portfolio
        </Route>
        <Route exact path="/portfolio/:id">
          Portfolio
        </Route>
        <Route exact path="/portfolio/:id/:ticker">
          Portfolio ticker
        </Route>
      </Switch>
    </Router>
  )
}
