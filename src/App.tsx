// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ProductSection } from "./components/ProductSection";
import { StatsBar } from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { ProductGrid } from "./components/ProductGrid";
import type { CartItem } from "./types/cart";
import type { Product } from "./types/product";


function App() {
  const deals = products.filter(product => product.price < 20);
  const topRated = products.filter(product => product.rating >= 4.5 && product.stock > 0);
  const over5k = products.filter(product => product.price > 5000);
  const groups = groupByCategory(products);
  const [searchText, setSearchText] = useState("");
  const searchResults = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [favorites,setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartCount = cart.reduce((acc, curVal) => acc + curVal.quantity ,0)

  function toggleFavorite(id: number) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  function addToCart(product: Product) {
    if (cart.some((item) => item.product.id === product.id)) {
      setCart(cart.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setCart([...cart, {product, quantity: 1}]);
    }
  }

  return (
    <main className={`min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-8 ${theme === "dark" ? "dark" :""}`}>
      <Navbar theme={theme} setTheme={setTheme} favoriteCount={favorites.length} cartCount={cartCount} />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <p className="mb-4">Showing {searchResults.length} of {products.length} </p>
      <ProductGrid products={searchResults} favorites={favorites} onToggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart}/>
      <StatsBar products={products}/>
      <ProductSection title="Deals under $20" products={deals} favorites={favorites} onToggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart}/>
      <ProductSection title="Top Rated" products={topRated} favorites={favorites} onToggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart}/>
      <ProductSection title="Luxury (over $5,000)" products={over5k} favorites={favorites} onToggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart}/>
      <h2 className="mb-4 text-2xl font-bold">Shop by category</h2>
      {Object.entries(groups).map(([category, items]) => (
        <ProductSection
          key={category}
          title={`${category[0].toUpperCase() + category.slice(1)} (${items.length})`}
          products={items} favorites={favorites} onToggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart}
        />
      ))}
      <Footer companyName="SummitGear Market"/>
    </main>
  );
}

export default App;
