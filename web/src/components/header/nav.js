import React from 'react'
import { Link } from "gatsby"
import "../../styles/header/nav.scss"

const Nav = () => (
    <div id="navbar">
        <nav>
            <ul>
                <li>
                    <Link to="/">ABOUT</Link>
                </li>
                <li>
                    <Link to="/">EXPERIENCE</Link>
                </li>
                <li>
                    <Link to="/">EDUCATION</Link>
                </li>
                <li>
                    <Link to="/">PORTFOLIO</Link>
                </li>
                <li>
                    <Link to="/">CONTACT</Link>
                </li>
                <li>
                    <Link to="/">RESUME</Link>
                </li>
            </ul>
        </nav>
        <div id="logo">
            <Link to="/">
                <span>L</span>
                <span class="logo-left">D</span>
                <br/>
                <span class="logo-I">I</span>
                <span class="logo-left-left">A</span>
                <br/>
                <span>O</span>
                <span class="logo-left">R</span>
                <br/>
                <span class="logo-dar">I</span>
                <br/>
                <span class="logo-dar-2">A</span>
                <br/>
                <span class="logo-dar-2">N</span>
            </Link>
        </div>
    </div>
)

export default Nav