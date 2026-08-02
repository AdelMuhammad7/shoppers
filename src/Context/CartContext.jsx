import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const cartContext = createContext();

export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> add to cart

  const addToCart = (item) => {
    const selectedProduct = cart.find((el) => el.title === item.title);

    if (!selectedProduct) {
      toast.success("successfully added to cart");
      setCart([...cart, { ...item, amount: 1 }]);
    } else {
      Swal.fire({
        title: "this product is already added !",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#269383",
        cancelButtonColor: "#4f223f",
        confirmButtonText: "Add one more !",
      }).then((result) => {
        if (result.isConfirmed) {
          // add one more
          selectedProduct.amount = +selectedProduct.amount + 1;
          setCart([...cart]);
          Swal.fire({
            title: `you have ${selectedProduct.amount} from ${selectedProduct.title}`,
            text: "product has been added successfully .",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> delete
  function deleteProduct(el) {
    Swal.fire({
      title: "Are you sure?",
      text: `You want delete this product!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete
        const newArr = cart.filter((element) => {
          return element?.title != el?.title;
        });

        setCart(newArr);

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  }

  // changeQuantity

  function changeQuantity(state, el) {
    if (state == "plus") {
      el.amount = +el.amount + 1;
    } else {
      if (el.amount > 1) {
        el.amount = +el.amount - 1;
      } else {
        deleteProduct(el);
      }
    }

    setCart([...cart]);
  }

  // total price
  const totalPrice = cart.reduce((a, b) => {
    if (!b.discount) {
      return a + b.amount * b.price;
    } else {
      return (
        a + b.amount * (+b.price - +b.price * (+b.discount / 100)).toFixed(0)
      );
    }
  }, 0);

  // total items in small cart
  const totalItems = cart.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  // get Items from Local Storage
  useEffect(() => {
    if (localStorage.getItem("cartData")) {
      setCart(JSON.parse(localStorage.getItem("cartData")));
    } else {
      setCart([]);
    }
  }, []);
  // set item to local storage
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  // localStorage.clear()

  return (
    <cartContext.Provider
      value={{
        addToCart,
        cart,
        deleteProduct,
        changeQuantity,
        totalPrice,
        totalItems,
      }}>
      {children}
    </cartContext.Provider>
  );
};
