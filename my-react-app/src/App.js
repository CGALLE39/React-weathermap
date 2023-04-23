import './App.css';
import UiReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocations from "./components/TimeAndLocations";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forescast from "./components/Forescast";
import getFormattedWeatherData from "./Services/weatherService";


function App() {

    const fetchWeather = async () => {
        const data = await getFormattedWeatherData({q:"london"});
        console.log(data);
    }

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-purple-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
        <TimeAndLocations />
        <TemperatureAndDetails />
        <Forescast title="hourly forecast"/>
        <Forescast title="daily forecast"/>
    </div>
  );
}

export default App;
