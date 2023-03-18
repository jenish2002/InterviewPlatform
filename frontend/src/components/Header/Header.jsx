import React from 'react'
import Contect from '../contect/Contect'
import Notification from '../Notification/Notification'
// import Contect from '../contect/Contect'
const Header = () => {
  return (
    <div className="mx-2 row h-100">
      <nav className="navbar navbar-dark border-dark mx-2 border rounded-2 bg-dark mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fa-solid fa-screen-users"></i>
        </a>
        <Notification/>
        <Contect/>
      </div>
      </nav>
    </div>
  )
}

export default Header