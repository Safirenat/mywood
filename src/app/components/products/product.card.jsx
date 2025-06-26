import s from "./product.card.module.scss";


const ProductCard = ({ product }) => (

  <div className = { s.cartWrapper }>

    <img  src={product.image} alt={product.title} />
    <h2 >{product.title}</h2>

  </div>

)

export default ProductCard
