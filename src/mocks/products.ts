import { Product } from "@/types/product";

export const productsMock: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    description: 'Fresh organic tomatoes from local farms.',
    price: { amount: 3.5, unit: 'per kg' },
    farmer: {
      id: 'f1',
      name: 'John Doe',
      farmName: 'Green Acres Farm',
      location: {
        latitude: 37.7749,
        longitude: -122.4194,
        address: '123 Green Farm Road, CA',
      },
    },
    category: 'Vegetables',
    subCategory: 'Tomatoes',
    images: ['tomatoes.jpg'],
    stockQuantity: 50,
    harvestDate: new Date('2024-06-01'),
    certifications: ['organic'],
    seasonality: ['Summer'],
    farmingMethod: 'organic',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Fresh Eggs',
    description: 'Free-range eggs from happy hens.',
    price: { amount: 4.0, unit: 'per dozen' },
    farmer: {
      id: 'f2',
      name: 'Jane Smith',
      farmName: 'Sunny Farm',
      location: {
        latitude: 40.7128,
        longitude: -74.006,
        address: '456 Sunny Lane, NY',
      },
    },
    category: 'Eggs',
    subCategory: '',
    images: ['eggs.jpg'],
    stockQuantity: 30,
    harvestDate: new Date('2024-06-10'),
    certifications: ['non-GMO'],
    seasonality: ['All Year'],
    farmingMethod: 'conventional',
    availableForDelivery: false,
    pickupAvailable: true,
    rating: 2.5,
  },
  {
    id: 'prod_9',
    name: 'Organic Roma Tomatoes',
    description: 'Fresh Roma tomatoes grown using organic farming methods. Perfect for sauces and salads.',
    price: { amount: 145, unit: 'per kg' },
    farmer: {
      id: 'f3',
      name: 'Maria Garcia',
      farmName: 'Organic Valley Farm',
      location: {
        latitude: 38.8951,
        longitude: -77.0364,
        address: '789 Valley Road, VA',
      },
    },
    category: 'Vegetables',
    subCategory: 'Tomatoes',
    images: ['tomatoes.jpg'],
    stockQuantity: 75,
    harvestDate: new Date('2024-03-15'),
    certifications: ['organic', 'non-GMO'],
    seasonality: ['Spring', 'Summer'],
    farmingMethod: 'organic',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.2,
  },
  {
    id: 'prod_10',
    name: 'Free-Range Brown Eggs',
    description: 'Farm-fresh brown eggs from free-range chickens. Rich in nutrients and flavor.',
    price: { amount: 185, unit: 'per dozen' },
    farmer: {
      id: 'f4',
      name: 'Robert Wilson',
      farmName: 'Happy Hens Farm',
      location: {
        latitude: 39.9526,
        longitude: -75.1652,
        address: '321 Farm Lane, PA',
      },
    },
    category: 'Eggs',
    subCategory: 'Brown Eggs',
    images: ['eggs.jpg'],
    stockQuantity: 100,
    harvestDate: new Date('2024-03-10'),
    certifications: ['free-range', 'hormone-free'],
    seasonality: ['All Year'],
    farmingMethod: 'free-range',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.8,
  },
  {
    id: 'prod_11',
    name: 'Heirloom Cherry Tomatoes',
    description: 'Sweet and colorful cherry tomatoes from heirloom varieties. Great for snacking.',
    price: { amount: 165, unit: 'per kg' },
    farmer: {
      id: 'f5',
      name: 'Sarah Brown',
      farmName: 'Heritage Gardens',
      location: {
        latitude: 34.0522,
        longitude: -118.2437,
        address: '567 Garden Way, CA',
      },
    },
    category: 'Vegetables',
    subCategory: 'Cherry Tomatoes',
    images: ['tomatoes.jpg'],
    stockQuantity: 60,
    harvestDate: new Date('2024-03-12'),
    certifications: ['heirloom', 'pesticide-free'],
    seasonality: ['Spring', 'Summer'],
    farmingMethod: 'traditional',
    availableForDelivery: true,
    pickupAvailable: false,
    rating: 4.5,
  },
  {
    id: 'prod_12',
    name: 'Organic Quail Eggs',
    description: 'Delicate and nutritious quail eggs from organic farms. Perfect for gourmet dishes.',
    price: { amount: 225, unit: 'per dozen' },
    farmer: {
      id: 'f6',
      name: 'David Lee',
      farmName: 'Quail Haven',
      location: {
        latitude: 47.6062,
        longitude: -122.3321,
        address: '890 Haven Road, WA',
      },
    },
    category: 'Eggs',
    subCategory: 'Quail Eggs',
    images: ['eggs.jpg'],
    stockQuantity: 45,
    harvestDate: new Date('2024-03-14'),
    certifications: ['organic', 'small-batch'],
    seasonality: ['All Year'],
    farmingMethod: 'organic',
    availableForDelivery: false,
    pickupAvailable: true,
    rating: 4.3,
  },
  {
    id: 'prod_13',
    name: 'Beefsteak Tomatoes',
    description: 'Large, juicy beefsteak tomatoes perfect for sandwiches and burgers.',
    price: { amount: 155, unit: 'per kg' },
    farmer: {
      id: 'f7',
      name: 'Michael Chen',
      farmName: 'Hydro Fresh Farms',
      location: {
        latitude: 36.1627,
        longitude: -86.7816,
        address: '432 Tech Lane, TN',
      },
    },
    category: 'Vegetables',
    subCategory: 'Beefsteak Tomatoes',
    images: ['tomatoes.jpg'],
    stockQuantity: 80,
    harvestDate: new Date('2024-03-16'),
    certifications: ['hydroponic', 'pesticide-free'],
    seasonality: ['All Year'],
    farmingMethod: 'hydroponic',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.1,
  },
  {
    id: 'prod_14',
    name: 'Duck Eggs Premium',
    description: 'Large, rich duck eggs ideal for baking and gourmet cooking.',
    price: { amount: 245, unit: 'per dozen' },
    farmer: {
      id: 'f8',
      name: 'Emma Davis',
      farmName: 'Waterside Farm',
      location: {
        latitude: 42.3601,
        longitude: -71.0589,
        address: '765 Lake Road, MA',
      },
    },
    category: 'Eggs',
    subCategory: 'Duck Eggs',
    images: ['eggs.jpg'],
    stockQuantity: 35,
    harvestDate: new Date('2024-03-18'),
    certifications: ['free-range', 'premium'],
    seasonality: ['All Year'],
    farmingMethod: 'free-range',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.7,
  },
  {
    id: 'prod_15',
    name: 'Vine Ripened Tomatoes',
    description: 'Naturally ripened tomatoes on the vine for maximum flavor.',
    price: { amount: 175, unit: 'per kg' },
    farmer: {
      id: 'f9',
      name: 'Thomas Anderson',
      farmName: 'Vine Valley',
      location: {
        latitude: 33.7490,
        longitude: -84.3880,
        address: '234 Vine Street, GA',
      },
    },
    category: 'Vegetables',
    subCategory: 'Vine Tomatoes',
    images: ['tomatoes.jpg'],
    stockQuantity: 65,
    harvestDate: new Date('2024-03-20'),
    certifications: ['vine-ripened', 'sustainable'],
    seasonality: ['Spring', 'Summer'],
    farmingMethod: 'traditional',
    availableForDelivery: true,
    pickupAvailable: true,
    rating: 4.4,
  },
  {
    id: 'prod_16',
    name: 'Heritage Breed Eggs',
    description: 'Eggs from rare heritage breed chickens with rich, orange yolks.',
    price: { amount: 195, unit: 'per dozen' },
    farmer: {
      id: 'f10',
      name: 'Laura Martinez',
      farmName: 'Heritage Hills Farm',
      location: {
        latitude: 30.2672,
        longitude: -97.7431,
        address: '543 Heritage Lane, TX',
      },
    },
    category: 'Eggs',
    subCategory: 'Heritage Eggs',
    images: ['eggs.jpg'],
    stockQuantity: 40,
    harvestDate: new Date('2024-03-22'),
    certifications: ['heritage-breed', 'free-range'],
    seasonality: ['All Year'],
    farmingMethod: 'free-range',
    availableForDelivery: false,
    pickupAvailable: true,
    rating: 4.6,
  }
]; 