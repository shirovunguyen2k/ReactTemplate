import InputWeather from "./InputWeather";

const AppWeather = () => {
  const coldImage =
    "https://weather-app.isaaclal.com/assets/snowy-88cc09c5.jpeg";
  const hotImage =
    "https://weather-app.isaaclal.com/assets/sunny-9ffd573c.jpeg";
  return (
    <div
      style={{
        backgroundImage: `url(${coldImage})`,
      }}
    >
      <div className="m-20 px-60 py-10">
        <InputWeather />
      </div>
    </div>
  );
};
export default AppWeather;
