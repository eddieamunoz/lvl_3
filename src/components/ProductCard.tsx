
import type { Product } from "../types/product";

export function ProductCard({ product, isFavorite, onToggleFavorite, addToCart, isMaxed}: 
    { product: Product ; isFavorite: boolean ;  onToggleFavorite: () => void, addToCart: () => void; isMaxed: boolean} ) {
    return (
        <div className="max-w-xs rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 mb-5 rounded object-contain"
            />
            <button className="cursor-pointer rounded-lg" onClick={() => onToggleFavorite() }>{isFavorite === true ? "♥": "♡"}</button>
            <h2 className="font-bold text-lg">{product.title}</h2>
            {product.brand && <p className="text-sm text-gray-500 dark:text-gray-300">{product.brand}</p>}
            <p className="text-green-600 text-xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm">{product.rating}⭐</p>
            {product.stock < 10 && <p className="text-sm font-bold text-yellow-700">Low Stock</p>}
            <button className="bg-green-600 text-white px-4 py-4 rounded-lg w-full mt-auto hover:bg-green-700 transition-colors cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed" 
            disabled={isMaxed} onClick={() => addToCart()}>{isMaxed ? "Max in cart" : "Add to Cart"}
            </button>
        </div>
    );
}
