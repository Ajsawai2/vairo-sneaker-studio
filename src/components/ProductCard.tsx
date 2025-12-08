import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <LiquidGlassCard 
        className="p-4 overflow-hidden glow-multi"
        intensity="medium"
        hover3D={true}
        glowColor="multi"
      >
        {/* Image Container */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-secondary/50">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Quick View Overlay */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span 
              className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium liquid-shimmer"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Eye className="w-4 h-4" />
              Quick View
            </motion.span>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
          )}
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-lg font-semibold">₹{price.toLocaleString('en-IN')}</p>
        </div>
      </LiquidGlassCard>
    </Link>
  );
};

export default ProductCard;