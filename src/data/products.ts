import heroSneaker from '@/assets/hero-sneaker.png';
import sneakerJordan from '@/assets/sneaker-jordan.png';
import sneakerDunk from '@/assets/sneaker-dunk.png';
import sneakerYeezy from '@/assets/sneaker-yeezy.png';
import sneakerAirforce from '@/assets/sneaker-airforce.png';
import sneakerNewbalance from '@/assets/sneaker-newbalance.png';
import sneakerDunkPanda from '@/assets/sneaker-dunk-panda.png';
import sneakerJordan4 from '@/assets/sneaker-jordan4.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  sizes: number[];
  grade: 'A' | 'B' | 'C';
  description: string;
  seller: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Jordan 1 Retro High',
    price: 4299,
    image: sneakerJordan,
    category: 'Air Jordan',
    brand: 'Nike',
    sizes: [7, 8, 9, 10, 11],
    grade: 'A',
    description: 'The Air Jordan 1 Retro High is a premium replica that captures every detail of the iconic silhouette. Features premium leather upper, accurate colorway, and comfortable cushioning.',
    seller: 'Premium Kicks Store'
  },
  {
    id: '2',
    name: 'Nike Dunk Low Green',
    price: 3299,
    image: sneakerDunk,
    category: 'Dunk',
    brand: 'Nike',
    sizes: [6, 7, 8, 9, 10],
    grade: 'A',
    description: 'Classic Nike Dunk Low in fresh green colorway. Perfect for everyday wear with premium materials and authentic detailing.',
    seller: 'Sneaker Hub'
  },
  {
    id: '3',
    name: 'Yeezy Boost 350 V2',
    price: 4499,
    image: sneakerYeezy,
    category: 'Yeezy',
    brand: 'Adidas',
    sizes: [7, 8, 9, 10, 11, 12],
    grade: 'A',
    description: 'The Yeezy Boost 350 V2 features the signature Primeknit upper with comfortable Boost midsole. Cream colorway thats perfect for any outfit.',
    seller: 'Yeezy World'
  },
  {
    id: '4',
    name: 'Air Force 1 Low Triple White',
    price: 2999,
    image: sneakerAirforce,
    category: 'Air Force 1',
    brand: 'Nike',
    sizes: [6, 7, 8, 9, 10, 11],
    grade: 'A',
    description: 'The classic Air Force 1 Low in pristine white. A timeless silhouette thats a must-have in any sneaker collection.',
    seller: 'Classic Kicks'
  },
  {
    id: '5',
    name: 'New Balance 550',
    price: 3499,
    image: sneakerNewbalance,
    category: 'New Balance',
    brand: 'New Balance',
    sizes: [7, 8, 9, 10, 11],
    grade: 'A',
    description: 'The New Balance 550 brings retro basketball vibes with modern comfort. Premium leather construction with vintage styling.',
    seller: 'NB Store'
  },
  {
    id: '6',
    name: 'Nike Dunk Low Panda',
    price: 3499,
    image: sneakerDunkPanda,
    category: 'Dunk',
    brand: 'Nike',
    sizes: [6, 7, 8, 9, 10, 11],
    grade: 'A',
    description: 'The most popular Dunk colorway of all time. Black and white Panda Dunk with premium leather and authentic details.',
    seller: 'Dunk Masters'
  },
  {
    id: '7',
    name: 'Air Jordan 4 Retro',
    price: 4999,
    image: sneakerJordan4,
    category: 'Air Jordan',
    brand: 'Nike',
    sizes: [8, 9, 10, 11, 12],
    grade: 'A',
    description: 'The Air Jordan 4 is an iconic silhouette known for its unique design. Premium replica with accurate mesh panels and wing eyelets.',
    seller: 'Jordan Elite'
  },
  {
    id: '8',
    name: 'Nike Dunk Low White',
    price: 2899,
    image: heroSneaker,
    category: 'Dunk',
    brand: 'Nike',
    sizes: [6, 7, 8, 9, 10],
    grade: 'B',
    description: 'Clean white Nike Dunk Low with subtle grey accents. Perfect for a minimalist aesthetic.',
    seller: 'Clean Kicks'
  },
];

export const categories = [
  { name: 'Air Jordan', slug: 'air-jordan', image: sneakerJordan },
  { name: 'Dunk', slug: 'dunk', image: sneakerDunk },
  { name: 'Yeezy', slug: 'yeezy', image: sneakerYeezy },
  { name: 'Air Force 1', slug: 'air-force-1', image: sneakerAirforce },
  { name: 'New Balance', slug: 'new-balance', image: sneakerNewbalance },
];
