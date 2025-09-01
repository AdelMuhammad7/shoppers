import "./WishList.css"

import img from "../../images/Blazer/one/3f5847bf-6d02-4f17-ae0d-9fc1f3405c7e-removebg-preview_440x466.webp"
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { wishListContext } from "../../../Context/WishCartContext";
import { cartContext } from "../../../Context/CartContext";


function WishList() {

  const {wishListCart , deleteFromWishList , deleteAllWishList} = useContext(wishListContext)
  const {addToCart} = useContext(cartContext)

  const products = wishListCart.map((el , index)=> {
    return (
      <tr key={index}>
        <td className="img" ><img src= {el?.images[0]} className="w-100 h-100" alt="" /></td>
        <td>
          <div> {el?.brand} </div>
          <div> {el?.title} </div>
          <div>Grey, Black</div>
          <div>{el.discount ? <span > ${(+el.price - (+el.price * (+el.discount / 100) )).toFixed(0)}.00 </span> : <span >${el.price}.00</span> }
          </div>
        </td>

        <td > 
          {el.available ? <button className="addbtn fs-6" onClick={()=> {
          addToCart(el)
          deleteFromWishList(el)
        }}>add to cart</button> : <button style={{cursor: "not-allowed"}} disabled className="addbtn fs-6 bg-danger" onClick={()=> {
          addToCart(el)
          deleteFromWishList(el)
        }}> Not Available </button> }

        
        
        </td>

        <td > <i className="fs-1 text-danger" onClick={()=> {
          deleteFromWishList(el)
        }}><MdDelete /></i> </td>
      </tr>  
    )
  })

  return (
    <div className="WishList">

      <div className="title">
        <div className="container py-5">
          <b className="h1">WishList</b>
          <p className="w-50">Welcome to our Wishlist feature, where you can curate your personalized collection of desired items and experiences.</p>
          </div>
      </div>

      <div className="body">
        <div className="container py-5">
          <p className="text-center h2 text-uppercase mb-3">WishList({wishListCart.length}) </p>


          {products.length > 0 ?

            <table className="text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Cart Button</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>

                {products}
                            
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <button onClick={deleteAllWishList} className="addbtn mt-5 fs-5 w-25 p-2">Clear All</button>
                  </td>
                </tr>
      
              </tfoot>

          </table>
        
          :  <div className="text-center text-danger h1"> Your WISHLIST is empty </div>}
          
        </div>
      </div>
      
    </div>
  )
}

export default WishList