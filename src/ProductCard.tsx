const ProductCard = (props: any) => {
  return (
    <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden m-7">
      <div className="w-full h-full object-cover">
        <img src={props.image} />
      </div>
      <div className="p-7 text-center">
        <h1 className="text-2xl text-orange-800 font-bold py-3">
          {props.title}
        </h1>
        <p className="text-orange-800">{props.descrice}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-pink-700 w-6 h-6 rounded-full mx-2"></button>
        <button className="bg-blue-500 w-6 h-6 rounded-full mx-2"></button>
        <button className="bg-yellow-600 w-6 h-6 rounded-full mx-2"></button>
      </div>
      <div className="flex justify-between p-5 font-bold">
        <span className="p-2 text-orange-800 text-xl">${props.price},00</span>
        <button className="outline outline-1 outline-orange-600 p-2 px-9 rounded-lg text-orange-800">
          {props.btnAddCart}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
