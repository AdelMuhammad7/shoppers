import React from 'react'

import cardAnim from "../Lottie Files/productAnimation.json"
import Lottie from 'lottie-react'

function ProductSkelton() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <Lottie animationData={cardAnim} className='w-25'/>
    </div>
  )
}

export default ProductSkelton