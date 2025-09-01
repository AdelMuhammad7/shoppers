import "./CheckOut.css"
import FormCheck from "./FormCheck";
import Shipping from "./Shipping";
import { useContext } from "react";
import { cartContext } from "../../../Context/CartContext";

function CheckOut() {

  const {cart } = useContext(cartContext)


  return (
    <div className="CheckOut p-5">
      <div className="container">

        <div className="row g-5">
          <div className="col-lg-6 col-md-12">
            <FormCheck />
          </div>

          <div className="col-lg-6 col-md-12">

            {cart.length > 0 ? <Shipping /> : 
              <p className="text-danger h2 text-center my-5">Your Cart Is Empty</p>
            }

            
          </div>
        </div>


        <button className="addbtn w-100 fs-4 mt-5">submit</button>
        
      </div>
    </div>
  )
}

export default CheckOut