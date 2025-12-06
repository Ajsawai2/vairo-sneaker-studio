import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="section-container py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = [product.image, product.image, product.image]; // Placeholder for multiple images

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    toast.success('Added to cart!');
  };

  const gradeColors = {
    A: 'bg-green-100 text-green-800',
    B: 'bg-yellow-100 text-yellow-800',
    C: 'bg-orange-100 text-orange-800',
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative glass-card p-8 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-pink via-transparent to-glow-blue opacity-20 rounded-2xl" />
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain relative z-10 float-animation"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveImage(i => (i > 0 ? i - 1 : images.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImage(i => (i < images.length - 1 ? i + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === index ? 'border-primary' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain bg-secondary" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground text-sm">Sold by {product.seller}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${gradeColors[product.grade]}`}>
                  Grade {product.grade}
                </span>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="font-medium mb-3">Select Size (UK)</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-xl font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-muted'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button onClick={handleAddToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-medium mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    category={p.category}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
