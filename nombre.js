export default class Nombre {


    constructor(nombre, apellidoP, apellidoM) {
        this._nombre = nombre;
        this._apellidoP = apellidoP;
        this._apellidoM = apellidoM;
    }

    getNombreCompleto() {
        return `${this._nombre} ${this._apellidoP} ${this._apellidoM}`
    }

    getApellidoPaterno(){
        return `${this._apellidoP}`
    }
    getApellidoNombre() {
        return `${this._apellidoP} ${this._apellidoM} ${this._nombre}`
    }

    getIniciales() {
        return `${this._nombre.charAt(0)} ${this._apellidoP.charAt(0)} ${this._apellidoM.charAt(0)}`
    }
}