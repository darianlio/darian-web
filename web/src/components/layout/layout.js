import React from "react"
import Head from "../head/head"
import Header from "../header/header"
import Hero from "../hero/hero"
import About from "../about/about"
import SocialMedia from "../socialmedia/socialmedia"
import Footer from "../footer/footer"
import "../../styles/layout/layout.scss"

const Layout = () => (
    <div id="root">
        <Head/>
        <Header/>
        <main>
            <Hero/>
            <About/>
        </main>
        <SocialMedia/>
        <Footer/>
    </div>
)

export default Layout