import React, { useRef } from 'react'

import img from "../../images/Blazer/one/3f5847bf-6d02-4f17-ae0d-9fc1f3405c7e-removebg-preview_440x466.webp"
import img1 from "../../images/Suit/1/07c0dcfc-2b19-470e-aade-d7fb84f1a9d7-removebg-preview_440x466.webp"

function ProImage({number , product}) {

  const z = useRef(null)
  const h = useRef(null)

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> img move
  function imgMove (e) {

    const rect = z.current.getBoundingClientRect();  // بتجيب ابعاد المكان الى هتتحرك فى الصورة

    const x = e.clientX - rect.left; // Mouse X relative to container
    const y = e.clientY - rect.top;  // Mouse Y relative to container

    const offsetX = (x / rect.width - 0.5) * -100; // عكس الاتجاه
    const offsetY = (y / rect.height - 0.5) * -100;

    h.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> return img to default location
  function imgLeave () {
    h.current.style.transform = `translate(0px, 0px)`;
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Scale Img
  function imgScale () {
    h.current.style.transform = "scale(1.2)" ;
  }

  function chanegePhoto (e) {

    const newSrc = e.target.getAttribute("src");
    h.current.setAttribute("src" , newSrc)
    
  }


  return (
    <div className='ProImage'>

      <div ref={z} className='mainImg' onMouseMove={(e)=> imgMove(e)} onMouseLeave={imgLeave} onClick={imgScale}>
        <img ref={h} src= {img} alt="" />
        {/* <img ref={h} src= {`/src/assets/${product?.images[0].split("/").splice(3).join("/")}`} alt="" /> */}
      </div>

      <div className="selectImg">

        {product.images.map((el,index)=> {
          return (
            <div key={index} >
              {console.log(el)}
              <img onClick={(e)=> chanegePhoto(e)} src= {el} className='w-100 h-100' alt="" />
              {/* <img onClick={(e)=> chanegePhoto(e)} src= {`/src/assets/${el.split("/").splice(3).join("/")}`} className='w-100 h-100' alt="" /> */}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ProImage