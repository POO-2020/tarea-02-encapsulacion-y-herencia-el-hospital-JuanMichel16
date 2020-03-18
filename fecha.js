/*
*Duda: Porque a los metodos si les agrego letras en el return, me sale un NAN
*/

const diasSemana = ["Domingo,", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export default class Fecha {

    /**
     * 
     * @param {Date} año;
     * @param {Date} mes; 
     * @param {Date} dia;
     */

    constructor(dia, mes, año) {
        this._fecha = new Date(año, mes, dia)
    }

    getAños() {

        //duda aca, como diablos hago para que en vez de poner yo el año actual (2020) se me ponga automatico?
        let añosTranscurridos
        //añosTranscurridos = Date.now() / 1000
        //añosTranscurridos = añosTranscurridos / 60
        //añosTranscurridos = añosTranscurridos / 60
        //añosTranscurridos = añosTranscurridos / 24
        //añosTranscurridos = añosTranscurridos / 30
        //añosTranscurridos = añosTranscurridos / 12
        //añosTranscurridos = añosTranscurridos 
        let ms = Date.now() - this._fecha;
        let msAño = 1000 * 60 * 60 * 24 * 365;
        añosTranscurridos = Math.trunc(ms / msAño);
        return `${añosTranscurridos}`
    }

    getMeses() {
        let mesesTranscurridos = this.getAños() * 12
        return `${mesesTranscurridos}`
    }

    getSemanas() {
        let semanasTranscurridas;
        semanasTranscurridas = this.getMeses() * 4
        return `${semanasTranscurridas}`
    }

    getDias() {
        let diasTranscurridos;
        diasTranscurridos = this.getSemanas() * 7
        return `${diasTranscurridos}`
    }

    getFecha() {
        return `${this._fecha.getDate()} / ${Meses[this._fecha.getMonth() - 1]} / ${this._fecha.getFullYear()}`
    }

    getDiaFecha() {
        return `${diasSemana[this._fecha.getDay()]} `
    }
}