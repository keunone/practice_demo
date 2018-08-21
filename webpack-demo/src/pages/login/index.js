
import React from 'react'
import ReactDOM from 'react-dom'
// import './styles.scss'
import _main from '../../components/main'
import styles from './styles.scss'

class Login extends React.Component {
    render(){
      console.log('styles:', styles)
      return(
        <div className={`container-fluid ${styles.loginPage}`}>
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">logo</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">tab1 <span className="sr-only">(current)</span></a></li>
                <li><a href="#">tab2</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
}

export default Login