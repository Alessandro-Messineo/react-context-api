// import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import dle provider
import { BudgetProvider } from "./context/BudgetContext";

// impor delle pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NavbarLayout from "./components/navbar/NavbarLayout";
import ProductsDetailPage from "./pages/ProductsDetailPage";
import ErroPage from "./pages/ErrorPage";

function App() {


  return (
    <>
      <BudgetProvider>
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
      </BudgetProvider>
    </>
  )
}

export default App
