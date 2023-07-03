import { useState, useEffect } from "react";
import { Header } from "./Components/header/Header";
import { Collections } from "./Components/collections/Collections";
import { productsCollections } from "./data/productCollections";

function App() {
  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [activeSection, setActiveSection] = useState("collections");
  const [contentCart, setContentCart] = useState(initialCart);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setContentCart(storedCart);
  }, []);

  return (
    <main className={`w-full h-full mb-8`}>
      <Header
        contentCart={contentCart}
        setContentCart={setContentCart}
        setActiveSection={setActiveSection}
        product={selectedProduct}
      />

      {activeSection && (
        <Collections
          productsCollections={productsCollections}
          activeSection={activeSection}
          setSelectedProduct={setSelectedProduct}
          contentCart={contentCart}
          setContentCart={setContentCart}
        />
      )}
    </main>
  );
}

export default App;
