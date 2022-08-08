import "./App.css";
import ironhackImg from "./images/ironhack-logo-xs.png";
import icon1Img from "./images/icon1.png";
import icon2Img from "./images/icon2.png";
import icon3Img from "./images/icon3.png";
import icon4Img from "./images/icon4.png";
import menuImg from "./images/menu-top-xs.png";

function App() {
  // const homeStyles = {
  //   bac
  // }

  return (
    <div className="App">
      <div id="menu">
        <div id="nav">
          <img src={ironhackImg} alt="logo" style={{marginRight: "auto"}}/>
          <img src={menuImg} alt="menu" />
        </div>

        <div style={{color:"white"}}>
          <p>Say hello to ReactJS</p>
          <p>
            you will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <br />
          <button id="boton">Awesome!</button>
        </div>
      </div>

      <div id="menu2">
        <div id="card">
          <img src={icon1Img} alt="" />
          <h1> Declarative</h1>
          <p>React makes it painless to create interactive Uls</p>
        </div>
        <div id="card">
          <img src={icon2Img} alt="" />
          <h1>Components</h1>
          <p>Build encapsulated Components that manage treir state</p>
        </div>
        <div id="card">
          <img src={icon3Img} alt="" />
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div id="card">
          <img src={icon4Img} alt="" />
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
