import BottomMain from "./containers/Bottommain/BottomMain";
import Header from "./containers/Header/Header";
import TopMain from "./containers/Topmain/TopMain";


function App() {
  return (
    <div className="App__wrapper">
      <Header/>
      <TopMain/>
      <BottomMain/>
    </div>
  );
}

export default App;
