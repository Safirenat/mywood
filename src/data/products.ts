// src/data/products.ts

export type ProductCategory =
  | "wood-door"
  | "glass-door"
  | "combo-door" // 👈 НОВОЕ
  | "window"
  | "lounger"
  | "headrest"
  | "other";

export interface Product {
  id: string;          // ID товара
  title: string;       // Название
  series: string;      // Серия
  sizeLabel?: string;  // Старое одиночное поле (fallback)
  sizes?: string[];    // Несколько размеров
  image: string;       // Путь к картинке
  price: number;       // Актуальная цена
  oldPrice?: number;   // Старая цена (если есть скидка)
  isHit: boolean;      // Хит продаж
  isNew: boolean;      // Новинка
  hasDiscount: boolean;// Есть скидка (%)
  category: ProductCategory;
}

// Объект: каждая категория — свой массив товаров
export const categorizedProducts: Record<ProductCategory, Product[]> = {
  // ===== ДЕРЕВЯННЫЕ ДВЕРИ =====
  "wood-door": [
    {
      id: "wood-1",
      title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ БЕЗ ВСТАВКИ",
      series: 'СЕРИЯ "КЛАССИКА"',
      sizes: ["1850/700", "1850/800"],
      image: "/products/test-tovar.jpg",
      price: 5990,
      oldPrice: 9000,
      isHit: true,
      isNew: true,
      hasDiscount: true,
      category: "wood-door",
    },
    {
      id: "wood-2",
      title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ С КЛИНОМ",
      series: "ЛИПА",
      sizes: ["1850/700"],
      image: "/products/test-tovar2.jpg",
      price: 5490,
      isHit: false,
      isNew: false,
      hasDiscount: false,
      category: "wood-door",
    },
  ],

  // ===== СТЕКЛЯННЫЕ ДВЕРИ =====
  "glass-door": [
    {
      id: "glass-1",
      title: "ДВЕРЬ СТЕКЛЯННАЯ МАТОВАЯ",
      series: "BRONZE",
      sizes: ["1850/700"],
      image: "/products/test-tovar.jpg",
      price: 11000,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "glass-door",
    },
    {
      id: "glass-2",
      title: "ДВЕРЬ СТЕКЛЯННАЯ ПРОЗРАЧНАЯ",
      series: "CLEAR",
      sizes: ["1850/700", "1850/800"],
      image: "/products/test-tovar.jpg",
      price: 11500,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "glass-door",
    },
  ],

  // ===== КОМБИНИРОВАННЫЕ ДВЕРИ (ДЕРЕВО + СЮЖЕТНОЕ СТЕКЛО) =====
  "combo-door": [
    {
      id: "combo-1",
      title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ \"ЛЕТЯТ УТКИ\"",
      series: 'СЕРИЯ "ЛЕТЯТ УТКИ"',
      sizes: ["1850/750"],
      image: "/products/test-tovar.jpg",
      price: 6868,
      oldPrice: 15000,
      isHit: true,
      isNew: true,
      hasDiscount: true,
      category: "combo-door",
    },
    {
      id: "combo-2",
      title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ \"ЛЕТНИЙ ЛУГ\"",
      series: 'СЕРИЯ "ЛЕТНИЙ ЛУГ"',
      sizes: ["1850/750"],
      image: "/products/test-tovar.jpg",
      price: 6990,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "combo-door",
    },
    {
      id: "combo-3",
      title: "ДВЕРЬ ДЛЯ БАНИ ДЕРЕВЯННАЯ СО СТЕКЛЯННОЙ ВСТАВКОЙ \"ГОРНОЕ ОЗЕРО\"",
      series: 'СЕРИЯ "ГОРНОЕ ОЗЕРО"',
      sizes: ["1850/750"],
      image: "/products/test-tovar.jpg",
      price: 7190,
      isHit: false,
      isNew: true,
      hasDiscount: false,
      category: "combo-door",
    },
  ],

  // ===== ФОРТОЧКИ =====
  "window": [
    {
      id: "window-1",
      title: "ФОРТОЧКА ДЛЯ БАНИ СО СТЕКЛОПАКЕТОМ",
      series: 'СЕРИЯ "ОСЕНЬ"',
      sizes: ["300/300", "300/400", "400/300", "400/400", "450/450", "500/500", "600/600"],
      image: "/products/fortochka-osen.jpg",
      price: 4349,
      oldPrice: 9200,
      isHit: true,
      isNew: false,
      hasDiscount: true,
      category: "window",
    },
    {
      id: "window-2",
      title: "ФОРТОЧКА ДЛЯ БАНИ СО СТЕКЛОПАКЕТОМ",
      series: 'СЕРИЯ "ЗИМА"',
      sizes: ["300/300", "300/400", "400/300", "400/400", "450/450", "500/500", "600/600"],
      image: "/products/fortochka-zima.jpg",
      price: 4349,
      oldPrice: 9200,
      isHit: true,
      isNew: false,
      hasDiscount: true,
      category: "window",
    },
  ],

  // ===== ШЕЗЛОНГИ =====
  "lounger": [
    {
      id: "lounger-1",
      title: "ШЕЗЛОНГ СКЛАДНОЙ ТКАНЕВЫЙ",
      series: 'СЕРИЯ "ДАЧНЫЙ ОТДЫХ"',
      sizes: ["1850/750"],
      image: "/products/shezlong-tkan.png",
      price: 2689,
      oldPrice: undefined,
      isHit: true,
      isNew: true,
      hasDiscount: false,
      category: "lounger",
    },
  ],

  // ===== ПОДГОЛОВНИКИ =====
  "headrest": [
    {
      id: "headrest-1",
      title: "ПОДГОЛОВНИК ДЕРЕВЯННЫЙ АНАТОМИЧЕСКИЙ",
      series: "ЛИПА",
      sizes: ["100/100"],
      image: "/products/podgolovnik-anotomik.png",
      price: 1322,
      oldPrice: undefined,
      isHit: true,
      isNew: false,
      hasDiscount: false,
      category: "headrest",
    },
  ],

  // ===== ПРОЧЕЕ =====
  "other": [
    // сюда потом добавим аксессуары и т.п.
  ],
};

// Плоский список всех товаров — удобно для "Хиты" / "Новинки"
export const allProducts: Product[] = Object.values(categorizedProducts).flat();
