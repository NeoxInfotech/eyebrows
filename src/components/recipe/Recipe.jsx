import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const Recipe = ({ r }) => {
    return (
        <div className='recipe'>
            <div className="img">
                <img src={r.img} alt="" />
            </div>
            <span>{r.title}</span>
            <Link to={"/services"} className='button'>Go To Services</Link>
        </div>
    )
}

export default Recipe
