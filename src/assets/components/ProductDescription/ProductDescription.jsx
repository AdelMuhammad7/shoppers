import { useContext } from "react";
import "./ProductDescription.css";

import { productContext } from "../../../Context/ProductContext.jsx";
import SecEleven from "../Home/SecEleven/SecEleven.jsx";

import CustomerReview from "./CustomerReview.jsx";

import ProDesc from "./ProDesc.jsx";
import ProImage from "./ProImage.jsx";

function ProductDescription() {

  const { product } = useContext(productContext);

  return (
    <div className="ProductDescription">
      <div className="main">
        <div className="image p-4">
          <ProImage product={product} />
        </div>

        <div className="description p-4">
          <ProDesc product={product} />
        </div>
      </div>

      <div className="my-5 py-5">
        <SecEleven />
      </div>

      <CustomerReview />
    </div>
  );
}

export default ProductDescription;
