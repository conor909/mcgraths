import React, { Component } from 'react';
import { PageSection } from './components';
import scrollToComponent from 'react-scroll-to-component';

import dunnes from './dunnes.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header style={{ position: 'fixed', width: '100%', background: '#f5f5f5' }}>
          <div className='content-wrap'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div className="nav-link" onClick={ () => scrollToComponent(this.home) }>
                <a>J<span style={{ fontSize: '.5em' }}>&</span>S McGrath Transport</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="nav-link" onClick={ () => scrollToComponent(this.services) }>
                  <a>Services</a>
                </div>
                <div className="nav-link" onClick={ () => scrollToComponent(this.why) }>
                  <a>Why us?</a>
                </div>
                <div className="nav-link" onClick={ () => scrollToComponent(this.testimonials) }>
                  <a>Testimonials</a>
                </div>
                <div className="nav-link" onClick={ () => scrollToComponent(this.contact) }>
                  <a>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main role="main" style={{ paddingTop: '57px' }}>

          <PageSection ref={(section) => { this.home = section }}>

            <h1 className="mt-5">J<span style={{ fontSize: '.8em' }}>&</span>S McGrath Transport</h1>

          </PageSection>

          <PageSection ref={(section) => { this.services = section }}>

            <h1 className="mt-5">Services</h1>

          </PageSection>

          <PageSection ref={(section) => { this.why = section }}>

            <h1 className="mt-5">Why us?</h1>
            <p>McGraths Transport was established in 1950 by John McGrath and son Sean McGrath.  Still based in Finglas Bridge today, as a family run business we understand the importance of providing a quality service that not only keeps the customer satisfied but excels their expectations.</p>
            <p>We have proudly served Irelands biggest retailer, Dunnes Stores for over 30 years, with a clean sheet of zero claims.</p>

          </PageSection>

          <PageSection ref={(section) => { this.testimonials = section }}>

            <h1 className="mt-5">Testimonials</h1>
            <img src={ dunnes }  width={ 100 } height={ 100 }/>

          </PageSection>

          <PageSection ref={(section) => { this.contact = section }}>

              <h1 className="mt-5">Contact Us</h1>

          </PageSection>

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

const styles = {
  nextButton: { display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize: '10px', padding: '5px', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid #f5f5f5' }
}

export default App;
