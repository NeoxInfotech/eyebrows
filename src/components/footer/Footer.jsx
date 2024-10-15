import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <div className='footer'>
                <h2>Eyebrows</h2>
                <div className="links">
                    <Link className='link' to={"/about"} onClick={scrollToTop}>About</Link>
                    <Link className='link' to={"/consultancy"} onClick={scrollToTop}>Consult</Link>
                    <Link className='link' to={"/services"} onClick={scrollToTop}>Services</Link>
                </div>
                <div className="social-img">
                    <IoLogoWhatsapp className='media' />
                    <FaInstagram className='media' />
                </div>
            </div>
            <div className="below">
                <span>Developed By <a href="https://neoxinfotech.com">NeoxInfotech</a> ©2024 All rights reserved </span>
            </div>
        </>
    )
}

export default Footer