
import { useCart } from '../components/CartContext'

export default function Checkout() {
  const { cartItems, totalItems, totalPrice, removeFromCart, clearCart } = useCart()

  const handlePlaceOrder = () => {
    if (!cartItems.length) return
    alert('Order placed! (demo)')
    clearCart()
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-base-100 text-base-content px-4 md:px-10 lg:px-24 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {!cartItems.length ? (
          <p className="text-base-content/70">
            Your cart is empty. Browse the Men, Women, or Kids pages to add items.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
            {/* Cart items list */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-4 border border-base-300 rounded-lg px-4 py-3 bg-base-100"
                >
                  <div>
                    <h2 className="font-semibold text-sm md:text-base">{item.name}</h2>
                    <p className="text-xs text-base-content/70">
                      Category: {item.category} {item.size && `• Size: ${item.size}`}
                    </p>
                    <p className="text-xs text-base-content/70">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm md:text-base">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-ghost btn-xs mt-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary card */}
            <aside className="border border-base-300 rounded-lg px-4 py-4 bg-base-100 shadow-sm space-y-3">
              <h2 className="font-semibold text-lg">Order Summary</h2>
              <div className="flex justify-between text-sm">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-base-300 pt-2 font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="btn btn-primary w-full mt-2"
                onClick={handlePlaceOrder}
                disabled={!cartItems.length}
              >
                Place Order
              </button>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}






















