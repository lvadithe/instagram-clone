import React from 'react'
import LOGO from "../../../assets/insta_logo.png";
import './Nav.css';

function Nav() {
    return (
        <div>
            <div className="nav__logo">
                <img
                    className="nav__logoImage"
                    src={LOGO}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav