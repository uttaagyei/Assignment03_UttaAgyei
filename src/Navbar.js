import React from 'react'
import './css/layout.css'

function Navbar() {
    return (
        <nav className="navbar">
        <div className="container">
        <a href="#">Hulk</a>
        <a href="#" class="logo is-active">Marvel</a>
        <a href="#">Venom</a>
        </div>
        </nav>
    )
}
export default Navbar;