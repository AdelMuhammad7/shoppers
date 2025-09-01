import "./SecSeven.css"
import "../SecThree/SecThree.css"
import { FaArrowRight } from "react-icons/fa6";
import { Swiper , SwiperSlide } from "swiper/react";
import Card from "../SecThree/Card";
import { useContext } from "react";
import { shirtContext } from "../../../../Context/ShirtContext";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Navigation } from "swiper/modules"
import { useNavigate } from "react-router-dom";

function SecSeven() {

  const {shirt} = useContext(shirtContext)

  const products = shirt.map((item , index)=> {
    return (
      <SwiperSlide key={index}><Card item={item} /></SwiperSlide>
    )
  })


  const nav = useNavigate()

  return (

    
    <div className="SecSeven SecThree">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-column align-items-start  gap-3">
              <b className="h2">Your favorite clothes - now with 51% less</b>
              <p className="m-0">The Modren Dress is a great piece for the spring and summer. The beautiful open back with structured shoulders will great on all ages and body types.</p>
              <div className="d-flex gap-3">
                <button onClick={()=>nav("/trousers")} className="addbtn">Trousers</button>
                <button onClick={()=>nav("/blazer")} className="addbtn">Blazers</button>
              </div>
              <button onClick={()=>nav("/collections")} className="addbtn mb-2">Check More Products <FaArrowRight /></button>
            </div>
          </div>

          
          <div className="col-lg-6 col-md-12">
            <div className="sweeeper">
            <Swiper
              slidesPerView={2}
              // loop = {true}  
              modules={[Navigation]}
              navigation={{
                prevEl: '.SecSeven .container .row .sweeeper .left',
                nextEl: '.SecSeven .container .row .sweeeper .right'
              }}
              breakpoints={{  // used to how many slides are showen in more responsive
                350: {
                  slidesPerView: 1
                },
                540: {
                  slidesPerView: 2
                }
              }}
            >

                {products}        
        
              </Swiper>

            <div className="left"><FaArrowAltCircleLeft /></div>
            <div className="right"><FaArrowAltCircleRight /></div>  
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SecSeven