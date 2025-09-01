import "./Shop.css"
import { FaPlus } from "react-icons/fa";

import { useContext, useRef, useState } from "react";
import { casualContext } from "../../../Context/CausalContext";

function Left() {
    const x = useRef(null)
    const y = useRef(null)
    const z = useRef(null)

    function toggleDropDown(state) {
        switch(state){
        case "one" :
            x.current.classList.toggle("active")
        break ;
        case "two" :
            y.current.classList.toggle("active")
        break ;
        case "three" :
            z.current.classList.toggle("active")
        }
    }

    const {handleChange ,casual , selectedBrands  , getCasualData} = useContext(casualContext)

    // استخراج البراندات الفريدة
    const uniqueBrands = [...new Set(casual.map(item => item.brand))];

    const brandCasual = uniqueBrands.map((brand, index) => (
        <div className="d-flex gap-2" key={index}>
            <input
                type="checkbox"
                id={brand}
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={(e) => handleChange(e, { brand })}
                style={{ cursor: "pointer" }}
            />
            <label htmlFor={brand} style={{ fontSize: "12px", cursor: "pointer" }}>
                {brand}
            </label>
        </div>
    ));

    function resetCheckBox() {
        getCasualData ()
    }




  return (
    <>
        <div className="py-1">
            <p onClick={()=> toggleDropDown("one")} style={{cursor: "pointer" , fontWeight : "600" , fontSize: "13px"}} className="m-0 d-flex justify-content-between align-items-center">Availability <FaPlus className="me-2" style={{fontSize : "12px"}}/></p>
            <div ref={x} className="dropdown my-1">
                <div className="d-flex justify-content-between align-items-center" style={{fontSize : "12px"}}>
                    <p><span>0</span> selected</p>
                    <p className="me-2" style={{cursor: "pointer"}}>Reset</p>
                </div>

                <div className="d-flex gap-2" >
                    <input type="checkbox" id="instock" style={{cursor: "pointer"}} />
                    <label htmlFor="instock" style={{fontSize: "12px" , cursor: "pointer"}}>In Stock (4)</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="checkbox" id="outofstock" style={{cursor: "pointer"}}/>
                    <label htmlFor="outofstock" style={{fontSize: "12px" , cursor: "pointer"}}>Out Of Stock (0)</label>
                </div>        
            
            
            </div>
        </div>

        <div className="py-1">
            <p onClick={()=> toggleDropDown("two")} style={{cursor: "pointer" , fontWeight : "600" , fontSize: "13px"}} className="m-0 d-flex justify-content-between align-items-center">Color <FaPlus className="me-2" style={{fontSize : "12px"}}/></p>
            <div ref={y} className="dropdown my-1">
            <div className="d-flex justify-content-between align-items-center" style={{fontSize : "12px"}}>
                <p><span>0</span> selected</p>
                <p className="me-2" style={{cursor: "pointer"}}>Reset</p>
            </div>
            <div className="d-flex gap-2">
                <input type="checkbox" id="blue" style={{cursor: "pointer"}} />
                <label htmlFor="blue" style={{fontSize: "12px" , cursor: "pointer"}}>Blue</label>
            </div>
            <div className="d-flex gap-2" >
                <input type="checkbox" id="green" style={{cursor: "pointer"}}/>
                <label htmlFor="green" style={{fontSize: "12px" , cursor: "pointer"}}>Green</label>
            </div>
            </div>
        </div>

        <div className="py-1">
            <p onClick={()=> toggleDropDown("three")} style={{cursor: "pointer" , fontWeight : "600" , fontSize: "13px"}} className="m-0 d-flex justify-content-between align-items-center">Brand <FaPlus className="me-2" style={{fontSize : "12px"}}/></p>
            <div ref={z} className="dropdown my-1">

                <div className="d-flex justify-content-between align-items-center" style={{fontSize : "12px"}}>
                    <p><span>0</span> selected</p>
                    <p onClick={resetCheckBox} className="me-2" style={{cursor: "pointer"}}>Reset</p>
                </div>

                    {brandCasual}
              

            </div>
        </div>
    </>
  )
}

export default Left