import React from 'react'
import { RouteHandler, Link } from 'react-router'


export default class AppContainer extends React.Component {

  render() {
    return (
      <div id="appContainer">
      <i className='fa fa-hand-peace-o'></i><i className='fa fa-hand-peace-o'></i><i className='fa fa-hand-peace-o'></i>
        <RouteHandler />
        <footer>
          <i className='fa fa-hand-peace-o'></i>
        </footer>
      </div>
    )
  }

}
