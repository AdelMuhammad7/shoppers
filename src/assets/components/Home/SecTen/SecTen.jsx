import Item from "./Item"
import "./SecTen.css"

import img1 from "../../../images/Articles/image_1.webp"
import img2 from "../../../images/Articles/image_2.webp"
import img3 from "../../../images/Articles/image_3.webp"
import img4 from "../../../images/Articles/image_4.webp"
import img5 from "../../../images/Articles/image_5.webp"

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"

function SecTen() {

  const articles = {

    title : [
      "Fabulous Fashions capes",
      "Favorite Style Pick Outfit of the day",
      "New Fashion Gone Monica Geller",
      "Be Bold Classic Modern Fashion",
      "Glamour Guidepost"
    ] ,

    description : [
      "A well-curated wardrobe is the foundation of effortless style. Explore the must-have wardrobe essentials that can be mixed and matched to create countless stylish outfits for any occasion.",

      "Embrace your personal style and express yourself through fashion with our blog's guide to finding your unique fashion identity and building a versatile wardrobe.",

      "Style should never be compromised when embracing sustainability. In this section, we offer practical tips and creative ideas for incorporating eco-friendly fashion into your personal style. From accessorizing with ethically sourced jewelry to mastering the art of thrifted outfit styling, we help you redefine your fashion choices while remaining true to your unique sense of style.",

      "Fashion has become more than just a means of self-expression. It has also become a platform for change, where we can make conscious decisions that positively impact the environment and the lives of others. Join us on a transformative journey as we explore the world of sustainable fashion, unveiling the beauty of ethical choices and showcasing how style and sustainability can effortlessly intertwine.",

      "Casual wear refers to clothing that is comfortable, relaxed, and suitable for everyday, non-formal occasions. It is the type of attire that people commonly wear for leisure activities, social gatherings, and other informal events."
    ]
  }
    


  return (
    <div className="SecTen">
      <div className="container py-5">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="d-flex flex-column text-center">
              <b className="h2">The Newest Trend Bringing Back</b>
              <span>No matter what your style, there are endless possibilities when it comes to styling a custom banner.</span>
            </div>
          </div>
        </div>

        <div className="row py-5 sweeeper">

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              prevEl: '.SecTen .container .row:nth-of-type(2) .left',
              nextEl: '.SecTen .container .row:nth-of-type(2) .right'
            }}
            breakpoints={{  // used to how many slides are showen in more responsive
              300: {
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

            <SwiperSlide>
              <Item img={img1} title={articles.title[0]} description={articles.description[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <Item img={img2} title={articles.title[1]} description={articles.description[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <Item img={img3} title={articles.title[2]} description={articles.description[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <Item img={img4} title={articles.title[3]} description={articles.description[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <Item img={img5} title={articles.title[4]} description={articles.description[4]} />
            </SwiperSlide>

          </Swiper>
            
          <div className="left"><FaArrowAltCircleLeft /></div>
          <div className="right"><FaArrowAltCircleRight /></div>
        </div>
      </div>
    </div>
  )
}

export default SecTen