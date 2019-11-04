import React, {Component} from 'react'
import { graphql,  StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "../../styles/about/about.scss"

class About extends Component {
    render() {
        return (
            <StaticQuery
                query = {graphql`
                    query {
                        file(relativePath: { eq: "about.jpg" }) {
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
            <section className="about-container">
                <div className="about-grid">
                    <Img className="about-image" fluid={data.file.childImageSharp.fluid} />
                    <h1 className="about-title about-title-after"><span id="about-header">Hey  there,</span><br/>I'm Darian.</h1>
                    <div className="about-captions cap1">
                        DESIGN
                    </div>
                    <div className="about-captions cap2">
                        DEVELOP
                    </div>
                    <div className="about-captions cap3">
                        DELIVER
                    </div>
                    <div className="about-para" id="box1">
                        <h1>Born in 1997</h1>
                        <p>From an early age, I have always been interested in everything that had to do with technology! From playing games, to building applications, my curiosity in design and development has only grown throughout the years.</p>
                    </div>
                    <div className="about-para" id="box2">
                        <h1>What am I doing currently?</h1>
                        <p>Currently, I am an upcoming software engineer at Amazon! It is my last year as an undergraduating, studying Computer Engineering at Queen's University.</p>
                    </div>
                    <div className="about-para" id="box3">
                        <h1>Some of my interests?</h1>
                        <p>I love working on interesting projects! Outside of work, I have passion in photography, mechanical keyboards, video games, basketball, guitar, and fitness.</p>
                    </div>
                </div>
            </section>
            )}
            />
        )
    }
}

export default About