import "./Collection.css"
import img from "../../images/Collection/New folder/1.webp"
import img2 from "../../images/Collection/New folder/2.webp"
import img3 from "../../images/Collection/New folder/3.webp"
import img4 from "../../images/Collection/New folder/4.webp"
import img5 from "../../images/Collection/New folder/5.webp"
import { useNavigate } from "react-router-dom"


function Collection() {

  const navigate = useNavigate()

  

  return (
    <div className="Collection">
      <div className="container pb-5">
        <div className="d-flex justify-content-center py-5">
          <b className="h1 fw-bold text-center text-light">Collections</b>
        </div>

        <div className="row g-3">

          <div className="col-lg-3 col-md-4">
            <div onClick={()=> navigate("/blazer")}>
              <div className="card bg-transparent text-light border">
                <div className="card-img">
                  <img src= {img} className="w-100" style={{height : "200px"}} alt="" />
                </div>
                <div className="card-body m-0 p-1 text-center">
                  <p className="m-0" style={{fontSize: "14px"}}>Blazers</p>
                  <span style={{fontSize: "12px"}}>5 Items</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-4">
            <div onClick={()=> navigate("/CasualWear")}>
              <div className="card bg-transparent text-light border">
                <div className="card-img">
                  <img src= {img2} className="w-100" style={{height : "200px"}} alt="" />
                </div>
                <div className="card-body m-0 p-1 text-center">
                  <p className="m-0" style={{fontSize: "14px"}}>Casual Wear</p>
                  <span style={{fontSize: "12px"}}>4 Items</span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-4">
            <div onClick={()=> navigate("/T-Shirt")}>
              <div className="card bg-transparent text-light border">
                <div className="card-img">
                  <img src= {img3} className="w-100" style={{height : "200px"}} alt="" />
                </div>
                <div className="card-body m-0 p-1 text-center">
                  <p className="m-0" style={{fontSize: "14px"}}>Shirt</p>
                  <span style={{fontSize: "12px"}}>5 Items</span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-4">
            <div onClick={()=> navigate("/suit")}>
              <div className="card bg-transparent text-light border">
                <div className="card-img">
                  <img src= {img4} className="w-100" style={{height : "200px"}} alt="" />
                </div>
                <div className="card-body m-0 p-1 text-center">
                  <p className="m-0" style={{fontSize: "14px"}}>Suit</p>
                  <span style={{fontSize: "12px"}}>5 Items</span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-4">
            <div onClick={()=> navigate("/trousers")}>
              <div className="card bg-transparent text-light border">
                <div className="card-img">
                  <img src= {img5} className="w-100" style={{height : "200px"}} alt="" />
                </div>
                <div className="card-body m-0 p-1 text-center">
                  <p className="m-0" style={{fontSize: "14px"}}>Trousers</p>
                  <span style={{fontSize: "12px"}}>5 Items</span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Collection