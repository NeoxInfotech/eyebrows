import React from 'react'
import "./styles.scss"
import logo from "../../assets/eybrows_png.png"
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={logo} alt="" />
            <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4E4641"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader
