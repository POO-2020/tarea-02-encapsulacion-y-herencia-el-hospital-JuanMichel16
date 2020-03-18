export default class Tiempo {

    /**
     * 
     * @param {*} hora 
     * @param {*} minutos 
     * @param {*} periodo 
     */

    constructor(hora, minutos, periodo) {
        this._hora = hora;
        this._minutos = minutos;
        this._periodo = periodo;
    }

    getFormato12() {
        return `${this._hora} : ${this._minutos} ${this._periodo}`
    }

    getFormato24() {
        let nuevaHora;
        if (this._periodo == "PM") {
            nuevaHora = `${this._hora + 12} : ${this._minutos}`
        } else {
            nuevaHora = `${this._hora} : ${this._minutos}`
        }
        return `${nuevaHora}`
    }

}