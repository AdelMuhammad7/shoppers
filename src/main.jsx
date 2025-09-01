import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import { BlazerContextProvider } from './Context/BlazerContext.jsx'
import { SuitContextProvider } from './Context/SuitContext.jsx'
import { TrouserContextProvider } from './Context/TrouserContext.jsx'
import { ShirtContextProvider } from './Context/ShirtContext.jsx'
import { AddToCartProvider } from './Context/CartContext.jsx'
import { CasualContextProvider } from './Context/CausalContext.jsx'
import { ProductContextProvider } from './Context/ProductContext.jsx'
import { AddToWishListProvider } from './Context/WishCartContext.jsx'



createRoot(document.getElementById('root')).render(

  <AddToWishListProvider>
  <ProductContextProvider>
  <CasualContextProvider>
  <AddToCartProvider>
  <ShirtContextProvider>
  <TrouserContextProvider>
  <SuitContextProvider>
  <BlazerContextProvider>
    <App />
  </BlazerContextProvider>
  </SuitContextProvider>
  </TrouserContextProvider>
  </ShirtContextProvider>
  </AddToCartProvider>
  </CasualContextProvider>
  </ProductContextProvider>
  </AddToWishListProvider>

)
