import "./SecTwo.css"
import { IoIosBasket } from "react-icons/io";
import imgRight from "../../../images/chocolate2.webp"
import imgLeft from "../../../images/cs.webp"
import { useNavigate } from "react-router-dom";

function SecTwo() {

  const navigate = useNavigate()



  return (
    <div className="SecTwo">
      <div className="container pb-3">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="w-75">
              <span>MODERNWEAR</span>
              <h2 className="h1">Stay handsome with our suits</h2>
              <p className="m-0 mb-3">A well-curated wardrobe is the foundation of effortless style. Explore the must-have wardrobe essentials that can be mixed and matched to create countless stylish outfits for any occasion.</p>
              <button onClick={()=> navigate("/blazer")} className="addbtn2 me-3">Blazers <IoIosBasket /></button>
              <button onClick={()=> navigate("/T-Shirt")}  className="addbtn2">Shirt <IoIosBasket /></button>

              <div className="imgLeft">
                <img src={imgLeft} className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div>
              <img src={imgRight} className="w-100" style={{marginTop : "-70px"}} alt="" />
              <p className="m-0">Get ready for each season with a rundown of the latest fashion trends, and discover how to incorporate them into your wardrobe while still maintaining your personal flair.</p>
              <span>show more</span>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default SecTwo