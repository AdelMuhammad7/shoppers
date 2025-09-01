import React from 'react'
import { FaArrowRight } from "react-icons/fa6";



function Item({img , title , description}) {
  return (
    <div className='item'>
        <div className="card ">
            <div className='card-img'>
                <img src={img} className='w-100' alt="" />
            </div>
            <div className="card-body">
                <b className="card-title"> {(title.split(" ").slice(0 , 3).join(" ")) + "..."} </b>
                <div className="card-text"> {description} </div>
            </div>
            <div className='d-flex justify-content-between align-items-center p-2'>
                <button className='addbtn'>Read More <FaArrowRight /></button>
                <span>Sep 8, 1998</span>
            </div>
        </div>

        <p>Article</p>
    </div>
  )
}

export default Item