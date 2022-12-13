export default function WeatherInfo(props) {
  const { data } = props;
  const imgURL = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center pr-6">
        <img src={imgURL} alt="날씨 아이콘" />
        <h1 className="text-4xl font-bold">{data.celTemp}˚C</h1>
      </div>
      <h2 className="text-xs">체감기온 {data.feelsTemp}˚C</h2>
      <div className="flex">
        <h2 className="mr-1 font-bold">{data.city},</h2>
        <h3>{data.weatherDesc}</h3>
      </div>
    </div>
  );
}
