import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <ProfileSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
