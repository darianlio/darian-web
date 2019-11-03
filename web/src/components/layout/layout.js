import React, { Component } from "react"
import Head from "../head/head"
import Header from "../header/header"
import Hero from "../hero/hero"
import About from "../about/about"
import Experience from "../experience/experience"
import SocialMedia from "../socialmedia/socialmedia"
import Footer from "../footer/footer"
import "../../styles/layout/layout.scss"

class Layout extends Component {
    state = {
        xMain: 0,
        yMain: 0,
        xTrailing: 0,
        yTrailing: 0,
        backgroundColor: 'white'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({backgroundColor: 'black'})
        } else {
            this.setState({backgroundColor: 'white'})
        }
    }

    handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        this.setState({
            xMain: clientX,
            yMain: clientY,
        }, () => {
            setTimeout(() => {
                this.setState({
                    xTrailing: clientX,
                    yTrailing: clientY,
                })
            }, 150)
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render = () => {
        const {
            xMain,
            yMain,
            xTrailing,
            yTrailing,
        } = this.state

        return (
            <div id="root" onMouseMove = {e => this.handleMouseMove(e)}>
                <div className='cursors'>
                    <div className='cursor' style={{left: xMain, top: yMain, backgroundColor: this.state.backgroundColor}}/>
                    <div className='cursor' style={{ left: xTrailing, top: yTrailing}}/>
                </div>
                <Head/>
                <Header/>
                <main> 
                    <Hero/>
                    <About/>
                    <Experience/>
                </main>
                <SocialMedia/>
                <Footer/>
            </div>
        )
    }
}

export default Layout