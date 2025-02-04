/* eslint-disable react/prop-types */
export default function AllProductos({ productos }) {
    return (
        <>
           {productos && productos.length > 0 ? (
                productos.map((producto) => (
                    <div key={producto.id } className="card product-card mx-2">
                        <img
                            src={producto.img }
                            className="card-img-top"
                            alt={producto.name }
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{producto.name }</h5>
                            <p className="card-text">
                                {producto.price}
                            </p>
                            <p className="card-text">
                                {producto.description}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </>
    );
}
