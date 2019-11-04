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
                        file(relativePath: { eq: "about.png" }) {
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
            <div className="about-container">
                <div className="about-grid">
                    <Img className="about-image" fluid={data.file.childImageSharp.fluid} />
                    <h1 className="about-title about-title-after"><span id="about-header">HELLO</span><br/> I'm Darian.</h1>
                    <div className="about-para" id="box1">
                        <h1>Born in 1997</h1>
                        <p>From an early age, I have always been interested in everything that had to do with technology! From creating robots, playing games, and building applications, my curiosity has only grown through out the years. My passion is in design and development!</p>
                    </div>
                    <div className="about-para" id="box2">
                        <h1>What am I doing currently?</h1>
                        <p>Recently, I had the pleasure to intern at IBM as a software developer. Now, I am an upcoming software engineer at Amazon, so stay tuned!</p>
                    </div>
                    <div className="about-para" id="box3">
                        <h1>My current interests</h1>
                        <p>If I'm not working, I'm busy innovating a product in a hackathon, updating my website, or doing one of my hobbies. Some of my hobbies include photography, mechanical keyboards, playing the latest game on the Nintendo Switch or PC, basketball, guitar, or exercising at the gym.</p>
                    </div>
                </div>
            </div>
            )}
            />
        )
    }
}

export default About