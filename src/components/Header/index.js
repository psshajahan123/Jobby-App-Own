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
          alt="logo img"
          className="header-logo-img"
        />
      </Link>
      <div className="home-jobs-lg-nav-items-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/jobs" className="nav-link">
          Jobs
        </Link>
      </div>
      <button className="logout-btn" onClick={logoutFromApp}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
