import Item from "./Item";
import "./SecEleven.css"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"

import img1 from "../../../images/Testimonial/testi1.avif"
import img2 from "../../../images/Testimonial/testi1.avif"
import img3 from "../../../images/Testimonial/testi2.avif"

function SecEleven() {

  const testimonial = {
    title : [
      "Beautiful",
      "Excellent",
      "Great"
    ],
    description : [
      "I've been a loyal customer of this brand for years, and their clothing themes are the reason why. From classic and timeless styles to modern and edgy looks, they cater to a wide range of preferences." ,

      "The quality of their garments is top-notch, and I always receive compliments when I wear their pieces. I can confidently say that their clothing themes have elevated my wardrobe and made dressing up a delightful experience" ,

      "The quality of their garments is top-notch, and I always receive compliments when I wear their pieces. I can confidently say that their clothing themes have elevated my wardrobe and made dressing up a delightful experience"
    ],
    author : [
      "Isabel Hanson, SEO Manger",
      "Ewan Sharpe, Developer",
      "John Doe, Client"
    ]
  }


  return (
    <div className="SecEleven">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 col-sm-12">
            <div className="d-flex flex-column">
              <b className="h1">Testimonials</b>
              <span>As a fashion enthusiast, I can't get enough of the amazing clothing themes this brand brings to the table. Their designs are always on-trend and reflect the latest fashion movements.</span>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="butn text-end mt-3">
              <button className="addbtn">Read More <FaArrowRight /></button>
            </div>
          </div>

        </div>

        <div className="row py-5">

          <Swiper
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: '.SecEleven .container .row:nth-of-type(2) .left',
            nextEl: '.SecEleven .container .row:nth-of-type(2) .right'
          }}
          breakpoints={{  // used to how many slides are showen in more responsive
            680: {
              slidesPerView: 1
            },
            780: {
              slidesPerView: 2
            }
          }}
          >

            <SwiperSlide>
              <Item img={img1} title={testimonial.title[0]} description={testimonial.description[0]} author={testimonial.author[0]}/>
            </SwiperSlide>

            <SwiperSlide>
              <Item img={img3} title={testimonial.title[1]} description={testimonial.description[1]} author={testimonial.author[1]}/>
            </SwiperSlide>

            <SwiperSlide>
              <Item img={img2} title={testimonial.title[2]} description={testimonial.description[2]} author={testimonial.author[2]}/>
            </SwiperSlide>

          </Swiper>

          <div className="left"><FaArrowAltCircleLeft /></div>
          <div className="right"><FaArrowAltCircleRight /></div>

        </div>
      </div>
    </div>
  )
}

export default SecEleven