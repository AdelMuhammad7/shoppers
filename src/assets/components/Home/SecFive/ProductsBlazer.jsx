import React, { useContext } from 'react'
import { blazerContext } from '../../../../Context/BlazerContext'
import Card from '../SecThree/Card'
import {Swiper , SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"

function ProductsBlazer() {

  const {blazer} = useContext(blazerContext)
  const productsBlazer = blazer?.map((item , index)=> {
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
   {productsBlazer} 
    </Swiper>
  )
}

export default ProductsBlazer