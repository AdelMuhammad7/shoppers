import React from 'react'
import Lotti from "lottie-react"
import lottieError from "../Lottie Files/errorAnimation.json"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='vh-100 bg-dark d-flex flex-column justify-content-center align-items-center'>
        <Lotti animationData={lottieError} className='w-25'/>

        <Link to={"/"} replace={true} className='text-decoration-none text-light'>What about going to safety ?</Link>
    </div>
  )
}

export default NotFound