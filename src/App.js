import React, { Component } from 'react';
import { PageSection } from './components';
import scrollToComponent from 'react-scroll-to-component';
import FA from 'react-fontawesome';

import dunnes from './dunnes.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, showMenu: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 700) {
      this.setState({ smallScreen: true });
    } else {
      this.setState({ smallScreen: false, showMenu: true });
    }
  }

  onNavClick(componentRef) {
    scrollToComponent(componentRef, { offset: -50, align: 'top' });
    if (this.state.smallScreen) {
        this.setState({ showMenu: false });
    }
  }

  render() {
    const { smallScreen, showMenu } = this.state;
    return (
      <div className="App">
        <header style={{ position: 'fixed', width: '100%', background: '#f5f5f5', borderBottom: '1px solid #eee' }}>
          <div className='content-wrap'>
            <div style={{ display: 'flex', flexDirection: smallScreen ? 'column' : 'row', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="nav-link logo" onClick={ () => this.onNavClick(this.home) }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 200">
                    <path fill={ '#01149b' } d="M32.7,155.7c13.5,3.6,18.8,3.2,26.3-5c0,0,14.2-19.9,21.3-12.8c0,0,4.3,5-1.4,14.2c0,0,49.1-19.9-10-41.2c0,0,0.7-14.9-13.5-31.3S30.6,41.2,34.1,0c0,0-26.3,20.6-7.1,64.7c0,0-12.8-5.7-14.9-39.1c0,0-18.5,32,10,64c0,0-17.8-10-21.3-26.3c0,0-5,33.4,23.5,48.3c0,0-11.4-0.7-20.6-12.1c0,0,7.1,31.3,37,32.7c0,0-3.6,7.1-21.3,15.6C1.4,156.4,0,169.2,0,169.2s6.4-12.1,16.4-14.2c0,0-12.8,12.1-8.5,17.8C7.8,172.8,15.5,151.2,32.7,155.7z"/>
                    <path fill={ '#01149b' } d="M60.4,78.9c12.8,12.8,13.5,29.9,13.5,29.9c29.1-29.9,21.3-37,8.5-60.4C69.7,24.9,69,10,69,10c-10,20.6-0.7,33.4,2.8,39.8c3.6,6.4,2.8,12.8,2.8,12.8c-0.7-4.3-10-12.8-10-12.8c-7.1-7.8-7.8-18.5-7.8-18.5c-5,12.1-0.7,22,7.8,32.7s5.7,18.5,5.7,18.5c0-8.5-9.2-14.2-9.2-14.2C53.3,62.6,50.5,54,50.5,54C48.3,69,60.4,78.9,60.4,78.9z"/>
                  </svg>
                  <a>J <span style={{ fontSize: '.8em' }}>&</span> S McGrath</a>
                </div>
                {
                  smallScreen &&
                    <div className="nav-link" onClick={ () => this.setState({ showMenu: !this.state.showMenu }) }>
                      { this.state.showMenu ? <FA name="times" style={{ color: '#4d5863' }} /> : <FA name="bars" style={{ color: '#4d5863' }} /> }
                    </div>
                }
              </div>
              {
                showMenu &&
                  <div style={{ display: 'flex', flexDirection: smallScreen ? 'column' : 'row' }}>
                    <div className="nav-link" onClick={ () => this.onNavClick(this.services) }>
                      <a>Services</a>
                    </div>
                    <div className="nav-link" onClick={ () => this.onNavClick(this.why) }>
                      <a>Why us?</a>
                    </div>
                    <div className="nav-link" onClick={ () => this.onNavClick(this.testimonials) }>
                      <a>Testimonials</a>
                    </div>
                    <div className="nav-link" onClick={ () => this.onNavClick(this.contact) }>
                      <a>Contact Us</a>
                    </div>
                  </div>
              }
            </div>
          </div>
        </header>

        <main role="main" style={{ paddingTop: '50px' }}>

          <PageSection ref={(section) => { this.home = section }} style={{ background: '#e8e8e8' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#01149b', fontFamily: "'Merriweather', serif" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 200">
                <path fill={ '#01149b' } d="M32.7,155.7c13.5,3.6,18.8,3.2,26.3-5c0,0,14.2-19.9,21.3-12.8c0,0,4.3,5-1.4,14.2c0,0,49.1-19.9-10-41.2c0,0,0.7-14.9-13.5-31.3S30.6,41.2,34.1,0c0,0-26.3,20.6-7.1,64.7c0,0-12.8-5.7-14.9-39.1c0,0-18.5,32,10,64c0,0-17.8-10-21.3-26.3c0,0-5,33.4,23.5,48.3c0,0-11.4-0.7-20.6-12.1c0,0,7.1,31.3,37,32.7c0,0-3.6,7.1-21.3,15.6C1.4,156.4,0,169.2,0,169.2s6.4-12.1,16.4-14.2c0,0-12.8,12.1-8.5,17.8C7.8,172.8,15.5,151.2,32.7,155.7z"/>
                <path fill={ '#01149b' } d="M60.4,78.9c12.8,12.8,13.5,29.9,13.5,29.9c29.1-29.9,21.3-37,8.5-60.4C69.7,24.9,69,10,69,10c-10,20.6-0.7,33.4,2.8,39.8c3.6,6.4,2.8,12.8,2.8,12.8c-0.7-4.3-10-12.8-10-12.8c-7.1-7.8-7.8-18.5-7.8-18.5c-5,12.1-0.7,22,7.8,32.7s5.7,18.5,5.7,18.5c0-8.5-9.2-14.2-9.2-14.2C53.3,62.6,50.5,54,50.5,54C48.3,69,60.4,78.9,60.4,78.9z"/>
                <path fill={ '#01149b' } d="M83.7,185.4h-3.2v-2.2H78V180h-3.2H72v-2.8h-2.8v2.8h-2.5h-3.2v-2.8h-2.5v2.8h-3.2v-2.8h-2.8v2.8h-2.5v2.8h-3v2.5v2.5H26.2v-9H21v4.7h-3v1.6h-4.7v2.6H9.8c0,0-1,11.4,2.6,11.4c3.6,0,73.4,0,73.4,0s11.1-0.5,11.1-11.1H83.7V185.4z"/>
              </svg>
              <h1 className="mt-5">J <span style={{ fontSize: '.8em' }}>&</span> S McGrath</h1>
              <div>
                <p>Haulage since 1950</p>
              </div>
            </div>
          </PageSection>

          <PageSection ref={(section) => { this.services = section }}>
            <h1 className="mt-5">Services</h1>
          </PageSection>

          <PageSection ref={(section) => { this.why = section }}>
            <h1 className="mt-5">Why us?</h1>
            <p>McGraths Transport was established in ... by John McGrath and son Sean McGrath ...  Still based in Finglas Bridge today ... as a family run business we understand the importance of providing a quality service that not only keeps the customer satisfied but excels their expectations.</p>
            <p>We have proudly served Irelands biggest retailer, Dunnes Stores for over 30 years, with a clean sheet of zero claims.</p>
          </PageSection>

          <PageSection ref={(section) => { this.testimonials = section }}>
            <h1 className="mt-5">Testimonials</h1>
            <img src={ dunnes }  width={ 100 } height={ 100 }/>
          </PageSection>

          <PageSection ref={(section) => { this.contact = section }}>
            <h1 className="mt-5">Contact Us</h1>
            <div style={{ display: 'flex', flexDirection: smallScreen ? 'column' : 'row' }}>
              <form style={{ flex: 1 }}>
                <label for='name'>Name</label>
                <input className="form-control form-control-sm" type="text" placeholder="" id='name' />
                <label for='email'>Email</label>
                <input className="form-control form-control-sm" type="text" placeholder="" id='email' />
                <label for='message'>Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
                <button type="button" class="btn btn-light">Send</button>
              </form>
              <div style={{ flex: 1 }} />
            </div>
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
