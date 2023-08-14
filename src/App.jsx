import "./App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainContainer from "./components/MainContainer";
import RightColumn from "./components/RightColumn";

function App() {
  return (
    <div className="flex bg-fx-dark-blue h-[100vh]">
      <LeftMenu />
      <div className="flex flex-col bg-fx-white w-full">
        <Header />
        <div className="flex bg-fx-gray h-[100vh]">
          <MainContainer />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default App;
