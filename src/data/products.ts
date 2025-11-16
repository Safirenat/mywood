export type ProductCategory =
  | "wood-door"
  | "glass-door"
  | "window"
  | "lounger"
  | "headrest"
  | "other";

export interface Product {
  id: string;
  title: string;        // ДВЕРЬ ДЛЯ БАНИ ...
  series: string;       // СЕРИЯ "ЛЕТЯТ УТКИ"
  sizeLabel?: string;   // 1850/750
  image: string;        // путь к картинке
  price: number;        // актуальная цена
  oldPrice?: number;    // зачёркнутая цена (если есть скидка)
  isHit: boolean;       // хит продаж
  isNew: boolean;       // новинка
  hasDiscount: boolean; // есть скидка (%)
  category: ProductCategory;
}

// временная "база данных" — потом можно будет заменить на API/Strapi
export const products: Product[] = [
  {
    id: "door-1",
    title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ",
    series: 'СЕРИЯ "ЛЕТЯТ УТКИ"',
    sizeLabel: "1850/750",
    image: "/products/test-tovar.jpg",
    price: 6868,
    oldPrice: 15000,
    isHit: true,
    isNew: true,
    hasDiscount: true,
    category: "wood-door",
  },
  {
    id: "window-1",
    title: "ФОРТОЧКА ДЛЯ БАНИ СО СТЕКЛОПАКЕТОМ",
    series: 'СЕРИЯ "ОСЕНЬ"',
    sizeLabel: "600/600",
    image: "/products/test-tovar.jpg",
    price: 4349,
    oldPrice: 9200,
    isHit: true,
    isNew: false,
    hasDiscount: true,
    category: "window",
  },
  {
    id: "lounger-1",
    title: "ШЕЗЛОНГ СКЛАДНОЙ ТКАНЕВЫЙ",
    series: 'СЕРИЯ "Дачный отдых"',
    // sizeLabel: undefined,
    sizeLabel: "1850/750",
    image: "/products/test-tovar.jpg",
    price: 2689,
    oldPrice: undefined,
    isHit: true,
    isNew: true,
    hasDiscount: false,
    category: "lounger",
  },
  {
    id: "headrest-1",
    title: "ПОДГОЛОВНИК ДЕРЕВЯННЫЙ СЪЁМНЫЙ АНАТОМИЧЕСКИЙ",
    series: "ЛИПА",
    // sizeLabel: undefined,
    sizeLabel: "1850/750",
    image: "/products/test-tovar.jpg",
    price: 1322,
    oldPrice: undefined,
    isHit: true,
    isNew: false,
    hasDiscount: false,
    category: "headrest",
  },
];
