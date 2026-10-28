// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ProductSection } from "./components/ProductSection";
import { StatsBar } from "./components/StatsBar";




function App() {
  const deals = products.filter(product => product.price < 20);
  const furniture = products.filter(product => product.category === "furniture");
  const topRated = products.filter(product => product.rating >= 4.5 && product.stock > 0);
  const over5k = products.filter(product => product.price > 5000);
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Navbar />
      <StatsBar products={products}/>
      <ProductSection title="Deals under $20" products={deals}/>
      <ProductSection title="Top Rated" products={topRated}/>
      <ProductSection title="Furniture" products={furniture}/>
      <ProductSection title="Luxury (over $5,000)" products={over5k}/>
      <Footer companyName="SummitGear Market"/>
    </main>
  );
}

export default App;
