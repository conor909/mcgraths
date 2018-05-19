import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header style={{ position: 'fixed', width: '100%', background: '#000' }}>
          <div className='content-wrap'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div>
                <a className="nav-link" href="#">McGraths</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="nav-link">
                  <a href="#">Get a quote</a>
                </div>
                <div className="nav-link">
                  <a href="#">Why us?</a>
                </div>
                <div className="nav-link">
                  <a href="#">Testimonials</a>
                </div>
                <div className="nav-link">
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main role="main" style={{ paddingTop: '57px' }}>

          <div className='page-section'>
            <div className='content-wrap'>
              <h1 className="mt-5">J&S McGraths Ltd.</h1>
            </div>
          </div>

          <div className='page-section'>
            <div className='content-wrap'>
              <h1 className="mt-5">Why us?</h1>
            </div>
          </div>

          <div className='page-section'>
            <div className='content-wrap'>
              <h1 className="mt-5">Testimonials</h1>
              <p className="lead">Dunnes Stores</p>
            </div>
          </div>

          <div className='page-section'>
            <div className='content-wrap'>
              <h1 className="mt-5">Contact Us</h1>
            </div>
          </div>

        </main>

        <footer className="footer">
          <div className="container-fluid">
            <div className='content-wrap'>
              <span className="text-muted">J&S McGrath</span>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
