import React from "react";
import { ReactDOM } from "react";
import ProductCard from "./ProductCard.tsx";

interface IProduct {
  image: string;
  title: string;
  descrice: string;
  price: number;
  btnAddCart: string;
}

const shoe: IProduct[] = [
  {
    image:
      "https://product.hstatic.net/1000230642/product/hsw002900kem__10__730d39626a494798aae0d2911879d67b.jpg",
    title: "Lorem Ipsum",
    descrice: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    price: 45,
    btnAddCart: "Add to cart",
  },
  {
    image:
      "https://product.hstatic.net/1000230642/product/hsw002900hog__2__9ab53305f6e448e69e9c5cb63269bc1f.jpg",
    title: "Lorem Ipsum",
    descrice: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    price: 45,
    btnAddCart: "Add to cart",
  },
];
const createCard = (card: any) => {
  return (
    <ProductCard
      image={card.image}
      title={card.title}
      descrice={card.descrice}
      price={card.price}
      btnAddCart={card.btnAddCart}
    />
  );
};
const Product = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      {shoe.map(createCard)}
      {/* <ProductCard
        image={shoe[0].image}
        title={shoe[0].title}
        descrice={shoe[0].descrice}
        price={shoe[0].price}
      />
      <ProductCard
        image={shoe[1].image}
        title={shoe[1].title}
        descrice={shoe[1].descrice}
        price={shoe[1].price}
      /> */}
    </div>
  );
};

export default Product;
