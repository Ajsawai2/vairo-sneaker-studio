import { Link } from 'react-router-dom';
import { Shield, IndianRupee, Truck, RefreshCcw } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import heroSneaker from '@/assets/hero-sneaker.png';
import { products, categories } from '@/data/products';
const Index = () => {
  const popularProducts = products.slice(0, 4);
  const features = [{
    icon: Shield,
    title: 'Quality Replica',
    description: 'Highest standard materials and craftsmanship'
  }, {
    icon: IndianRupee,
    title: 'Affordable Prices',
    description: 'Branded look at a fraction of the cost'
  }, {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in Nagpur'
  }, {
    icon: RefreshCcw,
    title: 'Easy Returns',
    description: 'Hassle-free return process'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Big background text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] font-black text-muted-foreground/5 leading-none tracking-tighter whitespace-nowrap">
            KICKS
          </span>
        </div>
        
        <div className="section-container w-full">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-0">
            {/* Left - Text (higher z-index) */}
            <div className="relative z-20 space-y-8 animate-fade-in lg:w-1/2">
              <h1 className="hero-title">
                LOOK<br />
                ORIGINAL.<br />
                <span className="text-muted-foreground">PAY LESS.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Premium replica sneakers that look and feel original. 
                India's trusted marketplace for quality kicks.
              </p>
              <div className="flex gap-4">
                <Link to="/products" className="btn-primary">
                  Shop Now
                </Link>
                <Link to="/categories" className="btn-secondary">
                  Browse Categories
                </Link>
              </div>
            </div>

            {/* Right - Hero Sneaker */}
            <div className="relative z-10 lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src={heroSneaker} 
                alt="Premium Sneaker" 
                className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl float-animation drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {categories.map((category, index) => <div key={category.slug} className="animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CategoryCard {...category} />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Sneakers Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">Popular Sneakers</h2>
            <Link to="/products" className="btn-ghost text-muted-foreground hover:text-foreground">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {popularProducts.map((product, index) => <div key={product.id} className="animate-slide-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose VAIRO Section */}
      <section className="py-24">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose VAIRO?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={feature.title} className="glass-card-hover hover-glow p-8 text-center animate-scale-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;