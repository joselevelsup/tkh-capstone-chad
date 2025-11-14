
export default Home;

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryTeaser from './components/CategoryTeaser';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css'; // Your main styles

function HomePage() {
  return (
    <div className="homepage">
      {/* 1. Global Navigation */}
      <Navbar /> 

      {/* 2. Primary Feature Area */}
      <HeroBanner 
        title="Elevate Your Style" 
        ctaText="Shop New Arrivals" 
        link="/shop" 
      />

      {/* 3. Featured Categories */}
      <section className="featured-categories">
        <h2>Shop By Category</h2>
        <CategoryTeaser categoryName="Dresses" imageSrc="" link="/shop/dresses" />
        <CategoryTeaser categoryName="Outerwear" imageSrc="" link="/shop/outerwear" />
        {/* ... more teasers */}
      </section>

      {/* 4. Featured Products */}
      <section className="featured-products">
        <h2>Top Sellers</h2>
        <ProductGrid products={/* array of product objects */} />
      </section>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;