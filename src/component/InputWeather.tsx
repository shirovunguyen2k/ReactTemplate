import { Button, Form, Select } from "antd";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { weatherService } from "../service/weatherService";
import { Vault } from "lucide-react";

const InputWeather = () => {
  const [city, setCity] = useState("Ho Chi Minh");
  const [units, setUnits] = useState("imperial");
  const [weatherInfo, setWeatherInfo] = useState(null as any);
  const [buttonText, setButtonText] = useState("°C");
  const [text, setText] = useState("°F");

  const getWeatherData = useCallback(async () => {
    const res = await weatherService.getWeatherData(city, units);
    //console.log(res);
    setWeatherInfo(res);
  }, [city, units]);

  const onChange = (value: string) => {
    //console.log(`selected ${value}`);
    setCity(`${value}`);
  };

  const onSearch = (value: string) => {
    //console.log("search:", value);

    setCity(value);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleConvert = () => {
    const btnText = buttonText.slice(1);
    const isCel = btnText === "C";
    setButtonText(isCel ? "°F" : "°C");
    setText(isCel ? "°C" : "°F");
    setUnits(isCel ? "metric" : "imperial");
  };

  const onFinish = () => {
    handleConvert();
  };

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return (
    <div>
      <div className="grid grid-cols-6 mb-10 p-5 bg-black bg-opacity-40 text-white gap-5">
        <div className="col-span-3">
          <Select
            className="w-full"
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Ha Noi",
                label: "Ha Noi",
              },
              {
                value: "Ho Chi Minh",
                label: "Ho Chi Minh",
              },
              {
                value: "Rach Gia",
                label: "Rach Gia",
              },
            ]}
          />
        </div>
        <div className="col-start-6">
          <Form onFinish={onFinish}>
            <Form.Item>
              <Button htmlType="submit" className="w-full">
                {buttonText}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="grid grid-cols-6 mb-20 bg-black bg-opacity-40 text-white p-5">
        <div className="col-span-2">
          <div className="grid-rows-3">
            <div>
              {weatherInfo?.name}, {weatherInfo?.sys.country}
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`}
              />
            </div>
            <div>{weatherInfo?.weather[0].description}</div>
          </div>
        </div>
        <div className="col-start-5 col-span-2 py-12">
          <h1 className="text-5xl">
            {Math.round(weatherInfo?.main.temp)}
            {text}
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-4 gap-5">
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Min</span>
            <h1>{weatherInfo?.main.temp_min} &ordm;C</h1>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Max</span>
            <h1>{weatherInfo?.main.temp_max} &ordm;C</h1>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Feels Like</span>
            <h1>{weatherInfo?.main.feels_like} &ordm;C</h1>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Pressure</span>
            <h1>{weatherInfo?.main.pressure} hPa</h1>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Humidity</span>
            <h1>{weatherInfo?.main.humidity} %</h1>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 text-white font-black p-8">
            <span>Wind speed</span>
            <h1>{weatherInfo?.wind.speed} m/s</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputWeather;
