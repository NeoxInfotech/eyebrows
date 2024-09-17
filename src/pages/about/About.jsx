import React from 'react'
import "./styles.scss"
import img from "../../assets/img1.jpg"
import img2 from "../../assets/eyebrows_serv4.jpg"
import img3 from "../../assets/eyebrows_serv2.jpg"
import eyebrows from "../../assets/eybrows_png.png"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className="about-us-landing">
                <h1>About Eybrows</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. At autem deleniti  officiis! Omnis similique dignissimos eligendi suscipit sapiente assumenda placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo ullam laboriosam velit id in consequuntur, mollitia optio tempore molestiae!</h4>
                <Link className='view-services' to={"/services"}>View Services</Link>
            </div>
            <div className="about-section">
                <div className="left-column">
                    <img src={img} alt="" className='image' />
                </div>
                <div className="right-column">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus quos, eveniet dignissimos nesciunt nemo modi eum accusamus ab mollitia delectus ducimus ratione vel veniam reprehenderit maiores fuga saepe harum numquam cum id nobis? Ullam sit nesciunt consequuntur quae natus!</p>
                </div>
            </div>
            <div className="about-section">
                <div className="left-column">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus quos, eveniet dignissimos nesciunt nemo modi eum accusamus ab mollitia delectus ducimus ratione vel veniam reprehenderit maiores fuga saepe harum numquam cum id nobis? Ullam sit nesciunt consequuntur quae natus!</p>
                </div>
                <div className="right-column">
                    <img src={img2} alt="" className='image' />
                </div>
            </div>
            <div className="about-section">
                <div className="left-column">
                    <img src={img3} alt="" className='image' />
                </div>
                <div className="right-column">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus quos, eveniet dignissimos nesciunt nemo modi eum accusamus ab mollitia delectus ducimus ratione vel veniam reprehenderit maiores fuga saepe harum numquam cum id nobis? Ullam sit nesciunt consequuntur quae natus!</p>
                </div>
            </div>
        </div>
    )
}

export default About
