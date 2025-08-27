export type Product =
    | {
      id: number;
      title: string;
      author: string;
      publishedDate: string;
      genre: string | string[];
      price: number;
      onSale: true;
      salePrice: number;        
      shortDescription: string;
      description: string;
      image: string;
      rating: number;
      availability: string;
    }
  | {
      id: number;
      title: string;
      author: string;
      publishedDate: string;
      genre: string | string[];
      price: number;
      onSale: false;
      salePrice?: undefined; 
      shortDescription: string;
      description: string;
      image: string;
      rating: number;
      availability: string;
    };