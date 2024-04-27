import { Weather } from "../types/weather";
const Describe = () => {
  return (
    <div className="grid grid-cols-6 mb-20 bg-black bg-opacity-40 text-white p-5">
      <div className="col-span-2">
        <div className="grid-rows-3">
          <div></div>
          <div>
            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
          </div>
          <div> Overcast Clouds</div>
        </div>
      </div>
      <div className="col-start-5 col-span-2 py-12">
        <h1 className="text-5xl">7&ordm;C</h1>
      </div>
    </div>
  );
};
export default Describe;
