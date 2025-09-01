import "./Home.css"
import SecOne from "../Home/SecOne/SecOne"
import SecTwo from "./SecTwo/SecTwo"
import SecThree from "./SecThree/SecThree"
import SecFour from "./SecFour/SecFour"
import SecFive from "./SecFive/SecFive"
import SecSix from "./SecSix/SecSix"
import SecSeven from "./SecSeven/SecSeven"
import SecEight from "./SecEight/SecEight"
import SecNine from "./SecNine/SecNine"
import SecTen from "./SecTen/SecTen"
import SecEleven from "./SecEleven/SecEleven"

import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react"
import { blazerContext } from "../../../Context/BlazerContext"


function Home() {

  const {blazer} = useContext(blazerContext)

  const x = useRef(null)

  function displayKorombo() {
    x.current.style.display = "none"
  }

  const [timer , setTimer] = useState("15 mins ago")
  const [title , setTitle] = useState("Silk & Cashmere")
  const [img , setImg] = useState("/src/assets/images/Suit/1/07c0dcfc-2b19-470e-aade-d7fb84f1a9d7-removebg-preview_440x466.webp")

  const times = ["15 mins ago" , "23 mins ago" , "46 mins ago" , "53 mins ago"]
  const titles = blazer.map((el)=> el.title)
  const images = [
    "/src/assets/images/Suit/1/07c0dcfc-2b19-470e-aade-d7fb84f1a9d7-removebg-preview_440x466.webp" ,
    "/src/assets/images/Suit/2/3820a14b-3618-4cb3-8272-01ab573538e4-removebg-preview_440x466.webp" ,
    "/src/assets/images/Suit/3/5ead7e13-862a-4a8d-be8e-cb9d137d840c-removebg-preview_440x466.webp" ,
    "/src/assets/images/Suit/5/689ba688-0e53-410e-9836-7165b82ca396-removebg-preview_440x466.webp"
  ]
  

  const [index , setIndex] = useState(0)
  
  // setInterval(()=> {
  //   x.current.style.display = "flex"
  //   setTimer (times[index])
  //   setTimeout(()=> {
  //     x.current.style.display = "none"
  //   } , 2500)
  //   if(index >= 0 && index < 4) {
  //     setIndex (index + 1)
  //   }else if(index == 4) {
  //     setIndex (0)
  //   }
  //   console.log(index)
  // } , 6500)



  useEffect(() => {
    const interval = setInterval(() => {
      x.current.style.display = "flex";
      setTimer(times[index]);
      setTitle(titles[index])
      setImg(images[index])

      setTimeout(() => {
        x.current.style.display = "none";
      }, 2500);
  
      setIndex(prevIndex => (prevIndex + 1) % times.length); // لو times طولها 5 هيبقى 0 -> 4 دايمًا
  
    }, 6500);
  
    return () => clearInterval(interval); // تنظيف التايمر لو الـ component اتفك
  }, [index]);

  return (
    <>
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
      <SecSix />
      <SecSeven />
      <SecEight />
      <SecNine />
      <SecTen />
      <SecEleven />

      <div ref={x} className="korombo">
        <div>
          <img src= {img} alt="" />
        </div>
        <div>
          <p>Someone Purchased</p>
          <b> {title?.split(" ").slice(0 , 3).join(" ")} </b>
          {timer}
        </div>
        <i onClick={displayKorombo}><IoCloseCircleOutline /></i>
      </div>
    </>
  )
}

export default Home