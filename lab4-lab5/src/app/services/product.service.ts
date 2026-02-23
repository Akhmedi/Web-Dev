import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  products: Product[] = [
    // --- Смартфоны (categoryId: 1) ---
    {
      id: 1,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 14 Pro 128GB',
      description: 'Смартфон Apple с чипом A16 Bionic, динамическим островом и камерой 48 МП.',
      price: 609990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h13/64437812232222.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h13/64437812232222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h67/64437818130462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hda/hcc/64437821112350.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-chernyi-106363245/?c=750000000'
    },
    {
      id: 2,
      categoryId: 1,
      likes: 0,
      name: 'Samsung Galaxy S23 Ultra 256GB',
      description: 'Флагман Samsung с S Pen, камерой 200 МП и мощным процессором Snapdragon 8 Gen 2.',
      price: 519990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pb7/92599484.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pb7/92599484.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pb7/92599484.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pb7/92599484.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-256gb-chernyi-104598291/?c=750000000'
    },
    {
      id: 3,
      categoryId: 1,
      likes: 0,
      name: 'Xiaomi 13 Pro 256GB',
      description: 'Флагман Xiaomi с камерой Leica, зарядкой 120W и AMOLED дисплеем 120 Гц.',
      price: 189990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h9c/86597718605854.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h9c/86597718605854.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h58/86597718638622.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/h8a/86597718671390.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-13-pro-12-gb-256-gb-belyi-109329947/?srsltid=AfmBOooVUO2iZsdofsXFLvOtO1jydDQsD6YpFjUFKTeY9MKhy6-MXk9G'
    },
    {
      id: 4,
      categoryId: 1,
      likes: 0,
      name: 'Google Pixel 8 Pro 128GB',
      description: 'Смартфон Google с чипом Tensor G3, AI-функциями и лучшей камерой среди Android.',
      price: 249990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h2c/86175379030046.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hb7/85988322869278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hd1/85988322967582.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000'
    },
    {
      id: 5,
      categoryId: 1,
      likes: 0,
      name: 'OnePlus 12 256GB',
      description: 'Смартфон OnePlus с Snapdragon 8 Gen 3, зарядкой 100W и камерой Hasselblad.',
      price: 359990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000'
    },

    // --- Ноутбуки (categoryId: 2) ---
    {
      id: 6,
      categoryId: 2,
      likes: 0,
      name: 'Apple MacBook Air M2 256GB',
      description: 'Ноутбук Apple с чипом M2, 13.6" Liquid Retina дисплеем и до 18 часов работы.',
      price: 439990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 7,
      categoryId: 2,
      likes: 0,
      name: 'ASUS ROG Strix G16 RTX 4060',
      description: 'Игровой ноутбук с RTX 4060, Intel i9, 16" QHD 240 Гц и 16 ГБ RAM.',
      price: 909990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h88/70303438012446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hdc/70303438536734.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000'
    },
    {
      id: 8,
      categoryId: 2,
      likes: 0,
      name: 'Lenovo ThinkPad X1 Carbon Gen 11',
      description: 'Бизнес-ноутбук с Intel Core i7, 14" IPS, весом 1.12 кг и защитой MIL-SPEC.',
      price: 1999999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/p96/69498982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p96/69498982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p97/69498983.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p97/69498984.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-13-aura-edition-14-32-gb-m-2-1024-gb-win-11-pro-21nx00f8fw-147042340/?c=750000000'
    },
    {
      id: 9,
      categoryId: 2,
      likes: 0,
      name: 'HP Spectre x360 14',
      description: 'Трансформер HP с OLED дисплеем, Intel Core i7 13-го поколения и сенсорным экраном.',
      price: 679990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc9/p5b/24177957.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p5b/24177958.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-2-in-1-16-aa0004ci-16-16-gb-ssd-512-gb-win-11-home-b6st5ea-134505376/?c=750000000'
    },
    {
      id: 10,
      categoryId: 2,
      likes: 0,
      name: 'Dell XPS 15 9530',
      description: 'Премиум-ноутбук Dell с OLED 3.5K дисплеем, RTX 4060 и Intel Core i9.',
      price: 1299990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/h1d/64860298412062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/h86/64860307390494.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000'
    },

    // --- Наушники (categoryId: 3) ---
    {
      id: 11,
      categoryId: 3,
      likes: 0,
      name: 'Apple AirPods Pro 2',
      description: 'TWS наушники с активным шумоподавлением H2, адаптивным звуком и MagSafe зарядкой.',
      price: 103990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 12,
      categoryId: 3,
      likes: 0,
      name: 'Sony WH-1000XM6',
      description: 'Полноразмерные наушники Sony с лучшим в классе ANC, 30 часами работы и LDAC.',
      price: 193990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/pf0/43642092.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pf0/43642092.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/pf0/43642093.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pea/pf0/43642095.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-belyi-140045236/?c=750000000'
    },
    {
      id: 13,
      categoryId: 3,
      likes: 0,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Компактные TWS наушники Samsung с ANC, Hi-Fi звуком 24bit и интеграцией с Galaxy.',
      price: 182990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64496884776990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h4b/64496891822110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000'
    },
    {
      id: 14,
      categoryId: 3,
      likes: 0,
      name: 'Bose QuietComfort 45',
      description: 'Наушники Bose с режимами ANC и Aware, комфортной посадкой и 24ч автономностью.',
      price: 119990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000'
    },
    {
      id: 15,
      categoryId: 3,
      likes: 0,
      name: 'JBL Tune 770NC',
      description: 'Беспроводные наушники JBL с ANC, Pure Bass звуком и 70 часами работы.',
      price: 44990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=750000000'
    },

    // --- Планшеты (categoryId: 4) ---
    {
      id: 16,
      categoryId: 4,
      likes: 0,
      name: 'Apple iPad Pro 12.9" M2 256GB',
      description: 'Планшет Apple с чипом M2, ProMotion 120 Гц, mini-LED дисплеем и поддержкой Apple Pencil.',
      price: 659990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000'
    },
    {
      id: 17,
      categoryId: 4,
      likes: 0,
      name: 'Samsung Galaxy Tab S9 Ultra 256GB',
      description: 'Планшет Samsung с 14.6" AMOLED дисплеем, S Pen в комплекте и Snapdragon 8 Gen 2.',
      price: 307990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h67/82770863489054.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000'
    },
    {
      id: 18,
      categoryId: 4,
      likes: 0,
      name: 'Xiaomi Pad 6 Pro 256GB',
      description: 'Планшет Xiaomi с 11" 144 Гц дисплеем, Snapdragon 8+ Gen 1 и зарядкой 67W.',
      price: 229990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000'
    },
    {
      id: 19,
      categoryId: 4,
      likes: 0,
      name: 'Lenovo Tab P12 Pro 256GB',
      description: 'Планшет Lenovo с 12.6" AMOLED дисплеем, Snapdragon 870 и стилусом в комплекте.',
      price: 249990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/22753489.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/pd0/22753491.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-idea-tab-pro-tb373fu-acc-12-7-djuim-8-gb-256-gb-seryi-134113446/?c=750000000'
    },
    {
      id: 20,
      categoryId: 4,
      likes: 0,
      name: 'Huawei MatePad Pro 11" 256GB',
      description: 'Планшет Huawei с OLED 120 Гц дисплеем, M-Pencil 3 в комплекте и мощным Kirin 9000S.',
      price: 259990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe4/pb1/95091450.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/pb1/95091450.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/pb5/95091461.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/pb5/95091465.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-11-5-djuim-12-gb-256-gb-zelenyi-154505570/?c=750000000'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
