import React, { useEffect, useRef, useState } from 'react'
import "./styles.scss"
// import heroImg from "../../assets/hero-img.jpeg"
import heroImg from "../../assets/hero.jpg"
import Img1 from "../../assets/img1.jpg"
import eyebrows from "../../assets/eybrows_png.png"
import Recipe from '../../components/recipe/Recipe'
import Slider from "react-slick"
import { FaArrowUp } from "react-icons/fa";
import { heroData, expertise, about, email, consult, services, } from '../../data/data'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Home = () => {
    const [topButt, setTopButt] = useState(false)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]

    };
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    useEffect(() => {
        const handleScrollVisibility = () => {
            window.scrollY > 300 ? setTopButt(true) : setTopButt(false);
        }
        window.addEventListener('scroll', handleScrollVisibility);
    }, [])


    return (
        <div className='home'>
            {
                topButt ? <div className='top-butt'>
                    <FaArrowUp className='arrow' onClick={handleScroll} />
                </div> : null
            }
            <section className='hero'>
                <div

                    className="left"
                >
                    <p>{heroData.intro}</p>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {heroData.title}
                    </motion.h2>
                    <Link className='button' to={"/consultancy"} onClick={scrollToTop}>
                        {heroData.butt}
                    </Link>
                </div>
                <div className="right">
                    <img src={heroData.img} alt="" />
                </div>
            </section>
            <section className='sec2'>
                <div className="intro">
                    <motion.h3 initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="left">{expertise.head}</motion.h3>
                    <motion.p initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="left">{expertise.desc}</motion.p>
                </div>
                <div className="detail">
                    <div className="left">
                        <motion.img initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            src={Img1} alt="" className="image" />
                    </div>
                    <motion.div
                        className="right"
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>
                            {expertise.expertisetitle}
                        </h3>
                        <p>
                            {expertise.expdesc}
                        </p>
                        <Link className='button' to={"/consultancy"} onClick={scrollToTop}>
                            Lets Talk
                        </Link>
                    </motion.div>
                </div>

            </section>
            <section id='about' className="about">
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>{about.title}</h2>
                    <p>{about.desc}</p>
                    <Link to={"/about"} className='button' onClick={scrollToTop}>Know More About Us</Link>
                </motion.div>
                <div className="about-right">
                    <motion.img
                        src={eyebrows}
                        alt=""
                        className="image"
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </section>
            <section id="consult" className='get-guidance'>
                <motion.div
                    className="guide-box"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{email.title}</h1>
                    <p>{email.desc}</p>
                    <input type="text" className='email-input' placeholder='Enter your email' />
                    <button>Submit</button>
                </motion.div>
            </section>
            <section className="recipes" id='recipes'>
                <h1 className="heading">Services</h1>
                <motion.div
                    className='all-recipe'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Slider {...settings} className='recipe-slider'>
                        {
                            services.map((r) => (
                                <Recipe key={r.id} r={r} />
                            ))
                        }

                    </Slider>
                </motion.div>


            </section>
            <sections className='contact' id="contact">
                <h3>{consult.intro}</h3>
                <div className="customized">
                    <h1 className='c-head'>{consult.head}</h1>
                    <div className="programs">
                        <motion.div
                            className="p1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className='p-name'>{consult.pg1_title}</h1>
                            <p>{consult.desc1}</p>
                        </motion.div>
                        <div
                            className="p1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className='p-name'>{consult.pg2_title}</h1>
                            <p>{consult.desc1}</p>
                        </div>
                    </div>

                </div>
                <button className='learn-button'>Learn More</button>
            </sections>
            <section className="consult">

            </section>
        </div>
    )
}

export default Home
