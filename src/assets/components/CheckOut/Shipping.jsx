import React, { useContext, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { cartContext } from '../../../Context/CartContext'

function Shipping() {

    const [priceAfterDiscount , setPriceAfterDiscount] = useState(0)

    const {totalItems , totalPrice , cart } = useContext(cartContext)

    const items = cart.map((el , index)=> {
        return (
            <div key={index} className="d-flex justify-content-between align-items-center gap-2">
                <div className='p-1 rounded' style={{width : "80px" , height: "80px", border: "1px solid black" , position: "relative"}}>

                    <img src= {el?.images[0]} className='w-100 h-100' alt="" />

                    <div className="p-1 rounded-circle bg-dark text-light" style={{position: "absolute" , top: "-8px" , right: "-10px"}}> {el?.amount ? el?.amount : "1"} </div>

                </div>

                <p className='m-0' style={{whiteSpace: "nowrap"}}> {el?.title.split(" ").splice(0 , 3).join(" ")} </p>

                <span className='fw-bold'>${el.price * el.amount}.00</span>
            </div>
        ) 
    })

    const promo = useRef(null)
    const dis = useRef(null)
    const x = useRef(null)

    function addDiscount () {
        promo.current.classList.toggle("active")
    }

    function applyDiscount () {
        const code = x.current.value
        if(code == "Adel") {
            if (totalPrice > 200){

                setPriceAfterDiscount  (totalPrice - 150)
                Swal.fire({
                    title: "Congratulation",
                    text: "You get $150.00 discount.",
                    icon: "success"
                });

            }else {
                Swal.fire({
                    title: "warning",
                    text: "Your subtotal is less than $200.00 .",
                    icon: "warning"
                });
            }
        }else if(code == "Dola") {
            if (totalPrice > 200){

                setPriceAfterDiscount  (totalPrice - 100)
                Swal.fire({
                    title: "Congratulation",
                    text: "You get $100.00 discount.",
                    icon: "success"
                });

            }else {
                Swal.fire({
                    title: "warning",
                    text: "Your subtotal is less than $200.00 .",
                    icon: "warning"
                });
            }
        }else {
            Swal.fire({
                title: "Sorry",
                text: "Your code is incorrect.",
                icon: "error"
            });
            // setPriceAfterDiscount  (totalPrice)
        }
        promo.current.classList.remove("active")
        x.current.value = ""


    }

  return (
    <div className='Shipping'>

        <div className="cart px-5 py-2 d-flex flex-column gap-3">
            {items}
        </div>

        <div className='px-5 py-2 d-flex justify-content-between'>
            <p className='m-0  h5'>Subtotal: <span className='h6'> {totalItems} items </span></p>
            <p> ${totalPrice}.00 </p>
        </div>


        <div className='d-flex flex-column align-items-center'>
            <p onClick={addDiscount} ref={dis} className='text-center addbtn w-50' style={{cursor: "pointer" , fontSize: "16px"}}>Add coupon </p>

            <div ref={promo} className='promo w-100 gap-2 '>

                <input ref={x} type="text" className='w-75 p-1 px-2 rounded' placeholder='Write your promocode' style={{border: "1px solid black" }}/> 

                <button onClick={applyDiscount} className='w-25 apply' >Apply</button>

            </div>

            {priceAfterDiscount ? 
            
            <div className='px-5 py-2 d-flex justify-content-between'>
                <p className='m-0  h5'>Subtotal After Discount: ${ priceAfterDiscount ? priceAfterDiscount : ""}.00 </p>
            </div> : ""
                
            }


        </div>



    </div>
  )
}

export default Shipping