import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const [producto, setProducto] = useState(null); // Estado inicial como null
    const { id } = useParams(); // Llamar correctamente el hook useParams

    
    
    useEffect(() => {
  
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://67252ed8c39fedae05b4299f.mockapi.io/productos/${id}`);
                if (!response.ok) {
                    throw new Error("Error al obtener el producto");
                }
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.error("Error en la solicitud: ", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!producto) {
        return <h2>Cargando producto...</h2>; // Mostrar un estado de carga mientras se obtienen los datos
    }

    return (
        <>
            <img src={producto.img} alt={producto.name} />
            <h1>Detalle del producto: {producto.id}</h1>
            <p>Nombre: {producto.name}</p>
            <p>Precio: ${producto.price}</p>
            <p>Descripción: {producto.description}</p>
        </>
    );
}
