import Carrito from "./Carrito";

const Productos = ({productos, carrito, setCarrito}) => {
    
    const agregarAlCarrito = (idNuevoProducto, nombre) => {
        const productoExistente = carrito.find(producto => producto.id === idNuevoProducto);
    
        if (productoExistente) {
            setCarrito(carrito.map(producto => 
                producto.id === idNuevoProducto 
                    ? { ...producto, cantidad: producto.cantidad + 1 } 
                    : producto
            ));
        } else {
            setCarrito([
                ...carrito,
                { id: idNuevoProducto, nombre: nombre, cantidad: 1 }
            ]);
        }
    };
    
    return (

        <>
            <h2>Productos:</h2>
            <div className="productos">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <p>{producto.nombre}</p>
                        <button onClick={() => agregarAlCarrito(producto.id, producto.nombre)}>Agregar al carrito</button>
                    </div>    
                ))}
            </div>
            <Carrito carrito={carrito}/>
        </>
           
    );
}
 
export default Productos;