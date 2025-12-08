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
      <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-0">
        {/* Big background text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <span className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-muted-foreground/5 leading-none tracking-tighter whitespace-nowrap">
            KICKS
          </span>
        </div>
        
        <div className="section-container w-full">
          <div className="relative flex flex-col-reverse lg:flex-row lg:items-center gap-4 md:gap-8 lg:gap-0">
            {/* Left - Text (higher z-index) */}
            <div className="relative z-20 space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                LOOK<br />
                ORIGINAL.<br />
                <span className="text-muted-foreground">PAY LESS.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                Premium replica sneakers that look and feel original. 
                India's trusted marketplace for quality kicks.
              </p>
              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/products" className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                  Shop Now
                </Link>
                <Link to="/categories" className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                  Browse Categories
                </Link>
              </div>
            </div>

            {/* Right - Hero Sneaker */}
            <div className="relative z-30 lg:w-1/2 flex justify-center lg:justify-end lg:-ml-32">
              <img 
                src={heroSneaker} 
                alt="Premium Sneaker" 
                className="w-[140%] max-w-none sm:w-[130%] md:w-full md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl scale-100 md:scale-105 lg:scale-110 float-animation drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)] md:drop-shadow-[0_50px_80px_rgba(0,0,0,0.3)] object-contain" 
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