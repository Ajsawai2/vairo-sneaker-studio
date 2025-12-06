import { Link } from 'react-router-dom';
import { Shield, IndianRupee, Truck, RefreshCcw, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import heroSneaker from '@/assets/hero-sneaker.png';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Every sneaker goes through rigorous quality checks to ensure it meets our high standards.',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Luxury',
      description: 'Experience the look and feel of branded sneakers without breaking the bank.',
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Same-day delivery in Nagpur. Quick shipping across India.',
    },
    {
      icon: RefreshCcw,
      title: 'Easy Returns',
      description: 'Not satisfied? Return within 7 days for a full refund.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                India's Premium<br />
                <span className="text-muted-foreground">Replica Sneaker</span><br />
                Marketplace
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                VAIRO was founded with a simple mission: to make premium-looking sneakers 
                accessible to everyone. We believe style shouldn't come with an outrageous price tag.
              </p>
              <Link to="/products" className="btn-primary inline-block">
                Explore Collection
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-pink via-glow-blue to-glow-purple opacity-30 blur-3xl rounded-full" />
              <img
                src={heroSneaker}
                alt="Premium Sneaker"
                className="relative w-full max-w-md mx-auto float-animation product-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At VAIRO, we're passionate about sneaker culture. We understand that not everyone 
              can afford to pay retail prices for the latest drops. That's why we curate the finest 
              quality replicas that look, feel, and perform just like the originals. Our commitment 
              to quality means you can walk with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VAIRO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card-hover hover-glow p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">hello@vairo.in</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Nagpur, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
