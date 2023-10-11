import {Link, withRouter} from 'react-router-dom'

import './index.css'

import Cookies from 'js-cookie'

const Header = props => {
  const {history} = props

  const logoutFromApp = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
    // return <Redirect to="/login"/>;
  }

  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-logo-img"
        />
      </Link>
      <ul className="home-jobs-lg-nav-items-container">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/jobs">
          <li className="nav-link">Jobs</li>
        </Link>
        <li className="nav-link">Profile</li>
      </ul>
      <button type="button" className="logout-btn" onClick={logoutFromApp}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
