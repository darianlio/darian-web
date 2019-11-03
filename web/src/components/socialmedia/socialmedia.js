import React from 'react'
import "../../styles/social-media/socialmedia.scss"

class SocialMedia extends React.Component {
    state = {
        color: 'white'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({color: 'black'})
        } else {
            this.setState({color: 'white'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div class="social-media" style={{color: this.state.color}}>
                <ul class="social-media-list">
                    <li class="social-list"><a href="https://github.com/darianlio/" target="__blank" rel="noopener noreferrer" aria-label="github"><i class="fab fa-github"></i></a></li>
                    <li class="social-list"><a href="https://www.linkedin.com/in/darianlio/" target="__blank" rel="noopener noreferrer" aria-label="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="social-list"><a href="https://www.instagram.com/notdurian/" target="__blank" rel="noopener noreferrer" aria-label="instagram"><i class="fab fa-instagram"></i></a></li>
                    <li class="social-list"><a href="mailto:darianlio97@gmail.com" rel="nofollow noopener noreferrer" aria-label="email"><i class="fas fa-paper-plane"></i></a></li>
                    <li class="social-list social-list-after"><a href="https://www.google.com/maps/place/Toronto,+ON/@43.6565353,-79.6010302,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843" target="__blank" rel="nofollow noopener noreferrer" aria-label="location"><i className="fas fa-map-marker-alt" /></a></li>
                </ul>
            </div>
        )
    }
}
export default SocialMedia