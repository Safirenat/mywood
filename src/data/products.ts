// src/data/products.ts

export type ProductCategory =
  | "wood-door"
  | "glass-door"
  | "combo-door"   // 🔸 новая категория
  | "window"
  | "lounger"
  | "headrest"
  | "other";

export interface Product {
  id: string;           // ID товара
  title: string;        // Название, напр. "ДВЕРЬ ДЛЯ БАНИ ..."
  series: string;       // Серия, напр. 'СЕРИЯ "ЛЕТЯТ УТКИ"'
  sizeLabel?: string;   // Размер, напр. "1850/750"
  image: string;        // Путь к картинке
  price: number;        // Актуальная цена
  oldPrice?: number;    // Старая цена (если есть скидка)
  isHit: boolean;       // Хит продаж
  isNew: boolean;       // Новинка
  hasDiscount: boolean; // Есть скидка (%)
  category: ProductCategory;
}

// Объект: каждая категория — это свой массив товаров
export const categorizedProducts: Record<ProductCategory, Product[]> = {
  "wood-door": [
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
      id: "door-122",
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
      id: "door-221",
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
      id: "door-21",
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
      id: "door-231",
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
  ],

  "glass-door": [
    {
      id: "glass-1",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar2.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-31",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-31654",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-311123",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-332321",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-3133",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizeLabel: "1850/700",
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
  ],

  "combo-door": [
    {
      id: "combo-1",
      title:
        'ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ "Летний луг"',
      series: 'СЕРИЯ "ЛЕТНИЙ ЛУГ"',
      sizeLabel: "1850/750",
      image: "/products/test-tovar2.jpg",
      price: 9999,
      oldPrice: 13500,
      isHit: true,
      isNew: true,
      hasDiscount: true,
      category: "combo-door",
    },
    {
      id: "combo-2",
      title:
        'ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ "Горное озеро"',
      series: 'СЕРИЯ "ГОРНОЕ ОЗЕРО"',
      sizeLabel: "1850/750",
      image: "/products/test-tovar.jpg",
      price: 10490,
      oldPrice: 13900,
      isHit: false,
      isNew: true,
      hasDiscount: true,
      category: "combo-door",
    },
    {
      id: "combo-3",
      title:
        'ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ "Парус"',
      series: 'СЕРИЯ "ПАРУС"',
      sizeLabel: "1850/700",
      image: "/products/test-tovar2.jpg",
      price: 9490,
      oldPrice: 0,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "combo-door",
    },
  ],

  "window": [
    {
      id: "window-1",
      title: "ФОРТОЧКА ДЛЯ БАНИ СО СТЕКЛОПАКЕТОМ",
      series: 'СЕРИЯ "ОСЕНЬ"',
      sizeLabel: "600/600",
      image: "/products/test-tovar2.jpg",
      price: 4349,
      oldPrice: 9200,
      isHit: true,
      isNew: false,
      hasDiscount: true,
      category: "window",
    },
  ],

  "lounger": [
    {
      id: "lounger-1",
      title: "ШЕЗЛОНГ СКЛАДНОЙ ТКАНЕВЫЙ",
      series: 'СЕРИЯ "Дачный отдых"',
      sizeLabel: "1850/750",
      image: "/products/test-tovar2.jpg",
      price: 2689,
      oldPrice: undefined,
      isHit: true,
      isNew: true,
      hasDiscount: false,
      category: "lounger",
    },
  ],

  "headrest": [
    {
      id: "headrest-1",
      title: "ПОДГОЛОВНИК ДЕРЕВЯННЫЙ СЪЁМНЫЙ АНАТОМИЧЕСКИЙ",
      series: "ЛИПА",
      sizeLabel: "1850/750",
      image: "/products/test-tovar3.png",
      price: 1322,
      oldPrice: undefined,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "headrest",
    },
    {
      id: "headrest-12",
      title: "ПОДГОЛОВНИК ДЕРЕВЯННЫЙ СЪЁМНЫЙ АНАТОМИЧЕСКИЙ",
      series: "ЛИПА",
      sizeLabel: "1850/750",
      image: "/products/test-tovar4.png",
      price: 1322,
      oldPrice: undefined,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "headrest",
    },
  ],

  "other": [
    // сюда потом добавишь аксессуары и прочее
  ],
};

// Плоский список всех товаров — удобно для "Хиты" / "Новинки"
export const allProducts: Product[] = Object.values(categorizedProducts).flat();
