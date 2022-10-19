export type Product = {
  id: number,
  name: string,
  price: string,
  image: string,
  desc: string,
  categoryId: string
};

export type ProductCreate = {
  name: string
  price: string,
  image: string,
  desc: string,
  categoryId: string
};
