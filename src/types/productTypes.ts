export interface Product {
    id: number;
    title: string;
    author: string;
    publishedDate: string;
    genre: string[];
    price: number;
    onSale: boolean,
    salePrice: number,
    shortDescription: string;
    description: string;
    image: string;
    rating: number;
    availability: string,
}