import BottomMain from "./containers/Bottommain/BottomMain";
import Header from "./containers/Header/Header";
import TopMain from "./containers/Topmain/TopMain";
import Price from "./containers/PriceSection/Price"
import Footer from "./containers/Footer/Footer";
import LeadAutomation from "./containers/LeadAutomation/LeadAutomation";
import ContactForm from "./components/ContactForm";
import MasterPage from "./containers/masterpage/MasterPage";
import B2BhomePage from "./containers/B2Bpage/B2BhomePage";
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <div className="App__wrapper">
    
      <Routes>
      <Route exact path="/" element={<MasterPage/>}/> 
      <Route exact path="/B2BhomePage" element={<B2BhomePage/>}/> 
      <Route path="/digital" element={[<Header/>,
      <TopMain/>,
      <LeadAutomation/>,
      <BottomMain/>,
      <Price/>,
      <Footer/>,]}/>
        <Route path="/contactUs" element={<ContactForm/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
