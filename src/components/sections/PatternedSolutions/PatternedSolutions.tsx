"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PatternedSolutions.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { categorizedProducts, type Product } from "../../../data/products";

export default function PatternedSolutions() {
  const [randomItems, setRandomItems] = useState<Product[]>([]);

  useEffect(() => {
    // Берём все деревянные двери + форточки
    const source: Product[] = [
      ...(categorizedProducts["wood-door"] ?? []),
      ...(categorizedProducts["window"] ?? []),
    ];

    if (source.length === 0) return;

    // Перемешиваем и берём максимум 4
    const shuffled = [...source].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 4);

    // setState вызываем НЕ синхронно,
    // а из колбэка — React перестаёт ругаться
    const timerId = window.setTimeout(() => {
      setRandomItems(selected);
    }, 0);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

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
          {randomItems.map((product) => (
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
