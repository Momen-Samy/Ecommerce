export type Product = {
  id: number;
  productTitle: string;
  productDescription: string;
  productRatting: number;
  productPrice: number;
  productCategory: 'men' | 'woman';
  productImage: { url: string }[];
};
