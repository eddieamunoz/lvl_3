
import type { Product } from "../types/product";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className= "max-w-xs rounded-lg border bg-white p-4">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 mb-5 rounded object-contain"
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            {product.brand && <p className="text-sm text-gray-500">{product.brand}</p>}
            <p className="text-green-600 text-xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm">{product.rating}⭐</p>
        </div>
    );
}
