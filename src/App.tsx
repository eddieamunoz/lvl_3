// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { ProductGrid } from "./components/ProductGrid";
import { products } from "./data/products";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"



function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Navbar />
      <ProductGrid products={products}/>
      <Footer companyName="SummitGear Market"/>
    </main>
  );
}

export default App;
