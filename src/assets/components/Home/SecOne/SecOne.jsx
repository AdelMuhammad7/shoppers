import { IoIosBasket } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { FaTruckLoading } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import "./SecOne.css"
import CardSecOne from "./CardSecOne";

import photo1 from "../../../images/Products/pro-1/a04f39be-cbf7-4371-a448-c9132ffbed67-removebg-preview_600x600.webp"
import photo2 from "../../../images/Products/pro-1/b260054f-a8e6-4571-93e6-992e74caf4c0-removebg-preview_600x600.webp"
import photo3 from "../../../images/Products/pro-2/5c71b093-4cb1-4a28-b681-1e51eb64e29c-removebg-preview_600x600.webp"
import photo4 from "../../../images/Products/pro-2/73df4dc5-cbb0-42c3-9024-7ce904941560-removebg-preview_440x466.webp"
import photo5 from "../../../images/Products/pro-3/40b33cd6-4586-4e1f-912b-d092bbc677e4-removebg-preview_600x600.webp"
import photo6 from "../../../images/Products/pro-3/f9528d20-3a46-4a93-8a1a-1ca7502a675b-removebg-preview_440x466.webp"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Autoplay ,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { casualContext } from "../../../../Context/CausalContext";
import Card from "../SecThree/Card"
function SecOne() {

    const navigate = useNavigate()

    const {casual} = useContext(casualContext)
    
    const itemsInSlider = casual.map((el , index)=> {
        return (
            <SwiperSlide>
                <Card />
            </SwiperSlide>
        )
    })

  return (
    <header className="py-5">
        <div className='container py-5'>
        
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div>
                        <span>MODERNWEAR</span>
                        <h1 className="py-0 my-0 w-75">Unique clothes for special occasions</h1>
                        <p className="m-0 py-3 w-75">Welcome to the realm of fashion, a mesmerizing symphony of creativity, individuality, and timeless beauty.</p>
                        <div className="video d-flex justify-content-start align-items-center gap-3">
                            <button onClick={()=> navigate("/collections")}  className="addbtn">Check more products <IoIosBasket /> </button>
                            <div className="video">
                                <i><MdPlayArrow /></i>
                                <span>play video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-3">
                <div className="col-lg-10">
                    <div className="items ">
                        <div className="item">
                            <i><FiGift /></i>
                            <div>
                                <b>Finished products</b>
                                <p>products and gift wrapping</p>
                            </div>
                        </div>
                        <div className="item">
                            <i><FaTruckLoading /></i>
                            <div>
                                <b>Large and frequent</b>
                                <p>promotions with numerous discounts</p>
                            </div>
                        </div>
                        <div className="item">
                            <i><MdSettings /></i>
                            <div>
                                <b>Free shipping</b>
                                <p>on any order from $ 150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <div className="swipppper">
                <Swiper 
                    modules={[Pagination , Navigation]}
                    direction={'vertical'}
                    slidesPerView={1}
                    navigation={{
                        prevEl: 'header .container .direction .toTop',
                        nextEl: 'header .container .direction .toBot'
                    }}
                   
                    
                >
                    <SwiperSlide>
                        <CardSecOne newItem={true}  state={true} discount={"15"} title={"Regular Fit Quilted Ja..."} category={"Burberry"} price={85} total={100} img1={photo1} img2={photo2}/> 
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardSecOne newItem={false}  state={true} discount={"34"} title={"Neck Cashmere Sweat..."} category={"Levi's"} price={53} total={80} img1={photo3} img2={photo4} /> 
                    </SwiperSlide>

                    <SwiperSlide>
                        <CardSecOne newItem={false}  state={false} discount={false} title={"Merino Crew neck Sw..."} category={"Gucci"} price={32} total={0} img1={photo5} img2={photo6}/> 
                    </SwiperSlide>
                </Swiper>

                <div className="direction">
                    <i className="toTop"><FaLongArrowAltUp /></i>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <i className="toBot"><FaLongArrowAltDown /></i>
                </div>
            </div> */}

        </div>
    </header>
  )
}

export default SecOne