import s from "./product.card.module.scss";

const ProductCard = ({ product, category }) => {
  const imageClassMap = {
  'derevyannye-dveri': s.image_dveri,
  'kombinirovannye-dveri': s.image_combo_dveri,
  'fortochki': s.image_fortochki,
  'abazhury': s.image_abazhury,
  'aksessuary': s.image_aksessuary,
  'sportinventar': s.image_sport,
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
