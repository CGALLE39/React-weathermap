import './App.css';
import UiReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-purple-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
    </div>
  );
}

export default App;
