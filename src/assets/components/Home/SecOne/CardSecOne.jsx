import "./SecOne.css"
import { FaRegStar } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";
import { PiEyeLight } from "react-icons/pi";
import { useState } from "react";

function CardSecOne({title , category , price , total , img1 , img2 , state ,discount  , newItem}) {
    
    const [dis , setDis] = useState(true)

  return (
    <div className="card">
        <div className="card-img">
            <img src= {img1} className="w-100" alt="" />
            <img src= {img2} className="w-100" alt="" />
        </div>
        <div className="card-body">
            <span>{category}</span>
            <div className="stars d-flex justify-content-start align-items-center">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
            <b>{title}</b>
            <div className="color">
                <span>color :</span>
                <select>
                    <option value="Green">Green</option>
                    <option value="Brown">Brown</option>
                </select>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="price d-flex flex-column justify-content-center align-items-start">
                    {/* dicount  */}
                    {discount ? <span>${(+total - (+total * (+discount / 100))).toFixed(0)}.00</span> : <span>${price}.00</span> }
                    {/* total before discount */}
                    {discount ? <span className="text-secondary"><del>${total}.00</del></span> : ""}

                </div>
                <button className="addbtn">Add to Cart <IoIosBasket /></button>
            </div>
        </div>

        {/* state on the top of card */}
        {!setDis === state ? "" :
        <div className="new d-flex justify-content-center align-items-center gap-1">
            <span>{discount}%</span>

            {newItem ? <span>New</span> : "" }
            
        </div>}
        

        <div className="list d-flex flex-column">
            <i><FaHeart /></i>
            <i><LuArrowRightLeft /></i>
            <i><PiEyeLight /></i>
        </div>
    </div>
  )
}

export default CardSecOne