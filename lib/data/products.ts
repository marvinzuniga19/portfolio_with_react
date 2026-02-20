export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  images: string[];
  specs: {
    screen: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  stock: number;
  category: 'alta' | 'media' | 'baja';
  colors?: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1299,
    images: [
      'https://placehold.co/600x600/1a1a1a/white?text=iPhone+15+Pro+Max',
      'https://placehold.co/600x600/2a2a2a/white?text=Back',
      'https://placehold.co/600x600/3a3a3a/white?text=Side'
    ],
    specs: {
      screen: '6.7" Super Retina XDR OLED 120Hz',
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '256GB',
      camera: '48MP Principal + 12MP Ultra Wide + 12MP Tele',
      battery: '4422 mAh',
      os: 'iOS 17'
    },
    stock: 15,
    category: 'alta',
    colors: ['Titanio Natural', 'Titanio Azul', 'Titanio Blanco', 'Titanio Negro'],
    description: 'El iPhone más potente jamais creado con chip A17 Pro y titanio de grado aeroespacial.'
  },
  {
    id: '2',
    name: 'iPhone 15',
    brand: 'Apple',
    model: 'iPhone 15',
    price: 799,
    originalPrice: 899,
    images: [
      'https://placehold.co/600x600/1a1a1a/white?text=iPhone+15',
      'https://placehold.co/600x600/2a2a2a/white?text=Back',
      'https://placehold.co/600x600/3a3a3a/white?text=Side'
    ],
    specs: {
      screen: '6.1" Super Retina XDR OLED',
      processor: 'A16 Bionic',
      ram: '6GB',
      storage: '128GB',
      camera: '48MP Principal + 12MP Ultra Wide',
      battery: '3349 mAh',
      os: 'iOS 17'
    },
    stock: 25,
    category: 'alta',
    colors: ['Rosa', 'Amarillo', 'Verde', 'Azul', 'Negro'],
    description: 'El iPhone 15 trae la Dynamic Island y la cámara principal de 48MP.'
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 1099,
    originalPrice: 1199,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Galaxy+S24+Ultra',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.8" Dynamic AMOLED 2X 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP Principal + 50MP Tele + 10MP Tele + 12MP Ultra Wide',
      battery: '5000 mAh',
      os: 'Android 14 (One UI 6.1)'
    },
    stock: 12,
    category: 'alta',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow'],
    description: 'El Galaxy más inteligente con Galaxy AI integrado y S Pen incluido.'
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    model: 'Galaxy S24',
    price: 699,
    originalPrice: 799,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Galaxy+S24',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.2" Dynamic AMOLED 2X 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP Principal + 10MP Tele + 12MP Ultra Wide',
      battery: '4000 mAh',
      os: 'Android 14 (One UI 6.1)'
    },
    stock: 20,
    category: 'alta',
    colors: ['Onyx Black', 'Marble Gray', 'Cobalt Violet', 'Sapphire Blue'],
    description: 'Compacto y potente con Galaxy AI y pantalla de 120Hz.'
  },
  {
    id: '5',
    name: 'Samsung Galaxy A54',
    brand: 'Samsung',
    model: 'Galaxy A54',
    price: 349,
    originalPrice: 449,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Galaxy+A54',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.4" Super AMOLED 120Hz',
      processor: 'Exynos 1380',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP Principal + 12MP Ultra Wide + 5MP Macro',
      battery: '5000 mAh',
      os: 'Android 13 (One UI 5.1)'
    },
    stock: 30,
    category: 'media',
    colors: ['Awesome Lime', 'Awesome Graphite', 'Awesome Violet', 'Awesome White'],
    description: 'Excelente relación calidad-precio con cámara de 50MP y pantalla fluida.'
  },
  {
    id: '6',
    name: 'Xiaomi 14 Pro',
    brand: 'Xiaomi',
    model: '14 Pro',
    price: 899,
    originalPrice: 999,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Xiaomi+14+Pro',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.73" LTPO AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP Principal + 50MP Tele + 50MP Ultra Wide',
      battery: '4880 mAh',
      os: 'Android 14 (HyperOS)'
    },
    stock: 18,
    category: 'alta',
    colors: ['Negro', 'Blanco', 'Verde'],
    description: 'Potencia extrema con Leica Optics y carga rápida de 120W.'
  },
  {
    id: '7',
    name: 'Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro+',
    price: 399,
    originalPrice: 449,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Redmi+Note+13+Pro+',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.67" AMOLED 120Hz',
      processor: 'Dim0 Ultra',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP Principalensity 720 + 8MP Ultra Wide + 2MP Macro',
      battery: '5000 mAh',
      os: 'Android 13 (MIUI 14)'
    },
    stock: 22,
    category: 'media',
    colors: ['Negro', 'Blanco', 'Violeta'],
    description: 'Cámara de 200MP y carga HyperCharge de 120W.'
  },
  {
    id: '8',
    name: 'Xiaomi Redmi Note 13',
    brand: 'Xiaomi',
    model: 'Redmi Note 13',
    price: 199,
    originalPrice: 229,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Redmi+Note+13',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.67" AMOLED 120Hz',
      processor: 'Snapdragon 685',
      ram: '8GB',
      storage: '128GB',
      camera: '108MP Principal + 8MP Ultra Wide + 2MP Macro',
      battery: '5000 mAh',
      os: 'Android 13 (MIUI 14)'
    },
    stock: 35,
    category: 'baja',
    colors: ['Negro', 'Blanco', 'Verde', 'Azul'],
    description: 'Excelente pantalla AMOLED a precio accesible.'
  },
  {
    id: '9',
    name: 'Motorola Edge 40 Pro',
    brand: 'Motorola',
    model: 'Edge 40 Pro',
    price: 699,
    originalPrice: 799,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Motorola+Edge+40+Pro',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.7" pOLED 165Hz',
      processor: 'Snapdragon 8 Gen 2',
    ram: '12GB',
      storage: '256GB',
      camera: '50MP Principal + 50MP Ultra Wide + 12MP Tele',
      battery: '4600 mAh',
      os: 'Android 14'
    },
    stock: 15,
    category: 'alta',
    colors: ['Interstellar Black', 'Lunar Blue'],
    description: 'Pantalla de 165Hz y carga rápida de 125W.'
  },
  {
    id: '10',
    name: 'Motorola Moto G84',
    brand: 'Motorola',
    model: 'Moto G84',
    price: 249,
    originalPrice: 299,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Moto+G84',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.55" pOLED 120Hz',
      processor: 'Snapdragon 695',
      ram: '12GB',
      storage: '256GB',
      camera: '50MP Principal + 8MP Ultra Wide',
      battery: '5000 mAh',
      os: 'Android 13'
    },
    stock: 28,
    category: 'media',
    colors: ['Negro', 'Azul', 'Verde'],
    description: 'Diseño elegante con pantalla pOLED y gran autonomía.'
  },
  {
    id: '11',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    price: 899,
    originalPrice: 999,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Pixel+8+Pro',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.7" LTPO OLED 120Hz',
      processor: 'Google Tensor G3',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP Principal + 48MP Ultra Wide + 48MP Tele',
      battery: '5050 mAh',
      os: 'Android 14'
    },
    stock: 10,
    category: 'alta',
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    description: 'La mejor experiencia Android con 7 años de actualizaciones.'
  },
  {
    id: '12',
    name: 'Google Pixel 8',
    brand: 'Google',
    model: 'Pixel 8',
    price: 549,
    originalPrice: 599,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Pixel+8',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.2" OLED 120Hz',
      processor: 'Google Tensor G3',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP Principal + 12MP Ultra Wide',
      battery: '4575 mAh',
      os: 'Android 14'
    },
    stock: 16,
    category: 'alta',
    colors: ['Obsidian', 'Porcelain', 'Rose'],
    description: 'Compacto y potente con las mejores funciones de IA.'
  },
  {
    id: '13',
    name: 'Samsung Galaxy A34',
    brand: 'Samsung',
    model: 'Galaxy A34',
    price: 279,
    originalPrice: 349,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Galaxy+A34',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.6" Super AMOLED 120Hz',
      processor: 'Dimensity 1080',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP Principal + 8MP Ultra Wide + 5MP Macro',
      battery: '5000 mAh',
      os: 'Android 13 (One UI 5.1)'
    },
    stock: 32,
    category: 'media',
    colors: ['Awesome Silver', 'Awesome Graphite', 'Awesome Violet', 'Awesome Lime'],
    description: 'Pantalla fluida y gran batería para uso diario.'
  },
  {
    id: '14',
    name: 'Xiaomi Poco X6 Pro',
    brand: 'Xiaomi',
    model: 'Poco X6 Pro',
    price: 349,
    originalPrice: 399,
    images: [
      'https://placehold.co/600x600/1a1a2e/white?text=Poco+X6+Pro',
      'https://placehold.co/600x600/2a2a3e/white?text=Back',
      'https://placehold.co/600x600/3a3a4e/white?text=Side'
    ],
    specs: {
      screen: '6.67" AMOLED 120Hz',
      processor: 'Dimensity 8300 Ultra',
      ram: '12GB',
      storage: '256GB',
      camera: '64MP Principal + 8MP Ultra Wide + 2MP Macro',
      battery: '5000 mAh',
      os: 'Android 14 (HyperOS)'
    },
    stock: 24,
    category: 'media',
    colors: ['Negro', 'Amarillo', 'Gris'],
    description: 'Potencia gaming a precio competitivo.'
  },
  {
    id: '15',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    images: [
      'https://placehold.co/600x600/1a1a1a/white?text=iPhone+15+Pro',
      'https://placehold.co/600x600/2a2a2a/white?text=Back',
      'https://placehold.co/600x600/3a3a3a/white?text=Side'
    ],
    specs: {
      screen: '6.1" Super Retina XDR OLED 120Hz',
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP Principal + 12MP Ultra Wide + 12MP Tele',
      battery: '3274 mAh',
      os: 'iOS 17'
    },
    stock: 18,
    category: 'alta',
    colors: ['Titanio Natural', 'Titanio Azul', 'Titanio Blanco', 'Titanio Negro'],
    description: 'Diseño en titanio con chip A17 Pro y Action Button.'
  }
];

export const brands = ['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'Google'] as const;

export const categories = [
  { value: 'alta', label: 'Gama Alta' },
  { value: 'media', label: 'Gama Media' },
  { value: 'baja', label: 'Gama Baja' }
] as const;

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand === brand);
}

export function getFeaturedProducts(count: number = 6): Product[] {
  return products.slice(0, count);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.model.toLowerCase().includes(lowerQuery)
  );
}
