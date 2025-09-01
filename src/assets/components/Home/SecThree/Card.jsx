import "../SecOne/SecOne.css"
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";
import { PiEyeLight } from "react-icons/pi";
import { IoIosBasket } from "react-icons/io";
import {  useContext, useRef } from "react";

import { cartContext } from "../../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../../Context/ProductContext";
import { wishListContext } from "../../../../Context/WishCartContext";

function Card({item}) {

    const navigate = useNavigate()
    const x = useRef (null)
    const z = useRef (null)

    const {addToCart} = useContext(cartContext)
    const {addToWishList} = useContext(wishListContext)
    const {dola} = useContext(productContext)

  

    const changeImg = function(e) {
        item.color.map((el)=> {
            if(e.target.value == el.color){
                const target = el.image
                const mainImg = z.current
                mainImg.setAttribute("src" , target )
            }
        })
    }
    
  return (
    <div className="card mx-auto">
        <div onClick={()=> {
            navigate(`/ProductDescription/${item.id}`)
            dola(item)
        } } className="card-img">
            <img ref={z} src= { item?.images[0] } className="w-100" alt="" />
            {/* <img ref={z} src= {item?.color[0].image || item?.images[0] } className="w-100" alt="" /> */}
            <img src= {item?.images[1]} className="w-100" alt="" />
        </div>
        <div className="card-body">
            <span>{item?.brand}</span>
            <div className="stars d-flex justify-content-start align-items-center">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>

            <b style={{fontSize : "14px" , whiteSpace : "nowrap"}}>{item.title?.split(" ").slice(0 , 3).join(" ")}</b>

{/* Color or Size */}

            <div className="color">
                <span> {item.color ? "Color" : "Size"} :</span>
                <select ref={x} onChange={changeImg}>
                    
                    {item.color ? item.color?.map((el , index)=> {
                        return (
                            <option key={index} value= {el.color}> {el.color} </option>
                        )
                    }) :  
                    item.size?.map((el , index)=> {
                        return (
                            <option key={index} value= {el.size}> {el.size} </option>
                        )
                    })}
                    
                </select>
            </div>


            <div className="d-flex justify-content-between align-items-center">
                <div className="price d-flex flex-column justify-content-center align-items-start">

                    {item.discount ? <span> ${(+item.price - (+item.price * (+item.discount / 100) )).toFixed(0)}.00 </span> : <span>${item.price}.00</span> }

                    {item.discount ? <span className="text-secondary"><del>${item.price}.00</del></span> : <span className="text-light">-</span>}

                </div>
                    
                    {item.available ? <button className="addbtn" onClick={()=> addToCart(item)}>Add to Cart <IoIosBasket /></button> : <button disabled className="addbtn bg-danger" onClick={()=> addToCart(item)} style={{cursor: "not-allowed"}}>Not Available</button>}

                {/* <button className="addbtn" onClick={()=> addToCart(item)}>Add to Cart <IoIosBasket /></button> */}

            </div>
        </div>

        {/* state on the top of card */}

        <div className="new d-flex justify-content-center align-items-center gap-1">

            {!item.discount ? "" : <span>{item.discount}%</span> }

            {item.newItem ? <span>New</span> : "" }
            
        </div>

        <div className="list d-flex flex-column">
            <i onClick={()=> addToWishList(item)}><FaHeart /></i>
            <i><LuArrowRightLeft /></i>
            <i><PiEyeLight /></i>
        </div>
        

    </div>
  )
}

export default Card