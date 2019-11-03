import React from "react"
import Head from "../head/head"
import Header from "../header/header"
import Hero from "../hero/hero"
import "../../styles/layout/layout.scss"

const Layout = () => (
    <div id="root">
        <Head/>
        <Header/>
        <main>
            <Hero/>
        </main>
    </div>
)

export default Layout