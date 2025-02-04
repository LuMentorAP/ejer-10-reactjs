import { useState } from "react";

export default function AgregarProducto({ agregarProducto }) {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Validaciones
  const validate = () => {
    let errors = {};
    if (!producto.name) errors.name = "El nombre es obligatorio";
    if (!producto.price) errors.price = "El precio es obligatorio";
    else if (isNaN(producto.price) || producto.price <= 0)
      errors.price = "El precio debe ser un número mayor a 0";
    if (!producto.description)
      errors.description = "La descripción es obligatoria";
    else if (producto.description.length < 10)
      errors.description = "Debe tener al menos 10 caracteres";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch(
        "https://67252ed8c39fedae05b4299f.mockapi.io/productos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        }
      );

      if (!res.ok) throw new Error("Error al agregar el producto");

      const nuevoProducto = await res.json(); // ⬅️ Obtenemos el producto creado desde MockAPI

      agregarProducto(nuevoProducto); // ⬅️ Llamamos a la función de `App.jsx` para actualizar el estado

      setProducto({ name: "", price: "", description: "" });
      setMessage("Producto agregado con éxito");
      setErrors({});
    } catch (error) {
      setMessage("Hubo un error al agregar el producto");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Agregar Nuevo Producto</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Nombre del Producto</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={producto.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="price"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            value={producto.price}
            onChange={handleChange}
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="description"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            value={producto.description}
            onChange={handleChange}
            rows="3"
          ></textarea>
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Agregar Producto
        </button>
      </form>
    </div>
  );
}

