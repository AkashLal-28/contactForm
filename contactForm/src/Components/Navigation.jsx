import React from 'react'

function Navigation() {
  return (
    <>
        <nav>
            <img src="images/logo.png" alt="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <button class="login">Login</button>
        </nav>
    </>
  )
}

export default Navigation
