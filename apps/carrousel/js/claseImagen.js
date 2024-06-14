console.clear()
class Imagen{
    constructor(imagen, nombre, title, descripcion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.title = title;
        this.descripcion = descripcion;
    }
}

let palabra1 = "Hola";
let palabra2 = new String("hola");

//alert(palabra1.length);

let imagen1 = {
    imagen: "newyork.jpg",
    nombre: "Nueva York",
    title: "USA",
    descripcion: "New York es llamada la capital del Mundo. Lo que no encuentras alli, en ninguna parte!" 
}

let imagen2 = new Imagen("newyork.jpg", "Nueva York", "USA", "Cosmopolita");
let imagen3 = new Imagen("colonia.jpg", "Colonia", "Alemania", "Koln");

console.log(imagen1);
console.table(imagen2);
console.table(imagen3);