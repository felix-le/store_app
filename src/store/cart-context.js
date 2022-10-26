import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  selectedProducts: [],
  count: 0,
  addToCart: (id) => {}
});

export const CartContextProvider = (props) => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [count, setCount] = useState(0)

  const addToCartHandler = (id) => {
    const newArr = [...selectedProducts]

    if (newArr.length === 0) return 

    const itemExist = newArr.filter(n => n.id === id)
    if (itemExist) {
      itemExist.count++
    } else {
      // Call API to get product info
      const newItem = {id: '333', count: 1}
    }
  }

  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem('selectedProducts');

    if (storedSelectedProducts.length > 0) {
      setCount(storedSelectedProducts.length)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        selectedProducts: selectedProducts,
        count: 0,
        addToCart: addToCartHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext;
