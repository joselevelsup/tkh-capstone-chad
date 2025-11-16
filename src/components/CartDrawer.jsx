import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Link } from 'wouter';

export function CartDrawer() {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
        data-testid="cart-overlay"
      />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-card-border z-50 flex flex-col animate-slide-in" data-testid="cart-drawer">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-semibold" data-testid="text-cart-title">Shopping Cart</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(false)}
            data-testid="button-close-cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2" data-testid="text-empty-cart">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Add some items to get started!</p>
            <Link href="/women">
              <Button onClick={() => setIsCartOpen(false)} data-testid="button-continue-shopping">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4 p-4 bg-background rounded-lg border border-border" data-testid={`cart-item-${item.cartItemId}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                      data-testid={`img-cart-item-${item.cartItemId}`}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate" data-testid={`text-item-name-${item.cartItemId}`}>{item.name}</h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-item-details-${item.cartItemId}`}>
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="font-semibold mt-1" data-testid={`text-item-price-${item.cartItemId}`}>${parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeFromCart(item.cartItemId)}
                        data-testid={`button-remove-${item.cartItemId}`}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2 border border-border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          data-testid={`button-decrease-${item.cartItemId}`}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm" data-testid={`text-quantity-${item.cartItemId}`}>{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          data-testid={`button-increase-${item.cartItemId}`}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span data-testid="text-cart-total">${cartTotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => setIsCartOpen(false)}
                  data-testid="button-checkout"
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
