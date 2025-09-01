import React, { useRef } from 'react'
import { FaRegStar } from "react-icons/fa";

function CustomerReview() {

    const x = useRef(null)


    function toggelForm() {
        x.current.classList.toggle("active")
    }

    function closeform() {
        x.current.classList.remove("active")
    }




  return (
    <div id='revvv' className='CustomerReview container mt-5'>

        <p className='text-center h2 mb-3'>Customer Reviews</p>

        <div className='rev  pb-5'>
            <div className=" star d-flex justify-content-center align-items-center gap-1">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={toggelForm} className='addbtn fs-6 px-5'>Write a review</button>
            </div>
        </div>

        <div ref={x} className="form">
            <p className='text-center m-0 fs-5'>Write a review</p>

            <div>
                <label htmlFor="title">review title</label>
                <input id='title' type="text" placeholder='Give your review title'/>
            </div>

            <div>
                <label htmlFor="review">review </label>
                <textarea id="review" placeholder='Write your comment here'></textarea>
            </div>

            <div>
                <label htmlFor="name">name </label>
                <input id='name' type="text" placeholder='enter your name'/>
            </div>

            <div>
                <label htmlFor="email">email </label>
                <input id='email' type="text" placeholder='enter your email'/>
            </div>

            <div className='d-flex flex-row justify-content-start fs-5'>
                <button onClick={closeform} className='addbtn  fs-6'>cancel review</button>
                <button className='addbtn fs-6'>submit review</button>
            </div>
        </div>



        <div className=' fs-1' style={{opacity: "0"}}>.</div>
    </div>
  )
}

export default CustomerReview