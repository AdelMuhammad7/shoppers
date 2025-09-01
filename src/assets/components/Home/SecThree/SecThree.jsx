import { useContext } from "react"
import "./SecThree.css"
import { suitContext } from "../../../../Context/SuitContext"
import Card from "./Card"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import ProductSkelton from "../../../../Skelton/ProductSkelton";


function SecThree() {

  const {suit , loaderSkelton} = useContext(suitContext)

  const productsSuit =  suit.map((item , index )=> {
    return (
      
      <SwiperSlide key={index}> <Card item={item} /> </SwiperSlide>  

    )
  } )



  return (
    <div className="SecThree">
      
      <div className="d-flex justify-content-center align-items-center py-5">
        <b className="h1">Dress well with our classic men suits</b>
      </div>

      <div className="mx-5">
        <Swiper
        space-between={20}
        modules={[Navigation]}
        navigation={{
          prevEl: '.SecThree .arrowLeft',
          nextEl: '.SecThree .arrowRight'
        }}
        breakpoints={{  // used to how many slides are showen in more responsive
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
        {loaderSkelton ? <ProductSkelton /> : productsSuit}
        

        </Swiper>
 
      <div className="arrowLeft"><FaArrowAltCircleLeft /></div>
      <div className="arrowRight"><FaArrowAltCircleRight /></div>
      </div>
      

    </div>
  )
}

export default SecThree