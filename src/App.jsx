import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreviewItem from './components/PreviewItem'
import { LogInProvider } from "./context/LogInContext";
import { CartProvider } from "./context/CartContext";
import { PreviewItemProvider } from "./context/PreviewItemContext";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <PreviewItemProvider>
        <LogInProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Collection />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/login" element={<Login />} />
              <Route path="/item/:id" element={<PreviewItem />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </LogInProvider>
        </PreviewItemProvider>
      </CartProvider>
    </div>
  );
};

export default App;
