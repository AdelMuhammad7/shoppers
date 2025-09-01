import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import Swal from 'sweetalert2'






export const wishListContext = createContext()

export const AddToWishListProvider = ({children})=> {

    const [wishListCart , setWishListCart] = useState([])

    function addToWishList (product) {

        const selectedProduct = wishListCart.find((el)=> el.title === product.title)

        if(!selectedProduct){
            toast.success("successfully added to WishList")
            setWishListCart([...wishListCart , product])
        }else {
            toast("Sorry product is already exist in WishList" , {
                icon : <BsEmojiExpressionlessFill />
            })
        }

    }



    function deleteFromWishList (product) {
        
        const newArr = wishListCart.filter((element)=>{
            return (element?.title != product?.title)
        } )

        setWishListCart(newArr)
    }


    function deleteAllWishList () {

        Swal.fire({
            title: "Are you sure?",
            text: `You want delete this product!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            // delete
            setWishListCart([])

              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            }
        });
    }




    // get Items from Local Storage
    useEffect(()=>{
        if(localStorage.getItem("wishList")){
            setWishListCart(JSON.parse(localStorage.getItem("wishList")))
        }else{
            setWishListCart([])
        }
    } , [])
    // set item to local storage
    useEffect(()=>{
        localStorage.setItem("wishList" , JSON.stringify(wishListCart))        
    }, [wishListCart])



    return (
        <wishListContext.Provider value={{wishListCart , addToWishList , deleteFromWishList , deleteAllWishList}}>
            {children}
        </wishListContext.Provider>
    )

}

