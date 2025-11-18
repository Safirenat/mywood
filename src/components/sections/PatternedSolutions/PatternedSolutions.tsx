import Image from "next/image";
import styles from "./PatternedSolutions.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { products } from "../../../data/products";

export default function PatternedSolutions() {
  const items = products.filter((p) => p.blocks?.includes("patterned"));

  return (
    <section className={styles.Section}>
      <div className={styles.Inner}>
        <h2 className={styles.Title}>Решения с узором</h2>

        <div className={styles.Top}>
          <Image
            src="/banners/patterned-doors.jpg"
            alt="Решения с узором"
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
              bg="pattern"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
