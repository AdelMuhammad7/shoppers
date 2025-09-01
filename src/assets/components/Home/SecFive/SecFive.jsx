import "./SecFive.css"
import { IoIosBasket } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function SecFive() {

  const navigate = useNavigate()

  function addActive (e) {
    e.target.parentElement.querySelectorAll("button").forEach((el) => {
      el.classList.remove("active")
    })
    e.target.classList.add("active")
  }

  return (
    <div className="SecFive SecThree">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50 d-flex flex-column gap-3">
            <b className="h2">A style that you will fall in love</b>
            <p className="m-0">Fashion is an art form that allows us to express ourselves, exude confidence, and celebrate our individuality.</p>
          </div>
          <div className="d-flex -justify-content-center align-items-center gap-3">

            <button onClick={(e)=> {
              navigate("")
              addActive (e)
            } } className="addbtn2  active">Trouser <IoIosBasket /></button>

            <button onClick={(e)=> {
              navigate("/ProductsShirt")
              addActive (e)
            } } className="addbtn2 ">Shirt <IoIosBasket /></button>

            <button onClick={(e)=> {
              navigate("/ProductsBlazer")
              addActive (e)
            }  } className="addbtn2 ">Blazer <IoIosBasket /></button>

          </div>
        </div>

        <div className="my-4">
          <Outlet />
          <div className="left"><FaArrowAltCircleLeft /></div>
          <div className="right"><FaArrowAltCircleRight /></div>
        </div>
        

      </div>
    </div>
  )
}

export default SecFive