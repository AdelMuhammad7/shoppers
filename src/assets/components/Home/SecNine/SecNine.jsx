import "./SecNine.css"
import { FaArrowCircleRight } from "react-icons/fa";

function SecNine() {
  return (
    <div className="SecNine">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">

            <div className="d-flex flex-column gap-3 justify-content-center align-items-center text-center">
              <b className="h1 w-75">Subscribe newsletter and get -20% off</b>
              <p>Chocolate, food product made from cocoa beans, consumed as candy and used to make beverage and bakery products.</p>
              <div className="inp">
                <input type="email" placeholder="Enter email address..."/>
                <FaArrowCircleRight className="icon"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SecNine