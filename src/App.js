import React, { Component } from 'react';
import { PageSection } from './components';
import scrollToComponent from 'react-scroll-to-component';

import dunnes from './dunnes.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, showMenu: true };
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
    scrollToComponent(componentRef);
    if (this.state.smallScreen) {
        this.setState({ showMenu: false });
    }
  }

  render() {
    const { smallScreen, showMenu } = this.state;
    return (
      <div className="App">
        <header style={{ position: 'fixed', width: '100%', background: '#f5f5f5' }}>
          <div className='content-wrap'>
            <div style={{ display: 'flex', flexDirection: smallScreen ? 'column' : 'row', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="nav-link" onClick={ () => this.onNavClick(this.home) }>
                  <a>J<span style={{ fontSize: '.5em' }}>&</span>S McGrath Transport</a>
                </div>
                {
                  smallScreen &&
                    <div className="nav-link" onClick={ () => this.setState({ showMenu: !this.state.showMenu }) }>
                      X
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

        <main role="main" style={{ paddingTop: '57px' }}>

          <PageSection ref={(section) => { this.home = section }}>

            <h1 className="mt-5">J<span style={{ fontSize: '.8em' }}>&</span>S McGrath Transport</h1>

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

              <form>
                <label for='name'>Name</label>
                <input className="form-control form-control-sm" type="text" placeholder="" id='name' />

                <label for='email'>Email</label>
                <input className="form-control form-control-sm" type="text" placeholder="" id='email' />

                <label for='message'>Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>

                <button type="button" class="btn btn-light">Send</button>
              </form>

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
