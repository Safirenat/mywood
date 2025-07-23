import { categorizedProducts } from '../../data/products'
import ProductCard from '../../components/products/product.card'
import s from "./category.module.scss";
import Link from 'next/link';


// Обязательно: генерация статических путей для всех категорий
export function generateStaticParams() {
  const categories = Object.keys(categorizedProducts);

  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }));
}

// Главный компонент страницы категории
const CategoryPage = ({ params }) => {
  const decodedCategory = decodeURIComponent(params.category);
  const products = categorizedProducts[decodedCategory] || [];

  return (
    <div className={s.wrapper}>
      <Link href="/#categories">
        <button className={s.backButton}>← Назад к категориям</button>
      </Link>

      <h1 className={s.title}>Товары: {decodedCategory}</h1>

      {products.length > 0 ? (
        <div className={s.productsGrid}>
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} category={decodedCategory} />
          ))}
        </div>
      ) : (
        <p>Нет товаров в этой категории.</p>
      )}
    </div>
  );
};

export default CategoryPage;
