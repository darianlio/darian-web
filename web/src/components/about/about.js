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
                </div>
            </section>
            )}
            />
        )
    }
}

export default About