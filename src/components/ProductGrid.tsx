import type { Product } from "../types/product";
import { EmptyState } from "./EmptyState";
import { ProductCard } from "./ProductCard";


export function ProductGrid({products} : { products: Product[]}) {
    if (products.length === 0 ) {
            return <EmptyState message="No Products Here Yet!"/>
        } 
    return (

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map(item => <ProductCard key={item.id} product={item} /> )}
        </div>
    
    );
}