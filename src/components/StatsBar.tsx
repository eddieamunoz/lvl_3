
import type { Product } from "../types/product";

export function StatsBar({products}: {products: Product[]}) {
    const totalStock = products.reduce((sum, p) => sum + p.stock , 0);
    const value = products.reduce((sum, p) => (sum + p.price * p.stock)  , 0);
    const avgRating = products.reduce((sum, p) => sum + p.rating / products.length, 0);
    const lowStock = products.filter(p => (p.stock < 10))

    return (
        
        <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className= "max-w-xs rounded-lg border bg-white p-4">
                <h2 className="text-sm text-gray-600 font-bold">Total Stock</h2>
                <p className="text-lg font-bold">{totalStock.toLocaleString()}</p>
            </div>

            <div className="max-w-xs rounded-lg border bg-white p-4">
                <h2 className="text-sm text-gray-600 font-bold">Total Value</h2>
                <p className="text-lg font-bold">${value.toLocaleString()}</p>
            </div>

            <div className="max-w-xs rounded-lg border bg-white p-4">
                <h2 className="text-sm text-gray-600 font-bold">Average Rating</h2>
                <p className="text-lg text-green-600 font-bold">{avgRating.toFixed(1)}</p>
            </div>

            <div className="max-w-xs rounded-lg border bg-white p-4">
                <h2 className="text-sm text-gray-600 font-bold">Low Stock</h2>
                <p className="text-lg text-yellow-700 font-bold">{lowStock.length} Products</p>
            </div>
        </div>

    )
}