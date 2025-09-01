import React, { useContext } from 'react'
import { trouserContext } from '../../../../Context/TrouserContext'
import Card from '../SecThree/Card'
import {Swiper , SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"

function ProductsTrouser() {

  const {trouser} = useContext(trouserContext)
  const productsTrouser = trouser.map((item , index)=> {
    return (
      
      <SwiperSlide key={index}> <Card item={item} /> </SwiperSlide>  

    )
  })

  return (
    <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: '.SecFive .container .left',
      nextEl: '.SecFive .container .right'
    }}
    space-between={50}
    // loop = {true}
    breakpoints={{  
      400: {
        slidesPerView: 1
      },
      540: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }}
    >
   {productsTrouser} 
    </Swiper>
  )
}

export default ProductsTrouser