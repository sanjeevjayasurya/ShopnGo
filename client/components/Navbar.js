import React from 'react'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'
import * as auth from '../auth/auth-helper'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__container">
                    <a href="/" id="navbar__logo">SHOPNGO</a>
                    <div className="navbar__toggle" id="mobile_menu" onClick={activeMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        {auth.isAuthenticated() &&
                            <React.Fragment>
                                <li className="navbar__item">
                                    <Link to={`/user/` + auth.isAuthenticated().user._id} className="navbar__links">
                                        My Profile
                                    </Link>
                                </li>
                                <li className="navbar__item">
                                    <Link to="/signup" className="button">
                                        Sign up
                                    </Link>
                                </li>
                            </React.Fragment>
                        }
                        {!auth.isAuthenticated() &&
                            <React.Fragment>
                                <li className="navbar__item">
                                    <Link to="/signup" className="button">
                                        Sign up
                                </Link>
                                </li>
                                <li className="navbar__item">
                                    <Link to="/signin" className="button">
                                        Sign in
                                </Link>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

const activeMenu = () => {
    const menu = document.querySelector('#mobile_menu');
    const menuLinks = document.querySelector('.navbar__menu')
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
export default Navbar