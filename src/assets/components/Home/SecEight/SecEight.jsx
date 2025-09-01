import "./SecEight.css"
import img from "../../../images/chocolate4.webp"
import { IoIosBasket } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SecEight() {

  const nav = useNavigate()
  return (
    <div className="SecEight py-5">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-sm-12 ">
            <div className="d-flex flex-column align-items-end gap-2">
              <b className="w-75 text-end">Apparels and suits
              that are for men</b>
              <p className="m-0 my-3 text-end" style={{fontSize : "12px"}}>Fashion is more than just the clothes we wear; it is a language that speaks volumes about our identity, culture, and values.</p>
              <button onClick={()=>nav("/collections")} className="addbtn d-flex justify-content-center align-items-center gap-2">Check More Products <IoIosBasket /></button>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 ">
            <div>
              <img src= {img} className="w-100" alt="" />
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 ">
            <div className="d-flex flex-column align-items-start gap-2">
              <b className="w-75 text-start">When men love
              fashionable suits too</b>
              <p className="m-0 my-3 text-start" style={{fontSize : "12px" , textAlign : "flex-end"}}>Discovering your style identity is a transformative journey that involves experimentation and self-discovery. We'll share tips and tricks to help you define.</p>
              <button onClick={()=>nav("/collections")} className="addbtn d-flex justify-content-center align-items-center gap-2">Check More Products <IoIosBasket /></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SecEight