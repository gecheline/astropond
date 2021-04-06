import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/astropond_logo.svg'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
            {/* <strong>ASTRO</strong> <span>POND</span>  */}
        <img  style={{'height':'95%', 'padding': '5%'}} src={logo}></img></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
