import Image from "next/image";
import styles from "./GlassDoors.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { products } from "../../../data/products";

export default function GlassDoors() {
  const items = products.filter((p) => p.blocks?.includes("glass-doors"));

  return (
    <section className={styles.Section}>
      <div className={styles.Inner}>
        <h2 className={styles.Title}>Двери стеклянные</h2>

        <div className={styles.Top}>
          <Image
            src="/banners/glass-doors.jpg"
            alt="Двери стеклянные"
            width={1200}
            height={500}
          />

          <button className={styles.Button}>перейти к товарам</button>
        </div>

        <div className={styles.Bottom}>
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="compact"
              bg="glass"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
