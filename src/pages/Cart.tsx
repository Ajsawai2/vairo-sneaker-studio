import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getProduct = (id: string) => products.find(p => p.id === id);

  const subtotal = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal > 5000 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="section-container py-24 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any sneakers yet.</p>
          <Link to="/products" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Cart</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const product = getProduct(item.productId);
                if (!product) return null;

                return (
                  <div key={`${item.productId}-${item.size}`} className="glass-card p-4 md:p-6">
                    <div className="flex gap-4 md:gap-6">
                      {/* Image */}
                      <Link to={`/product/${product.id}`} className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-xl overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link to={`/product/${product.id}`}>
                              <h3 className="font-medium hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-muted-foreground">Size: UK {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          {/* Quantity */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(index, -1)}
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, 1)}
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="text-lg font-semibold">
                            ₹{(product.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card hover-glow p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders above ₹5,000
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Link to="/checkout" className="btn-primary w-full text-center block">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;