import React from 'react'
import logo from "../../Assets/Images/Uni_Cards_Logo.png"
const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <img src={logo} className='logo-img' />
                <button className='navbar-button'>Uni Paycheck</button>
            </div>
        </div>
    )
}

export default Header