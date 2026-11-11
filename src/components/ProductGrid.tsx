import type { Product } from "../types/product";
import { EmptyState } from "./EmptyState";
import { ProductCard } from "./ProductCard";
import type { CartItem } from "../types/cart";


export function ProductGrid({ products, favorites, cart, onToggleFavorite, addToCart }: 
    { products: Product[]; favorites: number[]; cart: CartItem[]; onToggleFavorite: (id: number) => void; addToCart: (product: Product) => void }) {
    if (products.length === 0 ) {
            return <EmptyState message="No Products Here Yet!"/>
        } 
    return (

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map(item => {
                const inCart = cart.find((cartItem) => cartItem.product.id === item.id);
                const quantityInCart = inCart ? inCart.quantity : 0;

                return <ProductCard key={item.id} product={item} 
                    isFavorite={favorites.includes(item.id)}  onToggleFavorite={() => onToggleFavorite(item.id)}
                    addToCart={() => addToCart(item)}
                    isMaxed={quantityInCart >= item.stock}/>
            })}
        </div>
    
    );
}