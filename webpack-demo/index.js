
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Route, Router } from 'react-router'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import Login from './src/pages/login/index.js'

class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            {/* <Route component={Page404}/> */}
        </Switch>
        </div>
      </Router>
    )
  }
}
// const renderIndex = Component => {
//   render(
//       <Provider store={store}>
//         <Component />
//       </Provider>,
//     document.getElementById('app')
//   )
// }
const renderIndex = Component => {
  render(
      <Provider>
        <Login />
      </Provider>,
    document.getElementById('app')
  )
}

renderIndex(Root)


// ReactDOM.render(<App />, document.getElementById('app'))