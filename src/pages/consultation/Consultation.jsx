import React from 'react'
import "./styles.scss"
import eyebrows from "../../assets/eybrows_png.png"

const Consultation = () => {
    return (
        <div className='consult'>
            <div className="banner1">
                <img src={eyebrows} alt="" />
                <h1>Institut de beaute indien</h1>
                <h2>Contact Us Now</h2>
            </div>
            <div className="banner2">
                <div className="left">
                    <h2>Contact Us Now</h2>
                    <p>Un nouveau regard sur l'esthétique</p>
                    <div className="details">
                        <h4>Phone - 01 80 06 08 96</h4>
                        <h4>Mail - eyebrowsshree@gmail.com</h4>
                        <h4>Address - 67/69 Passage Brady ,75010 Paris</h4>
                    </div>
                </div>
                <div className="right">
                    <iframe className='frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10497.254126413325!2d2.3547791!3d48.8712993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbff0e54e05%3A0xfa38129fb7604070!2sEYEBROWS%20Institut%20de%20beaut%C3%A9%20Indien!5e0!3m2!1sen!2sin!4v1725697594433!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Consultation
