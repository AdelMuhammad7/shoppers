import { useNavigate } from "react-router-dom";
import "./Shop.css"
import { CiCircleChevLeft } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import "../../components/Home/SecThree/SecThree.css"

import Left from "./Left";
import { useContext, useRef } from "react";
import Card from "../Home/SecThree/Card";
import { suitContext } from "../../../Context/SuitContext";


function Shop5() {
  const navigate = useNavigate()

  const {suit  , suitItems , selectedBrands , handleChange , sortingData ,selectedAvailable , handleChangeAvailable ,notAvailableItems , availableItems} = useContext(suitContext)
  
  const products = suitItems.map((el , index)=> {
    return (
      <div className="col-lg-4 col-md-6 col-sm 12" key={index}>
        <Card item={el} />  
      </div>
      
    )
  })

  const uniqueAvailable = [...new Set(suit.map(item => item.available))];

  const availableSuit = uniqueAvailable.map((el, index) => {

    if (el == true) {
      return (
        <div key={index} className="d-flex gap-2">
          <input 
          onChange={(e) => handleChangeAvailable(e, el)}
          checked={selectedAvailable.includes(el)}
          type="checkbox" 
          id="instock" 
          style={{cursor: "pointer"}} />
          <label htmlFor="instock" style={{fontSize: "12px" , cursor: "pointer"}}>In Stock ({availableItems.length})</label>
        </div>
      )
    }else {
      return (
        <div key={index} className="d-flex gap-2">
          <input 
          onChange={(e) => handleChangeAvailable(e, el)}
          checked={selectedAvailable.includes(el)}
          type="checkbox" 
          id="outofstock" 
          style={{cursor: "pointer"}}/>
          <label htmlFor="outofstock" style={{fontSize: "12px" , cursor: "pointer"}}>Out Of Stock ({notAvailableItems.length})</label>
        </div>
      )
    }
  })


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

    // استخراج البراندات الفريدة
    const uniqueBrands = [...new Set(suit.map(item => item.brand))];

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


  return (
    <div className="Shop SecThree">
      <div className="title">
        <div className="container  py-5">
          <div onClick={()=> navigate("/")} style={{cursor: "pointer"}} className="d-flex align-items-center gap-1">
            <CiCircleChevLeft className="fs-4" />
            <span className="">Back to Return</span>
          </div>
          <p className="h2 mt-4">Suits</p>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4 col-sm-0">
              <div className="pb-2">
                <b className="fs-5 mb-1 d-block">Filters</b>
              </div>

              {/* <Left /> */}

              <div className="py-1">
            <p onClick={()=> toggleDropDown("one")} style={{cursor: "pointer" , fontWeight : "600" , fontSize: "13px"}} className="m-0 d-flex justify-content-between align-items-center">Availability <FaPlus className="me-2" style={{fontSize : "12px"}}/></p>
            <div ref={x} className="dropdown my-1">
                {/* <div className="d-flex justify-content-between align-items-center" style={{fontSize : "12px"}}>
                    <p><span>0</span> selected</p>
                    <p className="me-2" style={{cursor: "pointer"}}>Reset</p>
                </div> */}

                {/* <div className="d-flex gap-2" >
                    <input type="checkbox" id="instock" style={{cursor: "pointer"}} />
                    <label htmlFor="instock" style={{fontSize: "12px" , cursor: "pointer"}}>In Stock (4)</label>
                </div>
                <div className="d-flex gap-2">
                    <input type="checkbox" id="outofstock" style={{cursor: "pointer"}}/>
                    <label htmlFor="outofstock" style={{fontSize: "12px" , cursor: "pointer"}}>Out Of Stock (0)</label>
                </div>         */}
              {availableSuit}
            
            </div>
        </div>

        {/* <div className="py-1">
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
        </div> */}

        <div className="py-1">
            <p onClick={()=> toggleDropDown("three")} style={{cursor: "pointer" , fontWeight : "600" , fontSize: "13px"}} className="m-0 d-flex justify-content-between align-items-center">Brand <FaPlus className="me-2" style={{fontSize : "12px"}}/></p>
            <div ref={z} className="dropdown my-1">

                {/* <div className="d-flex justify-content-between align-items-center" style={{fontSize : "12px"}}>
                    <p><span>0</span> selected</p>
                    <p onClick={resetCheckBox} className="me-2" style={{cursor: "pointer"}}>Reset</p>
                </div> */}

                    {brandCasual}
              

            </div>
        </div>


              {/*  */}

            </div>


            <div className="col-lg-9 col-md-8 col-sm-12">

              <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{ fontSize: "12px",borderBottom : "1px solid white"}}>
                <p className="m-0">Home / <span>Suits</span></p>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <p className="m-0">Sort by :</p>
                  <select onChange={(e)=> sortingData(e)}>
                    <option value="Default">Default</option>
                    <option value="price(lowToHigh)">price(low To High)</option>
                    <option value="price(Hightolow)">price(High to low)</option>
                    <option value="Alphabetically(AtoZ)">Alphabetically(A to Z)</option>
                    <option value="Alphabetically(ZtoA)">Alphabetically(Z to A)</option>
                  </select>
                </div>
              </div>

              <div className="row g-2 p-3">
                {products}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop5