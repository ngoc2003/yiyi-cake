export interface ProductType {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  discount: number;
  createdAt: string;
}

export interface ToppingType {
  color: string;
  createdAt: string;
  id: string;
  image: string;
  name: string;
  price: number;
}

export interface SizeType {
  id: string;
  name: string;
  price: number;
}

export interface GiftType {
  id: string;
  name: string;
  image: string;
  price: number;
  createdAt: string;
}

export interface CategoryType {
  id: string;
  name: string;
  image: string;
  createdAt: string;
}
