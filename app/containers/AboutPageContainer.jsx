import React from 'react'
import { Link } from 'react-router'


export default class AboutPageContainer extends React.Component {

  static defaultProps = {

  }

  render() {
    return (
      <div className="page-container">
        <p>About us.</p>
        <Link to="home">back Home</Link>
      </div>
    )
  }

}
