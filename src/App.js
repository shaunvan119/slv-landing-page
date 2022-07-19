import BottomMain from "./containers/Bottommain/BottomMain";
import Header from "./containers/Header/Header";
import TopMain from "./containers/Topmain/TopMain";
import Price from "./containers/PriceSection/Price"


function App() {
  return (
    <div className="App__wrapper">
      <Header/>
      <TopMain/>
      <BottomMain/>
      <Price/>
    </div>
  );
}

export default App;
