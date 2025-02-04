import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Simulación de validación de credenciales
  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciales simuladas para la validación
    const validUsername = "usuario";
    const validPassword = "1234";

    // Validar si los campos están vacíos
    if (!username || !password) {
      setError("Por favor, ingrese ambos campos.");
      return;
    }

    // Verificar las credenciales
    if (username === validUsername && password === validPassword) {
      login(); // Llamar al login del contexto
      navigate("/"); // Redirigir a la página principal
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}
