import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LogInProvider } from "./context/LogInContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <LogInProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Collection />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </LogInProvider>
      </CartProvider>
    </div>
  );
};

export default App;
