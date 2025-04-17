import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Panier Bio Local',
    description: 'Assortiment de légumes bio cultivés par nos agriculteurs locaux',
    price: 24.99,
    category: 'Paniers',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 15,
    popularity: 78
  },
  {
    id: 2,
    name: 'Miel de Fleurs Sauvages',
    description: 'Miel artisanal récolté dans les champs wallons',
    price: 7.50,
    category: 'Produits du terroir',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 25,
    popularity: 92
  },
  {
    id: 3,
    name: 'Pain au Levain Traditionnel',
    description: 'Pain artisanal cuit au feu de bois par nos boulangers partenaires',
    price: 4.20,
    category: 'Boulangerie',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 8,
    popularity: 85
  },
  {
    id: 4,
    name: 'Fromage de Chèvre Bio',
    description: 'Fromage affiné produit dans notre ferme partenaire',
    price: 6.80,
    category: 'Produits laitiers',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 12,
    popularity: 76
  },
  {
    id: 5,
    name: 'Confiture de Fraises',
    description: 'Confiture artisanale préparée avec des fraises locales',
    price: 5.50,
    category: 'Épicerie fine',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 20,
    popularity: 88
  },
  {
    id: 6,
    name: 'Jus de Pomme Pressé',
    description: 'Jus de pomme pressé à froid sans sucres ajoutés',
    price: 3.90,
    category: 'Boissons',
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    stock: 30,
    popularity: 82
  }
];
