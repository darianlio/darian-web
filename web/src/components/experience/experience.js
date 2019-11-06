import React, { Component } from 'react'
import { graphql,  StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "../../styles/experience/experience.scss"


class Experience extends Component {
    render() {
        return (
            <StaticQuery
                query = {graphql`
                    query {
                        a1: file(relativePath: { eq: "amazonlogo.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        a2: file(relativePath: { eq: "cart.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        a3: file(relativePath: { eq: "prime.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        i1: file(relativePath: { eq: "ibmlogo.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        i2: file(relativePath: { eq: "cloud.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        i3: file(relativePath: { eq: "bluemix.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        asi: file(relativePath: { eq: "asilogo.png" }) {
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
        <section class="experience-container">
            <div className="title-box">
                <h1>experience.</h1>
            </div>
            <div className="job-container">
                <div className="amazon box">
                    <div className="amazon-images">
                        <Img className="amazon-img" fluid={data.a1.childImageSharp.fluid} />
                        <Img className="cart" fluid={data.a2.childImageSharp.fluid} />
                        <Img className="prime" fluid={data.a3.childImageSharp.fluid} />
                    </div>
                    <div className="caption">
                        <h1>Amazon</h1>
                        <h2>Software Engineer (Upcoming 2020)</h2>
                        <button className="preview-btn">
                            <div className="circle">
                                <span className="icon arrow"></span>
                            </div>
                            <p className="preview-text">learn more</p>
                        </button>
                    </div>
                </div>
                <div className="ibm box">
                    <div className="ibm-images">
                        <Img className="ibm-img" fluid={data.i1.childImageSharp.fluid} />
                        <Img className="cloud" fluid={data.i2.childImageSharp.fluid} />
                        <Img className="bluemix" fluid={data.i3.childImageSharp.fluid} />
                    </div>
                    <div className="caption">
                        <h1>IBM</h1>
                        <h2>Software Developer Intern (May 2018 - Aug 2019)</h2>
                        <button className="preview-btn">
                            <div className="circle">
                                <span className="icon arrow"></span>
                            </div>
                            <p className="preview-text">learn more</p>
                        </button>
                    </div>
                </div>
                <div className="asi box">
                    <div className="asi-images">
                        <Img className="asi-img" fluid={data.asi.childImageSharp.fluid} />
                    </div>
                    <div className="caption">
                        <h1>ASI</h1>
                        <h2>Production Technician (May 2017 - Aug 2017)</h2>
                        <button className="preview-btn">
                            <div className="circle">
                                <span className="icon arrow"></span>
                            </div>
                            <p className="preview-text">learn more</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )}
    />
    )}
}

export default Experience;