import { useParams } from "react-router-dom"
import SecEleven from "../Home/SecEleven/SecEleven"
import SecThree from "../Home/SecThree/SecThree"
import CustomerReview from "./CustomerReview"
import ProDesc from "./proDesc"
import "./ProductDescription.css"
import ProImage from "./ProImage"
import { useContext } from "react"
import { productContext } from "../../../Context/ProductContext"

function ProductDescription() {

  const {number} = useParams()

  const {product} = useContext(productContext)




  return (
    <div className="ProductDescription">
      <div className="main">
        <div className="image p-4">
          <ProImage product= {product} number= {number} />
        </div>

        <div className="description p-4">
          <ProDesc product= {product} number= {number} />
        </div>

      </div>


      <div className="my-5 py-5">
        <SecEleven />
      </div>

      <CustomerReview />
      
    </div>
  )
}

export default ProductDescription