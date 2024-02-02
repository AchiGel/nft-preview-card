import "./App.css";
import imageEquilibrium from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";

function App() {
  const img = [
    {
      id: 1,
      src: imageEquilibrium,
      alt: "equilibrium",
    },
    {
      id: 2,
      src: avatar,
      alt: "avatar",
    },
  ];
  return (
    <div className="App">
      <div className="card">
        <div className="image-overflow">
          <img className="main-image" src={img[0].src} alt={img[0].alt} />
        </div>

        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="eth">
          <div className="eth-left">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span>0.041 ETH</span>
          </div>
          <div className="eth-right">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <span>3 days left</span>
          </div>
        </div>
        <div className="jules">
          <img src={img[1].src} alt={img[1].alt} />
          <h3>
            <span>Creation of</span> Jules Wyvern
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
