// import logo from "./logo.svg";
//import "./App.css";
import { Routes, Route } from "react-router-dom";
//import
import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/sidebar/sidebar";
import Chatbot from "./components/chatbot/chatbot";

function App() {
  return (
    <div className="App">
      {/* <div className="container mx-auto bg-gray-200 rounded-xl">
        <p className="text-3xl text-gray-700 font-bold mb-5">welcome!</p>
        <div className="text-gray-500 text-lg">React Tailwind</div>
      </div> */}
      {/* <Routes></Routes> */}
      <Navigation></Navigation>
      <Sidebar></Sidebar>
      <Chatbot></Chatbot>
    </div>
  );
}

export default App;
