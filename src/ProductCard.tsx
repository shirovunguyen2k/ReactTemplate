import { IProduct } from "./types/product";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return (
    <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden m-7">
      <div className="w-full h-full object-cover">
        <img src={product.image} />
      </div>
      <div className="p-7 text-center">
        <h1 className="text-2xl text-orange-800 font-bold py-3">{product.title}</h1>
        <p className="text-orange-800">{product.description}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-pink-700 w-6 h-6 rounded-full mx-2"></button>
        <button className="bg-blue-500 w-6 h-6 rounded-full mx-2"></button>
        <button className="bg-yellow-600 w-6 h-6 rounded-full mx-2"></button>
      </div>
      <div className="flex justify-between p-5 font-bold">
        <span className="p-2 text-orange-800 text-xl">${product.price},00</span>
        <button className="outline outline-1 outline-orange-600 p-2 px-9 rounded-lg text-orange-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
