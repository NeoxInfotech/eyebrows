import React, { useRef, useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"
// import { Link as Link } from "react-scroll"
import { navData } from '../../data/data';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const scrollToTopMenu = () => {
        setMenuOpen(false)
        window.scrollTo(0, 0)
    }
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={navData.logo} alt="" />
            </div>
            <div className="menu">
                <SlMenu className='menu-icon' onClick={() => setMenuOpen(true)} />
                {
                    menuOpen ? <div className="menu-links">
                        <RxCross1 className='cross' onClick={() => setMenuOpen(false)} />
                        <div className="links-all">

                            <Link
                                className='link'
                                to={"/"}
                                onClick={scrollToTopMenu}
                            > Home
                            </Link>
                            <Link
                                className='link'
                                to="/about"
                                onClick={scrollToTopMenu}
                            > About</Link>
                            <Link className='link'
                                to={"/services"}
                                onClick={scrollToTopMenu}
                            > Services</Link>
                            <Link
                                className='link'
                                to={"/consultancy"}
                                onClick={scrollToTopMenu}
                            > Consultation</Link>
                        </div>
                    </div> : null
                }

            </div>
            <div className="links">
                <Link to={"/"} onClick={scrollToTop} className='link'> Home</Link>
                <Link to='/about' onClick={scrollToTop} className='link'> About</Link>
                <Link to='/services' onClick={scrollToTop} className='link'> Services</Link>
                <Link to='/consultancy' onClick={scrollToTop} className='link'> Consultation</Link>
            </div>
        </div>
    )
}

export default Navbar
