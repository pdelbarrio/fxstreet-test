import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainContainer from "./components/MainContainer";
import RightColumn from "./components/RightColumn";
import { FilterProvider } from "./context/filter.context";

function App() {
  return (
    <FilterProvider>
      <div className="flex h-full">
        <LeftMenu />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex bg-fx-gray h-full p-2">
            <MainContainer />
            <RightColumn />
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;
