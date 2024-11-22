 class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
 }

 class CarritoCompra{
    constructor(){
        this.productos = [];
    }
    agregarProducto(producto){
        this.productos.push(producto);
        document.write(`${producto.nombre} ha sido agregado al carrito`);
    }

    eliminarProducto(nombreProducto){
        const index = this.productos.findIndex(prod => prod.nombre === nombreProducto);
        if(index !== -1){
            this.productos.splice(index,1);
            document.write(`${nombreProducto} ha sido eliminado del carrito`);
        } else {
            document.write(`${nombreProducto} no se encontro en el carrito`);
        }
    }

    calcularTotal(){
        const total=this.productos.reduce((acc, prod) => acc + prod.precio,0);
        return total;
    }

    mostrarCarrito(){
        if(this.productos.length === 0){
            document.write('El carrito esta vacio');
        } else {
            document.write('Productos en el carrito:');
            this.productos.forEach(prod => document.write(` - ${prod.nombre}: $${prod.precio}`));
        }
    }

 }