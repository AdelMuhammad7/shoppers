import React from 'react'

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Item({img , title , description ,author}) {
  return (
    <div className='item'>
        <div className='w-25' style={{height: "100px"}}>
            <img src={img} className='w-100 h-100' alt="" />
        </div>
        <div className='w-75'>
            <div className='d-flex justify-content-between align-items-center'>
                <b className='h6'> {title} </b>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <div className='stars'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <span>4.5/5.0</span>
                </div>
            </div>
            <p> {description} </p>
            <h6> {author} </h6>
        </div>
    </div>
  )
}

export default Item