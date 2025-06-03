import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
