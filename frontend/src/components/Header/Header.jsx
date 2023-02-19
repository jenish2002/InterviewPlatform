import React from 'react'
import Contect from '../contect/Contect'
import Notification from '../Notification/Notification'
// import Contect from '../contect/Contect'
const Header = () => {
  return (
    <div className="mx-2 row">
      <nav class="navbar border-dark mx-2 border rounded-2 bg-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <i class="fa-solid fa-screen-users"></i>
        </a>
        <Notification/>
        <Contect/>
      </div>
      </nav>
    </div>
  )
}

export default Header