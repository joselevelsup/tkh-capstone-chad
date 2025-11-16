import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'wouter';

export function ProductCard({ product, onAddToCart }) {
  const isOnSale = product.category === 'sale';
  
  return (
    <div className="group bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all" data-testid={`product-card-${product.id}`}>
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-product-${product.id}`}
          />
          {isOnSale && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground" data-testid={`badge-sale-${product.id}`}>
              Sale
            </Badge>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-1 truncate hover-elevate px-1 py-0.5 rounded" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold" data-testid={`text-product-price-${product.id}`}>
              ${parseFloat(product.price).toFixed(2)}
            </span>
            {isOnSale && (
              <span className="text-sm text-muted-foreground line-through">
                ${(parseFloat(product.price) * 1.3).toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            size="icon"
            variant="default"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1 mt-3">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded-full border-2 border-border"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
                data-testid={`color-${product.id}-${idx}`}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
