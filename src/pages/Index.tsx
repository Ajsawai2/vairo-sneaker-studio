import { Link } from 'react-router-dom';
import { Shield, IndianRupee, Truck, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import FloatingElement from '@/components/FloatingElement';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Big background text */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] font-black text-muted-foreground/5 leading-none tracking-tighter whitespace-nowrap">
            KICKS
          </span>
        </motion.div>
        
        <div className="section-container w-full">
          <div className="relative lg:flex-row lg:items-center gap-8 lg:gap-0 items-start justify-end flex flex-row">
            {/* Left - Text (higher z-index) */}
            <motion.div 
              className="relative z-20 space-y-8 lg:w-1/2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="hero-title">
                LOOK<br />
                ORIGINAL.<br />
                <span className="text-muted-foreground">PAY LESS.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Premium replica sneakers that look and feel original. 
                India's trusted marketplace for quality kicks.
              </p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link to="/products" className="btn-primary liquid-shimmer">
                  Shop Now
                </Link>
                <Link to="/categories" className="btn-secondary">
                  Browse Categories
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Hero Sneaker with 3D floating effect */}
            <div className="relative z-30 lg:w-1/2 flex justify-center lg:justify-end -ml-20 lg:-ml-32">
              <FloatingElement amplitude={25} duration={5}>
                <motion.img 
                  src={heroSneaker} 
                  alt="Premium Sneaker" 
                  className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl scale-110 drop-shadow-[0_50px_80px_rgba(0,0,0,0.3)] object-contain"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1.1, rotateY: 0 }}
                  transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                />
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="section-container">
          <LiquidGlassCard className="p-8 md:p-12" intensity="high" hover3D={false}>
            <motion.h2 
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Shop by Category
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.div key={category.slug} variants={itemVariants}>
                  <CategoryCard {...category} />
                </motion.div>
              ))}
            </motion.div>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Popular Sneakers Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Popular Sneakers
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/products" className="btn-ghost text-muted-foreground hover:text-foreground">
                View All →
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {popularProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose VAIRO Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.h2 
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose VAIRO?
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <LiquidGlassCard 
                  className="p-8 text-center glow-multi"
                  intensity="medium"
                  hover3D={true}
                  glowColor="multi"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;