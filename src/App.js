import "./App.css";
import Section from "./components/section";
import datas from "./data/movies_rnexgr.json";
import logoNetflix from "./assets/logo.png";

function App() {
  console.log("datas", datas);

  return (
    <div className="App">
      <div>
        <img className="header-logo" src={logoNetflix} alt="logo-netflix"></img>
      </div>
      {datas.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
}

export default App;
