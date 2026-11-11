import type { Product } from "../types/product";
import { ProductGrid } from "./ProductGrid";
import type { CartItem } from "../types/cart";


export function ProductSection ({ title, products, favorites, cart, onToggleFavorite, addToCart }: 
    { title: string; products: Product[]; favorites: number[]; cart: CartItem[]; onToggleFavorite: (id: number) => void; addToCart: (product: Product) => void } ) {
    return (
        <div className="mb-10">
            <h2 className="mb-4 font-bold">{title}</h2>
                <ProductGrid products={products} favorites={favorites} cart={cart} onToggleFavorite={onToggleFavorite}
                    addToCart={addToCart}/>

        </div>
    )
}