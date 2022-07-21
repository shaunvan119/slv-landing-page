import BottomMain from "./containers/Bottommain/BottomMain";
import Header from "./containers/Header/Header";
import TopMain from "./containers/Topmain/TopMain";
import Price from "./containers/PriceSection/Price"
import Footer from "./containers/Footer/Footer";
import LeadAutomation from "./containers/LeadAutomation/LeadAutomation";


function App() {
  return (
    <div className="App__wrapper">
      <Header/>
      <TopMain/>
      <LeadAutomation/>
      <BottomMain/>
      <Price/>
      <Footer/>
    </div>
  );
}

export default App;
