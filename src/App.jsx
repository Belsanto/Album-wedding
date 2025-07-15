import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import "./utils/icons";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Fotos from "./pages/Fotos";
import Album from "./pages/Album";
import Invitacion from "./pages/Invitacion";

function App() {

  return (
    <div> 
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/album" element={<Album />} />
        <Route path="/invitacion" element={<Invitacion />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
