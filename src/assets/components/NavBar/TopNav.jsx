import { IoIosArrowDown } from "react-icons/io";


function Top() {

  return (
    <div className="top d-flex justify-content-between align-items-center border-bottom border-dark p-3">
        <p>Monday - Friday 8:00 AM - 9:00 PM</p>
        <ul>
          <div className="d-flex justify-content-center align-items-center gap-1 " >
            <select>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="INR">INR</option>
              <option value="CAD">CAD</option>
            </select>
          </div>
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
  )
}

export default Top