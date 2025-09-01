import './App.css'
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import  { Toaster } from 'react-hot-toast';
import { lazy ,Suspense } from "react"


const Layout = lazy(()=> import("./Layout"))
const Home = lazy(()=> import("./assets/components/Home/Home"))
const ProductsTrouser = lazy(()=> import("./assets/components/Home/SecFive/ProductsTrouser"))
const ProductsShirt = lazy(()=> import("./assets/components/Home/SecFive/ProductsShirt"))
const ProductsBlazer = lazy(()=> import("./assets/components/Home/SecFive/ProductsBlazer"))
const Cart = lazy(()=> import("./assets/components/Cart/Cart"))
const Shop = lazy(()=> import("./assets/components/Shop/Shop"))
const Shop2 = lazy(()=> import("./assets/components/Shop/Shop2"))
const Shop3 = lazy(()=> import("./assets/components/Shop/Shop3"))
const Shop4 = lazy(()=> import("./assets/components/Shop/Shop4"))
const Collection = lazy(()=> import("./assets/components/Collection/Collection"))
const Shop5 = lazy(()=> import("./assets/components/Shop/Shop5"))
const ProductDescription = lazy(()=> import("./assets/components/ProductDescription/ProductDescription"))
const CheckOut = lazy(()=> import("./assets/components/CheckOut/CheckOut"))
const WishList = lazy(()=> import("./assets/components/WishList/WishList"))


import lottieLoading from "./Lottie Files/loadingAnimation.json"
import NotFound from './ErrorPage/NotFound';
import Lottie from 'lottie-react';






function App() {

  const handelLotti = ()=> {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Lottie animationData={lottieLoading} className='w-50'/>
      </div>
    )
  }



  const router = createBrowserRouter([{
    path : "" , 
    element : <Suspense fallback={handelLotti()} > <Layout /> </Suspense> , 
    errorElement :  <NotFound />      ,
    children : [
      {path : "" , element :<Suspense fallback={handelLotti()} ><Home /></Suspense>   , children : [
        {path: "" , element : <ProductsTrouser />},
        {path: "/ProductsBlazer" , element : <ProductsBlazer />},
        {path: "/ProductsShirt" , element : <ProductsShirt />}
      ]},
      {path : "cart" , element :<Suspense fallback={handelLotti()} ><Cart /></Suspense> },
      {path : "CasualWear" , element :<Suspense fallback={handelLotti()} ><Shop /></Suspense> },
      {path : "blazer" , element :<Suspense fallback={handelLotti()} ><Shop2 /></Suspense> },
      {path : "trousers" , element :<Suspense fallback={handelLotti()} ><Shop3 /></Suspense> },
      {path : "T-Shirt" , element :<Suspense fallback={handelLotti()} ><Shop4 /></Suspense> },
      {path : "suit" , element :<Suspense fallback={handelLotti()} ><Shop5 /></Suspense> },
      {path : "collections" , element :<Suspense fallback={handelLotti()} ><Collection /></Suspense> },
      {path : "ProductDescription/:number" , element :<Suspense fallback={handelLotti()} ><ProductDescription /></Suspense> },
      {path : "CheckOut" , element :<Suspense fallback={handelLotti()} ><CheckOut /></Suspense> },
      {path : "WishList" , element :<Suspense fallback={handelLotti()} ><WishList /></Suspense> }
    ]
  }])
  
  return (
    <main>
      <Toaster/>
      
      <RouterProvider router={router} />
    </main>
  )
}

export default App
