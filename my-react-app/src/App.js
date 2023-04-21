import './App.css';
import UiReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-purple-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
