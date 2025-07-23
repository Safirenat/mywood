import s from "./product.card.module.scss";

const ProductCard = ({ product, category }) => {
  const imageClassMap = {

    'Деревянные двери': s.image_dveri,
    'Комбинированные двери': s.image_combo_dveri,
    'Форточки для бани и сауны': s.image_fortochki,
    'Абажуры для бани': s.image_abazhury,
    'Аксессуары для бани': s.image_aksessuary,
    'Спортивный инвентарь': s.image_sport,
    
  };

  const imageClass = imageClassMap[category] || '';

  return (
    <div className={s.cartWrapper}>
      <img
        className={imageClass}
        src={product.image}
        alt={product.title}
      />
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductCard;
