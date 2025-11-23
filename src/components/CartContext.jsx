import { createContext, useContext, useMemo, useState } from 'react'

// Shape of a cart item:
// { id, name, price, size, category, imageKey, quantity }

// Provide a safe default so using the hook outside a provider won't crash
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

// No more throwing – just return the context value
export function useCart() {
  return useContext(CartContext)
}
