import React, { Component } from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "../../styles/header/nav.scss"

class Nav extends Component {
    state = {
        color: 'white',
        display: 'block'
    }


    listenScrollEvent = e => {
        if (window.scrollY > 715) {
            this.setState({color: 'black'})
        } else if (window.scrollY > 625) {
            this.setState({display: 'none'})
        } else {
            this.setState({color: 'white', display: 'block'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <StaticQuery
            query = {graphql`
                query {
                    logo: file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    logoBlack: file(relativePath: { eq: "logoblack.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                `
            }
            render = {data => (
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
                        <div className="container">
                            <Img className="logo" fluid={data.logo.childImageSharp.fluid} style={{display: this.state.display}}/>
                            <Img className="logoBlack" fluid={data.logoBlack.childImageSharp.fluid}/>
                        </div>
                    </div>
                </Link>
            </div>
        )}
        />
        )
    }
}

export default Nav