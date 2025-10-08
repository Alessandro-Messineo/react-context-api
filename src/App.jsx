// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NavbarLayout from "./components/navbar/NavbarLayout";
import ProductsDetailPage from "./pages/ProductsDetailPage";
import ErroPage from "./pages/ErrorPage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/prodotti" element={<ProductsPage />} />
            <Route path="/prodotti/:id" element={<ProductsDetailPage />} />
            <Route path="*" element={<ErroPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
