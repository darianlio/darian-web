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
                                fluid(maxWidth: 400, maxHeight: 250) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `
                }
            render = {data => (
            <div class="about-container">
                <Img fluid={data.file.childImageSharp.fluid} />
                <h1 class="about-title">ABOUT MYSELF</h1>
                <div class="about-text">
                    <p>Hey there, I'm Darian. Interested in learning more? Born in Toronto, Canada, I am a twenty-two year old who is currently in his last year of study for Computer Engineering at Queen's University.</p>
                    <p>From an early age, I have always been interested in everything that had to do with technology, design, and development. From building robots, playing games, to designing applications, my curiosity has only grown through the years. Recently, I had the pleasure to intern for IBM as a Software Developer. It was a great experience that has really helped improve my fundamental abilities for work! Now, I'm currently an upcoming software engineer at Amazon! Stay tuned!</p>
                    <p>If I'm not working, I'm busy innovating a product in a hackathon, updating my website, or doing one of my hobbies. Some of my hobbies include photography, mechanical keyboards, playing the latest game on the Nintendo Switch or PC, basketball, guitar, or exercising at the gym.</p>
                </div>
            </div>
            )}
            />
        )
    }
}

export default About