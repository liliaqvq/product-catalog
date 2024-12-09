// Definición de un producto
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  // Definición del estado para Redux
  export interface ProductsState {
    products: Product[];
  }
  
  // Tipos para el estado global
  export interface AppState {
    products: ProductsState;
  }