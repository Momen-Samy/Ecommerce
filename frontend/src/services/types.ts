export type Product = {
  id: number;
  product_title: string;
  product_description: string;
  product_rating: number;
  product_price: number;
  product_category: 'men' | 'woman';
  product_images: string[];
};

export const  ProductDefault = {
  id: 1,
  product_title: '',
  product_description: '',
  product_rating: 0,
  product_price: 0,
  product_category: "men",
  product_images: '',
}