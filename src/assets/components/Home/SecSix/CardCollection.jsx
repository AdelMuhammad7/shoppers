import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function CardCollection({img , title , description , link}) {

  const nav = useNavigate()

  return (
    <div className='box'>
        <img src= {img} className='w-100 h-100' alt="" />
        <b>{title}</b>
        <p className='m-0'> {description} </p>
        <button onClick={()=>nav(`/${link}`)} className='addbtn mt-5'>Check More Products <FaArrowRight /></button>
    </div>
  )
}

export default CardCollection