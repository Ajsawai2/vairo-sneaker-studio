import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
}

const CategoryCard = ({ name, image, slug }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${slug}`} className="group">
      <div className="glass-card-hover hover-glow p-6 text-center">
        <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-secondary/50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
        <h3 className="font-medium text-foreground">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
