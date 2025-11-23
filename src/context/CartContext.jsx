// src/context/CartContext.jsx
import { createContext, useContext, useMemo, useState } from 'react'

// Shape of a cart item:
// { id, name, price, size, category, imageKey, quantity }

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
})

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    console.log('addToCart called with:', product) // <-- TEMP debug log

    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        const updated = [...prev]
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + 1,
        }
        return updated
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const value = useMemo(() => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + Number(item.price || 0) * item.quantity,
      0
    )

    console.log('Cart state changed:', { cartItems, totalItems, totalPrice }) // debug

    return {
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
    }
  }, [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
