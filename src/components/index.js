import React from 'react';

export class PageSection extends React.Component {
  render() {
    return(
      <div className='page-section'>
        <div className='content-wrap'>
          { this.props.children }
        </div>
      </div>
    )
  }
}
