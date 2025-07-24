import { categorizedProducts } from '../../data/products'
import ProductCard from '../../components/products/product.card'
import s from "./category.module.scss";
import Link from 'next/link';

const categoryNames = {
  'derevyannye-dveri': 'Деревянные двери',
  'kombinirovannye-dveri': 'Комбинированные двери',
  'steklyannye-dveri': 'Стеклянные двери',
  'fortochki': 'Форточки для бани и сауны',
  'abazhury': 'Абажуры для бани',
  'sportinventar': 'Спортивный инвентарь',
  'aksessuary': 'Аксессуары для бани',
};

// Статическая генерация путей
export const teStaticParams = () => [
  { category: 'derevyannye-dveri' },
  { category: 'kombinirovannye-dveri' },
  { category: 'steklyannye-dveri' },
  { category: 'fortochki' },
  { category: 'abazhury' },
  { category: 'sportinventar' },
  { category: 'aksessuary' }
];

// 🔥 Обязательно: await params
export default async function CategoryPage(props) {
  const { category } = await props.params;

  const products = categorizedProducts[category] || [];

  return (
    <div className={s.wrapper}>
      <Link href="/#categories">
        <button className={s.backButton}>← Назад к категориям</button>
      </Link>

      {/* <h1 className={s.title}>Товары: {category}</h1> */}
      <h1 className={s.title}>Товары: {categoryNames[category] || category}</h1>


      {products.length > 0 ? (
        <div className={s.test}>
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} category={category} />
          ))}
        </div>
      ) : (
        <p>Нет товаров в этой категории.</p>
      )}
    </div>
  );
}