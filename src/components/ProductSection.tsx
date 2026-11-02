import type { Product } from "../types/product";
import { ProductGrid } from "./ProductGrid";

export function ProductSection ({title, products}: {title: string; products: Product[]}  ) {
    return (
        <div className="mb-10">
            <h2 className="mb-4 font-bold">{title}</h2>
                <ProductGrid products={products}/>

        </div>
    )
}