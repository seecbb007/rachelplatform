// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import
import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/sidebar/sidebar";
import Chatbot from "./components/chatbot/chatbot";
import OtherInfo from "./components/otherInfo/otherInfo";
import CreditReport from "./components/creditReport/creditReport";
import SideOtherInfoPaystub from "./components/sideOtherInfo/sideOtherInfoPaystub";
import SideOtherInfoW2 from "./components/sideOtherInfo/sideOtherInfoW2";
import SideOtherInfoBankStatement from "./components/sideOtherInfo/sideOtherInfoBankStatement";
import Selfemployed_scheduleC from "./components/selfemployed/selfemployed_scheduleC";
import PricingEngine from "./components/pricingEngine/pricingEngine";

function App() {
  return (
    <div className="App">
      <Chatbot></Chatbot>
      <div className="iamBorder">I am a border</div>
      {/* s<OtherInfo></OtherInfo> */}
      <CreditReport></CreditReport>
      <div className="iamBorder">I am a border</div>
      <SideOtherInfoPaystub></SideOtherInfoPaystub>
      <div className="iamBorder">I am a border</div>
      <SideOtherInfoW2></SideOtherInfoW2>
      <div className="iamBorder">I am a border</div>
      <SideOtherInfoBankStatement></SideOtherInfoBankStatement>
      <div className="iamBorder">I am a border</div>
      <Selfemployed_scheduleC></Selfemployed_scheduleC>
      <div className="iamBorder">I am a border</div>
      <PricingEngine></PricingEngine>
    </div>
  );
}

export default App;
