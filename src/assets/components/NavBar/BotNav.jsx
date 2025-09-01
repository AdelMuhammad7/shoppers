import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaTruckMoving } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import {Link, useNavigate} from "react-router-dom"

import img1 from "../../images/navbar/product-img-1.webp"
import img2 from "../../images/navbar/jacket-blank-mockup-design_1.webp"
import img3 from "../../images/navbar/fashionable-man-winter-knitted-clothes_1.webp"
import img4 from "../../images/navbar/mockup-dark-blue-white-longsleeve-buttonup-shirt-front-back-view_1.webp"
import img5 from "../../images/navbar/stylish-female-spring-autumn-shoes-various-colors-beauty-fashion-concept-flat-lay-top-view_1.webp"
import { useContext, useEffect, useRef } from "react";
import { cartContext } from "../../../Context/CartContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function BotNav() {

  const navigate = useNavigate()

  const x =useRef(null) 
  const y =useRef(null) 
  const z =useRef(null) 
  const h =useRef(null) 
  const step =useRef(null) 

 

  const {totalItems , totalPrice , cart , deleteProduct , changeQuantity} = useContext(cartContext)

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> truck

  // useEffect(()=> {
  //   if(totalItems && totalItems < 40) {
  //     step.current.display = "block"
  //     step.current.style.width = (5 * totalItems )+ "px"
  //   }else if (totalItems >= 40) {
  //     step.current.display = "block"
  //     step.current.style.width = "200px"
  //   }else {
  //     step.current.style.display = "none"
  //   }
  // } , [cart])

  useEffect(() => {
    const count = totalItems || 0;
  
    if (step.current) {
      if (count > 0 && count < 40) {
        step.current.style.display = "block";
        step.current.style.width = 5 * count + "px";
      } else if (count >= 40) {
        step.current.style.display = "block";
        step.current.style.width = "200px";
      } else {
        step.current.style.display = "none";
      }
    }
  }, [totalItems]);


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> show products in small cart
  const productsInCart = cart.map((el , index)=> {
    return (
            <div className="cart" key={index}>
              <div>
                <img src= {el?.images[0]} className="w-100" alt="" />
              </div>
              <div>
                <b>{el.title.split(" ").slice(0, 3).join(" ")}</b>
                <p>Color: <span>green</span> </p>
                <div className="">
                  <FaMinus style={{cursor : "pointer"}} onClick={()=> changeQuantity("minus" , el)}/>
                  <input className="w-25 text-center mx-auto" type="text" value={el.amount} readOnly/>
                  <FaPlus style={{cursor : "pointer"}} onClick={()=> changeQuantity("plus" , el)}/>
                </div>
                <span className="priceItem">${el.price * el.amount}.00</span>
              </div>
              <i onClick={()=> deleteProduct(el)}><MdDelete /></i>
            </div>
    )
  } )


  function showCart(){
    x.current.style.display = "block"
  }

  function closeCart() {
    x.current.style.display = "none"
  }

  function showList(){
    y.current.style.display = "block"
  }

  function closeList() {
    y.current.style.display = "none"
  }

  function showMenu(state){
    if(state === "a"){
      
      h.current.classList.remove("dola")
      z.current.classList.toggle("dola")
    }else {
      z.current.classList.remove("dola")
      h.current.classList.toggle("dola")
    }
  }



  return (
    <div className="bot d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-3">
          
          <b onClick={()=> navigate("")} className="fs-5">Shoppers</b>

          <ul>
            <li className="py-4">
              <a href="#">All Categories <IoIosArrowDown className="icon" /></a>

              <div className="dropdown">             
                <div>
                    <strong>Product 1</strong>
                    <Link to={"ProductDescription/1"} >Check Stretch Button-Down Shirt</Link>
                    <Link to={"ProductDescription/3"}>Fit Flannel Button-Down Shirt</Link>
                    <Link to={"ProductDescription/2"}>Fit Plaid Flannel Button-Up Shirt</Link>
                    <Link to={"ProductDescription/4"}>Solid Dress Shirt</Link>
                    <Link to={"ProductDescription/5"}>Trim Fit Non-Iron Dress Shirt</Link>
                </div>

                <div>
                    <strong>Collection</strong>
                    <Link to={"blazer"}>Blazers</Link>
                    <Link to={"CasualWear"}>Casual Wear</Link>
                    <Link to={"T-Shirt"}>Shirt</Link>
                    <Link to={"suit"}>Suit</Link>
                    <Link to={"trousers"}>Trousers</Link>
                </div>

                <div>
                    <strong>Product 2</strong>
                    <Link to={"ProductDescription/2"}>Fit Stretch Dress</Link>
                    <Link to={"ProductDescription/12"}>Grain Poured Wool Jacket</Link>
                    <Link to={"ProductDescription/7"}>Tech Smart Wool Blend Trousers</Link>
                    <Link to={"ProductDescription/5"}>Wool & Linen Easy Jacket</Link>
                    <Link to={"ProductDescription/3"}>Smart Trim Fit Trousers</Link>
                </div>

                <div>
                    <img src={img1} className="w-100" alt="" />
                </div>

              </div>

            </li>
            <li className="py-4">
              <a href="#"> Shop <IoIosArrowDown className="icon" /></a>

              <div className="dropdown gap-3">
                <div onClick={()=> navigate("/CasualWear") }>
                  <img src= {img3} className="w-100" alt="" />
                  <span className="text-center">Casul Wear</span>
                </div>
                
                <div onClick={()=> navigate("/suit") }>
                  <img src= {img2} className="w-100" alt="" />
                  <span className="text-center">suits</span>
                </div>

                <div onClick={()=> navigate("/trousers") }>
                  <img src= {img5} className="w-100" alt="" />
                  <span className="text-center">Trousers</span>
                </div>

                <div onClick={()=> navigate("/T-Shirt") }>
                  <img src= {img4} className="w-100" alt="" />
                  <span className="text-center">T-Shirt</span>
                </div>

              </div>
            </li>
            
            <li className="py-4">
              <a href="#">Pages <IoIosArrowDown className="icon" /></a>
              <div className="dropdown2">
                <div>
                  <span onClick={()=> navigate("/cart")}>Cart</span>
                  <span onClick={()=> navigate("/WishList")}>WishList</span>
                  <span onClick={()=> navigate("/CheckOut")}>Contact</span>
                  <span onClick={()=> navigate("/collections")}>Collections</span>
                  {/* <span>Article Page</span>
                  <span>Categoriy</span> */}
                </div>
              </div>
            </li>
            <li className="py-4">
              <a href="#">Products <IoIosArrowDown className="icon" /></a>

              <div className="dropdown2">
                <div>
                  <span>Check Stretch Button-Down Shirt</span>
                  <span>Fit Flannel Button-Down Shirt</span>
                  <span>Fit Plaid Flannel Button-Up Shirt</span>
                  <span>Solid Dress Shirt</span>
                  <span>Trim Fit Non-Iron Dress Shirt</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div  className="d-flex justify-content-center align-items-center gap-2">
          <i><FaRegUser /></i>
          <i><CiGlobe /></i>
          <i onClick={showCart}><IoCartOutline /> <span>${totalPrice}.00</span></i>
        </div>

        <div className="barIcon">
          <i onClick={showCart}><IoCartOutline /></i>
          <i onClick={showList}><FaBars /></i>
        </div>

        <div ref={y} className="listBar">
          
          <span>
            <div onClick={closeList} className="close"><IoIosClose /></div>
            <select>
              <option value="">USD</option>
              <option value="">AUD</option>
              <option value="">CAD</option>
              <option value="">INR</option>
            </select>
          </span>

          <ul>
            <li onClick={()=> showMenu("a")}  style={{cursor : "pointer"}}>
              <Link className="w-100 d-flex justify-content-between align-items-center">Shop All <FaChevronDown /></Link>

            <div className="dropdown3" ref={z}>
              
                <Link to={"blazer"}>Blazers</Link>
                <Link to={"CasualWear"}>Casual Wear</Link>
                <Link to={"T-Shirt"}>Shirt</Link>
                <Link to={"suit"}>Suit</Link>
                <Link to={"trousers"}>Trousers</Link>
              
            </div>

            </li>
            <li onClick={()=> showMenu("b")} style={{cursor : "pointer"}}>
              <Link className="w-100 d-flex justify-content-between align-items-center">Blog <FaChevronDown /></Link>
              
            <div className="dropdown3" ref={h}>
              
                <Link to={"/collections"}>Collections</Link>
                <Link to={"/CheckOut"}>Contact</Link>
              
            </div>

            </li>
            <li>
              <Link to={"/WishList"}>WishList</Link>
            </li>
            <li>
              <Link to={"/"}>Shooper</Link>
            </li>
          </ul>

          
        </div>


      <div ref={x} className="myCarttttt">

        <div className="myCart">
          <div className="title">
            <b>My Cart</b>
            <p> <span> {totalItems} </span> Items</p>
          </div>

          <div className="body">
            <div className="top">
              <div className="steps">
                <span ref={step}></span>
              </div>
              <i><FaTruckMoving /></i>
            </div>

            {cart.length? productsInCart : <div className="mx-auto text-danger fs-4">Your Cart is Empty</div>}

          </div>

          <div className="bot">
            <div className="total">
              <p>Total Items <span> {totalItems} </span></p>
              <p>SubTotal <span>${totalPrice}.00 </span></p>
            </div>
            
            <div className="view">
              <p onClick={()=> {
                navigate("/cart")
                closeCart()
              }} style={{cursor: "pointer"}}>View Cart</p>

              <p onClick={()=> {
                navigate("/CheckOut")
                closeCart()
              }} style={{cursor: "pointer"}}>Proceed to checkout</p>

            </div>
          </div>

          <div onClick={closeCart} className="close"><IoIosClose /></div>
        </div>

      </div>




      </div>
  )
}

export default BotNav