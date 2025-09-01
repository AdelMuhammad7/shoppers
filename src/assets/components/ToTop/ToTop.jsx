import { useRef } from "react";
import "./ToTop.css"
import { FaArrowCircleUp } from "react-icons/fa";

function ToTop() {
  
  const x = useRef(null)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div ref={x} className="ToTop">
      <i onClick={scrollToTop}><FaArrowCircleUp /></i>
    </div>
  )
}

export default ToTop