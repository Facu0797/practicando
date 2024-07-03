const Carrito = ({carrito}) => {
    console.log(carrito);
    return (
        <div className="carrito">
            <>
                <h2>Carrito</h2>
                {carrito.length === 0
                    ?   "No hay productos en el carrito"
                    :   carrito.map((producto) => (
                        <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <p>Cantidad: {producto.cantidad}</p>
                        </div> 
                    ))
                }
            </>

        </div>
    );
}
 
export default Carrito;