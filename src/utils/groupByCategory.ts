
import type { Product } from "../types/product";

export function groupByCategory(products: Product[]): Record<string, Product[]> {
    return  products.reduce((groups, p) => {
        if (!groups[p.category]) {
            groups[p.category] = [];
        }

        groups[p.category].push(p);
            return groups;

     }, {} as Record<string, Product[]>)
}