import * as React from 'react'
import * as ReactDom from 'react-dom'

class App extends React.Component {
  render() {
    return <div>app page</div>
  }
}

ReactDom.render(<App />, document.getElementById('app'))