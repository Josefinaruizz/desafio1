class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor })
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }

}

const usuario = new Usuario('Josefina', 'Ruiz')

usuario.addMascota('Chuchu')
usuario.addMascota('Minerva')
usuario.addMascota('Pulga')
usuario.addBook('Harry Potter', 'J.k rowling')
usuario.addBook('el instituto', 'Stephen king')

console.log('-- USUARIO --')
console.log(`Nombre completo: ${usuario.getFullName()}`)
console.log(`Mascotas: ${usuario.countMascotas()}`)
console.log('libros', usuario.getBookNames())