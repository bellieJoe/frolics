
import './App.css'
import loaderImg from "./assets/images/frolicsLoader.gif"
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
import Header from './pages/layouts/Header';
import Banner from './pages/layouts/Banner';
import Footer from './pages/layouts/Footer';

function App() {

  return (
    <>
      {/* loader */}
      <div className="loader_bg">
        <div className="loader"><img src={loaderImg} alt="#"/></div>
      </div>

      <Header />
      <Banner />

      <Footer />
    </>
  )
}

export default App
