import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Categories</span>
          </nav>

          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Explore our curated collection of premium replica sneakers across all major brands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
