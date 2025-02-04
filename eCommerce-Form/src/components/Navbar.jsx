import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Te-Chomerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contactanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all">Todos los Productos</Link>
            </li>
            <li>
            <Link to="/agregar-producto" className="nav-link">Agregar Producto</Link>

            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Carrito</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
              </>
            )}
          </ul>
          {isAuthenticated ? (
            <button onClick={logout} className="btn btn-danger">Cerrar Sesión</button>
          ) : (
            // Redirigir a la página de login
            <Link to="/login">
              <button className="btn btn-primary">Ingresar</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
