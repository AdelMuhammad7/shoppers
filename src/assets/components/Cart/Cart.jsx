import "./Cart.css"
import { CiCircleChevLeft } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { useContext, useState } from "react";
import { cartContext } from "../../../Context/CartContext";

function Cart() {

  const navigate = useNavigate()

  const {cart , deleteProduct , changeQuantity , totalPrice} = useContext(cartContext)


  const tableProducts = cart.map((el , index)=> {
    return(
      <tr key={index}>
        <td className="img" ><img src= {el.images[1]} className="w-100 h-100" alt="" /></td>

        <td >{el.title} </td>

        {el.discount ? <td> ${(+el.price - (+el.price * (+el.discount / 100) )).toFixed(0)}.00 </td> : <td>${el.price}.00</td> }

        <td>
          <FaMinus onClick={()=> changeQuantity("minus" , el)} className="count p-0"/> 
          <input  type="text" value ={el.amount} readOnly /> 
          <FaPlus onClick={()=> changeQuantity("plus" , el)} className="count p-0"/></td>

        {el.discount ? <td style={{whiteSpace: "nowrap"}}> ${((+el.price - (+el.price * (+el.discount / 100) )) * el.amount).toFixed(0)}.00 
          <i onClick={()=> deleteProduct(el)} className="text-danger"><FaTrash /></i>  </td> : <td style={{whiteSpace: "nowrap"}}>${el.price * el.amount}.00 <i onClick={()=> deleteProduct(el)} className="text-danger"><FaTrash /></i></td> }
      </tr>
    )
  })

  

  return (
    <div className="Cart py-5">
      <div className="container">
        <div onClick={()=> navigate("/")} style={{cursor: "pointer"}} className="d-flex align-items-center gap-1">
          <CiCircleChevLeft className="fs-4" />
          <span className="">Continue Shopping</span>
        </div>
        <b className="fs-1 d-block my-4">Your Cart</b>

        <div className="row ">
          <div className="col-lg-9">
            <div>
              
              {cart.length ? 
              <table className="text-center">
                <thead>
                  <tr>
                    <th>product image</th>
                    <th>product name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>

                  {tableProducts}
                  
                </tbody>
              </table>  : <div className="mx-auto text-danger fs-2 text-center">Your Cart is Empty</div>}

            </div>
          </div>
          <div className="col-lg-3">
            <b>Order special instructions</b>
            <textarea placeholder="Order special instructions"></textarea>
            <div>
              <p>SubTotal <span>$ {totalPrice}.00</span></p>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={()=> navigate("/CheckOut")} className="addbtn">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart