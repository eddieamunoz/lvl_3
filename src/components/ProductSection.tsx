import type { Product } from "../types/product";
import { ProductGrid } from "./ProductGrid";

export function ProductSection ({ title, products, favorites, onToggleFavorite }: { title: string; products: Product[]; favorites: number[]; onToggleFavorite: (id: number) => void } ) {
    return (
        <div className="mb-10">
            <h2 className="mb-4 font-bold">{title}</h2>
                <ProductGrid products={products} favorites={favorites} onToggleFavorite={onToggleFavorite}/>

        </div>
    )
}