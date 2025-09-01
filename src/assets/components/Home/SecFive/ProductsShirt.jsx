import React, { useContext } from 'react'
import { shirtContext } from '../../../../Context/ShirtContext'
import Card from '../SecThree/Card'
import {Swiper , SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules"

function ProductsShirt() {
  const {shirt} = useContext(shirtContext)
  const productsShirt = shirt.map((item , index)=> {
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
      {productsShirt} 
    </Swiper>

  )
}

export default ProductsShirt