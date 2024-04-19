import ProductCard from "./ProductCard.tsx";
import { IProduct } from "../types/product.ts";
import { v4 as uuidv4 } from "uuid";

const listProduct: IProduct[] = [
  {
    id: uuidv4(),
    image:
      "https://product.hstatic.net/1000230642/product/hsw002900kem__10__730d39626a494798aae0d2911879d67b.jpg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    price: 45,
    amount: 0, // amount > 0 ? amount : "Sold out"
  },
  {
    id: uuidv4(),
    image:
      "https://product.hstatic.net/1000230642/product/hsw002900hog__2__9ab53305f6e448e69e9c5cb63269bc1f.jpg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit, ramet consectetur adipisicing elit",
    price: 45,
    amount: 2,
  },
  {
    id: uuidv4(),
    image:
      "https://product.hstatic.net/1000230642/product/hsw002900hog__2__9ab53305f6e448e69e9c5cb63269bc1f.jpg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit, ramet consectetur adipisicing elit",
    price: 45,
    amount: 8,
  },
];
const Product = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      {listProduct.map((products) => (
        <ProductCard product={products} key={products.id} />
      ))}
    </div>
  );
};

export default Product;
