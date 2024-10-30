import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const logoutButton = () => {
    history.replace('/login')
    Cookie.remove('jwt_token')
  }
  return (
    <div className="header-container">
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1 className="header-heading">Travel Trip</h1>
      </Link>
      <div className="Routes-container">
        <Link to="/" className="link-item">
          <h1 className="heading1">Home</h1>
        </Link>
        <Link to="/my-trips" className="link-item">
          <h1 className="heading1">My Trips</h1>
        </Link>
      </div>
      <button type="button" className="logout-btn" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
