import "./Footer.css"
import {Link} from "react-router-dom"

import { FaSquareYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row py-5">

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div>
            <b>Shoppers</b>
            <p>Shopping is the act of purchasing goods or services in exchange for money or other forms of payment. It is a fundamental economic activity that individuals engage in to acquire the items they need or desire for personal use or consumption.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div>
            <b>Navigation :</b>
            <ul>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Faq's</Link>
              </li>
              <li>
                <Link>Blog Page</Link>
              </li>
              <li>
                <Link>Article Page</Link>
              </li>
              <li>
                <Link>Category</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div>
            <b>About us :</b>
            <ul>
              <li>
                <Link>Search</Link>
              </li>
              <li>
                <Link>Policy Privacy</Link>
              </li>
              <li>
                <Link>Shipping & Policy</Link>
              </li>
              <li>
                <Link>Term & Conditions</Link>
              </li>
              <li>
                <Link>Compare</Link>
              </li>
              <li>
                <Link>Wish List</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div>
            <b >Share :</b>
            <div className="d-flex gap-2 fs-4">
              <FaSquareYoutube style={{cursor : "pointer"}} />
              <FaWhatsappSquare style={{cursor : "pointer"}} />
              <FaInstagramSquare style={{cursor : "pointer"}} />
              <FaSquareXTwitter style={{cursor : "pointer"}} />
            </div>
          </div>
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer