import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="glass-card-hover p-4 overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
              <Eye className="w-4 h-4" />
              Quick View
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
          )}
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-lg font-semibold">₹{price.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
