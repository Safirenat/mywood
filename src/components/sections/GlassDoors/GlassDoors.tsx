"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./GlassDoors.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { categorizedProducts } from "../../../data/products";

export default function GlassDoors() {
  const allItems = categorizedProducts["glass-door"];
  const [randomItems, setRandomItems] = useState<typeof allItems>([]);

  useEffect(() => {
    if (!allItems || allItems.length === 0) return;

    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 4);

    const timerId = window.setTimeout(() => {
      setRandomItems(selected);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [allItems]);

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
          {randomItems.map((product) => (
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
