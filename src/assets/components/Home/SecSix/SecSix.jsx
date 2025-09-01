import CardCollection from "./CardCollection"
import "./SecSix.css"
import img1 from "../../../images/Collection/card-img-1.webp"
import img2 from "../../../images/Collection/card-img-2.webp"
import img3 from "../../../images/Collection/card-img-3.avif"
import img4 from "../../../images/Collection/card-img-4.webp"
import { Swiper , SwiperSlide } from "swiper/react"
import CardCollection2 from "./CardCollection2"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Navigation } from "swiper/modules"

function SecSix() {

  const description = [
    "Trousers, also known as pants, slacks, or trousers in various regions, are a type of outer garment that covers the lower half of the body, extending from the waist to the..." , 
    "A blazer is a type of lightweight, single-breasted jacket typically worn as part of a formal or semi-formal outfit. Blazers often have a more casual and less structured style compared to suit jackets." , 
    "Casual wear refers to clothing that is comfortable, relaxed, and suitable for everyday, non-formal occasions. It is the type of attire that people commonly wear for leisure activities, social gatherings, and other informal events. " ,
    "A shirt is a piece of clothing that typically covers the upper part of the body, extending from the neck to the waistline or hips. It is a fundamental garment worn by people of all ages and genders across cultures. "
  ]

  return (
    <div className="SecSix">
      <div className="container">
        <div className="row p-3 g-5">
          <div className="col-lg-6 col-sm-12">
            <div>
              <CardCollection img={img1} title={"Trousers"} description={description[0]} link={"trousers"}/>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="swwp">
              <Swiper

              modules={[Navigation]}
              navigation={{
                prevEl: '.SecSix .container .swwp .left',
                nextEl: '.SecSix .container .swwp .right'
              }}
              slidesPerView={2}
              spaceBetween={10}
              loop = {true}
              breakpoints={{  
                350: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 1
                },
                1024: {
                  slidesPerView: 2
                }
              }}
              >

                <SwiperSlide>
                  <CardCollection2 img={img2} title={"Blazer"} description={description[1]} link={"blazer"}/>
                </SwiperSlide>

                <SwiperSlide>
                  <CardCollection2 img={img3} title={"Causul Wear"} description={description[2]} link={"CasualWear"}/>
                </SwiperSlide>

                <SwiperSlide>
                  <CardCollection2 img={img4} title={"Shirt"} description={description[3]} link={"T-Shirt"}/>  
                </SwiperSlide>

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

export default SecSix