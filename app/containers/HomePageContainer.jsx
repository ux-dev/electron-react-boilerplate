import React from 'react'
import { Link } from 'react-router'


export default class HomePageContainer extends React.Component {

  static defaultProps = {

  }

  render() {
    return (
      <div className="page-container">
        <section className='pane'>
          <div className="main-logo"></div>
          <h1><code>electron-react-boilerplate</code></h1>
          <h4>0.2.9</h4>
          <p>Electron application boilerplate based on React, React Router, Webpack, React Hot Loader for rapid application development.</p>
        </section>
      </div>
    )
  }

}
