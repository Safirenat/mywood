import { categorizedProducts } from '../../data/products'
import ProductCard from '../../components/products/product.card'
import s from "./category.module.scss";
import Link from 'next/link';


// Статическая генерация всех возможных категорий
export function generateStaticParams() {
  const categories = Object.keys(categorizedProducts)

  return categories.map(category => ({
    
    category: encodeURIComponent(category),

  }))
}

const CategoryPage = ({ params }) => {
  const decodedCategory = decodeURIComponent(params.category);
  const products = categorizedProducts[decodedCategory] || []

  return (
    <div >

      <Link href="/#categories">
        <button className={s.backButton}>← Назад к категориям</button>
      </Link>
      <h1 >Товары: {decodedCategory}</h1>

      {products.length > 0 ? (
        <div className = { s.test }>
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} category={decodedCategory} />
          ))}
        </div>
      ) : (
        <p>Нет товаров в этой категории.</p>
      )}
    </div>
  )
}

export default CategoryPage

