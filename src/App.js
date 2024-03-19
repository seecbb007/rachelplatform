// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import
import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/sidebar/sidebar";
import Chatbot from "./components/chatbot/chatbot";
import OtherInfo from "./components/otherInfo/otherInfo";
import CreditReport from "./components/creditReport/creditReport";

function App() {
  return (
    <div className="App">
      <Chatbot></Chatbot>
      <div className="iamBorder">I am a border</div>
      {/* s<OtherInfo></OtherInfo> */}
      <CreditReport></CreditReport>
    </div>
  );
}

export default App;
