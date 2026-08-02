import React, { useContext, useRef } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import img from "../../images/Blazer/five/170711bc-2bd2-4304-8712-840782e9dcf2-removebg-preview_440x466.webp";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../../Context/CartContext";
import { wishListContext } from "../../../Context/WishCartContext";

function ProDesc({ product }) {
  const { addToCart } = useContext(cartContext);
  const { addToWishList } = useContext(wishListContext);

  const y = useRef(null);
  const nav = useNavigate();

  function scrollToReview() {
    const element = y.current.parentElement.parentElement.parentElement
      .querySelector("#revvv")
      .querySelector(".rev");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div
        ref={y}
        className="d-flex justify-content-between align-items-center mb-3">
        <div
          onClick={() => nav("/collections")}
          className="d-flex gap-2 justify-content-center align-items-center"
          style={{ cursor: "pointer" }}>
          <IoArrowBackCircleOutline className="fs-4" />
          <span className="fs-6 ">Back To Category</span>
        </div>

        <FaRegHeart
          onClick={() => addToWishList(product)}
          className="fs-4"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="d-flex align-items-center justify-content-start gap-5">
        <div className="d-flex justify-content-center align-items-center">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>

        <p
          onClick={() => scrollToReview()}
          className="m-0 d-flex align-items-center justify-content-center gap-2"
          style={{ cursor: "pointer" }}>
          <span style={{ fontSize: "16px" }}>
            <FaPenClip />
          </span>
          Write a Review
        </p>
      </div>

      <p className="mt-4 h1"> {product.title} </p>

      <p className="h5"> {product.brand} </p>

      <p> {product.description} </p>

      <p>
        {" "}
        Casual wear is less dressy than formal or business attire. While it
        still looks put-together and presentable, it doesn't adhere to strict
        formal dress codes. Casual wear allows individuals to express their
        personal style more freely. People can mix and match different pieces,
        incorporate colors and patterns, and experiment with various
        accessories.{" "}
      </p>

      {product.discount ? (
        <span className="price fs-4 fw-bold">
          {" "}
          $
          {(
            +product.price -
            +product.price * (+product.discount / 100)
          ).toFixed(0)}
          .00{" "}
        </span>
      ) : (
        <span className="price fs-4 fw-bold">${product.price}.00</span>
      )}

      {product.discount ? (
        <span className="text-secondary">
          <del>${product.price}.00</del>
        </span>
      ) : (
        ""
      )}

      {/* <div className='mt-2'>Quantity</div>
        <div className="quantity">
            <span onClick={()=> changeQuantity("minus" , product)}><FaMinus className='icon' /></span>
            <span>{product.amount ? product.amount : "1"}</span>
            <span onClick={()=> changeQuantity("plus" , product)}><TiPlus className='icon' /></span>
        </div> */}

      <div className="mt-4">
        Color : <span>Grey</span>
      </div>

      <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "1px solid white",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          <img src={img} alt="" className="w-100 h-100" />
        </div>
      </div>

      <div className="mt-5 d-flex gap-3">
        <button
          onClick={() => addToCart(product)}
          className="addbtn2 w-50 fs-6"
          style={{ outline: "none" }}>
          add to cart <FaArrowRightLong />
        </button>
        <button
          onClick={() => nav("/CheckOut")}
          className="addbtn2 w-50 fs-6"
          style={{ outline: "none" }}>
          buy it now
        </button>
      </div>
    </>
  );
}

export default ProDesc;
