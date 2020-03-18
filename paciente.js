import Nombre from "./nombre.js"
import Fecha from "./fecha.js"

export default class Paciente {
    

    constructor({nombre, fechaNacimiento, telefono}) {
        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._telefono = telefono;
    }

    getPerfil() {
        return `${this._nombre.getApellidoNombre()}, Nacimiento: ${this._fechaNacimiento.getFecha()}, Telefono: ${this._telefono}`
    }

    getNombreCompleto() {
        return `${this._nombre.getNombreCompleto()}`
    }
}