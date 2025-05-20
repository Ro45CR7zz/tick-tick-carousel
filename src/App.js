import RollingGallery from './rollingallery';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", paddingTop: "50px", color: "#fff", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Pacifico", fontSize: "3rem", color: "#fff" }}>Tick Tick Carousel</h1>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  );
}

export default App;
