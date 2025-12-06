import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  
  // Mock cart data
  const cartItems = [
    { productId: '1', size: 9, quantity: 1 },
    { productId: '3', size: 10, quantity: 2 },
  ];

  const getProduct = (id: string) => products.find(p => p.id === id);

  const subtotal = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal > 5000 ? 0 : 99;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully!');
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/cart" className="text-muted-foreground hover:text-foreground">Cart</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Checkout</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipping Details Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Nagpur"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">PIN Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="440001"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    paymentMethod === 'online' ? 'bg-primary/10 ring-2 ring-primary' : 'bg-secondary hover:bg-muted'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                      className="w-5 h-5"
                    />
                    <div>
                      <p className="font-medium">Pay Online</p>
                      <p className="text-sm text-muted-foreground">UPI, Card, Net Banking</p>
                    </div>
                  </label>
                  <label className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'bg-primary/10 ring-2 ring-primary' : 'bg-secondary hover:bg-muted'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="w-5 h-5"
                    />
                    <div>
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card hover-glow p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const product = getProduct(item.productId);
                    if (!product) return null;
                    return (
                      <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                        <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{product.name}</p>
                          <p className="text-xs text-muted-foreground">Size: UK {item.size} × {item.quantity}</p>
                          <p className="text-sm font-medium">₹{(product.price * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-border pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-3 border-t border-border">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button onClick={handlePlaceOrder} className="btn-primary w-full">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
