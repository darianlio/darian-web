import React, { Component } from "react"
import Head from "../head/head"
import Header from "../header/header"
import Hero from "../hero/hero"
import About from "../about/about"
import Experience from "../experience/experience"
import SocialMedia from "../socialmedia/socialmedia"
import Footer from "../footer/footer"
import ReactFullpage from '@fullpage/react-fullpage';
import "../../styles/layout/layout.scss"

class Layout extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        const cursor = document.querySelector('.cursor1');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY-5)+"px; left:" + (e.pageX-5) + "px;")
        })
        const cursor2 = document.querySelector('.cursor2');
        document.addEventListener('mousemove', e => {
            cursor2.setAttribute("style", "top: " + (e.pageY - 11)+"px; left:" + (e.pageX - 11) + "px;")
        })
        document.addEventListener('mouseover', e => {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'i' || e.target.tagName.toLowerCase() === 'span') {
                cursor2.classList.add("expand");
            } else {
                cursor2.classList.remove("expand");
            }
        })
    }

    render = () => {
        return (
            <div id="root">
                <div className="cursor1"></div>
                <div className="cursor2"></div>
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