import Image from "next/image";
import styles from "./CategoryCircles.module.scss";

const categories = [
  {
    id: 1,
    title: "стеклянные двери",
    image: "/CategoryCircles/glass-door.svg",
  },
  {
    id: 2,
    title: "комбинированные двери",
    image: "/CategoryCircles/wood-door.svg",
  },
  {
    id: 3,
    title: "деревянные двери",
    image: "/CategoryCircles/wood-door.svg",
  },
  {
    id: 4,
    title: "форточки",
    image: "/CategoryCircles/window.svg",
  },
  {
    id: 5,
    title: "шезлонги",
    image: "/CategoryCircles/chair.svg",
  },
  {
    id: 6,
    title: "подголовники",
    image: "/CategoryCircles/headrest.svg",
  },
  {
    id: 7,
    title: "прочее",
    image: "/CategoryCircles/other.svg",
  },
  {
    id: 8,
    title: "скидки",
    image: "/CategoryCircles/sale.svg",
  },
];

export default function CategoryCircles() {
  return (
    <section className={styles.Categories}>
      <div className={styles.Inner}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.Item}>
            <div className={styles.Circle}>
              <Image
                src={cat.image}
                alt={cat.title}
                width={80}
                height={80}
              />
            </div>
            <p className={styles.Label}>{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
