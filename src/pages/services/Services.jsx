import React from 'react'
import "./styles.scss"
import { motion } from "framer-motion"
import { heroData } from '../../data/data'
import servbanner from "../../assets/eyebrows_serv_banner.jpg"
import manicure from "../../assets/eyebrows_serv4.jpg"
import facialwax from "../../assets/facialwax.jpg"
import piedsimg from "../../assets/pieds.jpg"
import { manicuredata, pieds } from '../../data/manicure'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='services'>
            <div className="hero-sec">
                <div className="left">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {heroData.title}
                    </motion.h2>
                    <Link className='button' to={"/consultancy"}>
                        {heroData.butt}
                    </Link>
                </div>
                <div className="right">
                    <img src={servbanner} alt="" />
                </div>
            </div>
            <div className="servs">
                <div className="left">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={facialwax} alt="" />
                </div>
                <div className="right">
                    <h2>ÉPILATION CIRE VISAGE</h2>
                    <h4>Epilation des sourcils - <span>8.00€</span> </h4>
                    <h4>Sourcils, lèvres, menton - <span>17.00€</span></h4>
                    <h4>Visage complet - <span>20.00€</span></h4>
                </div>
            </div>
            <div className="servs">
                <div className="left">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={manicure} alt="" />
                </div>
                <div className="right">
                    <h2>BEAUTÉ DES MAINS</h2>
                    {
                        manicuredata.map((n) => (
                            <div key={n.id}>
                                <h4>{n.id}-{n.name}</h4>
                            </div>
                        ))
                    }
                    <button>Afficher les services</button>
                </div>
            </div>
            <div className="servs">
                <div className="left">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={piedsimg} alt="" />
                </div>
                <div className="right">
                    <h2>BEAUTÉ DES PIEDS</h2>
                    {
                        pieds.map((n) => (
                            <div key={n.id}>
                                <h4>{n.id}-{n.name}</h4>
                            </div>
                        ))
                    }
                    <button>Afficher les services</button>
                </div>

            </div>
        </div>
    )
}

export default Services





