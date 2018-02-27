import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">J&S McGrath</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main role="main" className="container-fluid" style={{ paddingTop: '57px' }}>
          <h1 className="mt-5">J&S McGraths Ltd.</h1>
          <p className="lead">Loreum Ipsum</p>
        </main>

        <footer className="footer">
          <div className="container-fluid">
            <span className="text-muted">J&S McGrath</span>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
