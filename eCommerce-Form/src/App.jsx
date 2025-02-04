import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import AllProductos from "./components/AllProdcuts";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./components/Admin";
import Login from "./components/Login";
import AgregarProducto from "./components/AgregarProducto";


function App() {
  const [productos, setProductos] = useState([]);
 
   // Obtener productos al iniciar
   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://67252ed8c39fedae05b4299f.mockapi.io/productos");
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, []);

  const agregarProducto = async (producto) => {
    try {
      const res = await fetch("https://67252ed8c39fedae05b4299f.mockapi.io/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
  
      if (!res.ok) throw new Error("Error al agregar el producto");
  
      const nuevoProducto = await res.json();
  
      
      setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  
      alert("Producto agregado correctamente");
    } catch (error) {
      console.error(error.message);
      alert("Hubo un problema al agregar el producto.");
    }
  };
  

 

  return (
    <Router>
    <Navbar />

    <Routes>
      <Route path="/" element={
        <>
          <Carousel />
          <ProductList productos={productos}  />
        </>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/all" element={<AllProductos productos={productos} />} />
      <Route path="/productos/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/agregar-producto" element={<AgregarProducto agregarProducto={agregarProducto} />} />
      {/* Rutas protegidas */}
      <Route path="/admin" element={
        <RutaProtegida>
          <Admin />
        </RutaProtegida>
      } />
      <Route path="/cart" element={
        <RutaProtegida>
          <Cart />
        </RutaProtegida>
      } />
    </Routes>

    <Footer />
  </Router>
     );
}

export default App;
