import "./SecFour.css"
import { MdPlayArrow } from "react-icons/md";


function SecFour() {
  return (
    <div className="SecFour">
      <span className="pt-5">MODERNWEAR</span>
      <p className="h1 m-0">The smartest choice for</p>
      <p className="h1 m-0">men suits for any</p>
      <p className="h1 m-0">occasion</p>
      <p className="text-center m-0">Incorporating sustainable practices into your fashion choices is not only eco-friendly but also a way to contribute to positive change in the industry.</p>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <i><MdPlayArrow /></i>
        <span>play video</span>
      </div>
    </div>
  )
}

export default SecFour