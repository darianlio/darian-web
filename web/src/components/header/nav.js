import React from 'react'
import { Link } from "gatsby"
import "../../styles/header/nav.scss"

class Nav extends React.Component {
    state = {
        color: 'white'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 715) {
            this.setState({color: 'black'})
        } else {
            this.setState({color: 'white'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div id="navbar" style={{color: this.state.color}}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/">EXPERIENCE</Link>
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
                <Link to="/">
                    <div id="logo">  
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
                    </div>
                </Link>
            </div>
        )
    }
}

export default Nav