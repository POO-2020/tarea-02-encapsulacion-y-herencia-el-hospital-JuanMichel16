import Paciente from "./paciente.js";

export default class PacienteAsegurado extends Paciente {

    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, fechaFinVigencia, compania}) {
        super({nombre, fechaNacimiento, telefono});
        this._numeroPoliza = numeroPoliza;
        this._fechaFinVigencia = fechaFinVigencia;
        this._compania = compania;
    }


    getPerfil() {
        return ` ${this.nombre.getPerfil()}, ${this._numeroPoliza}, ${this._fechaFinVigencia}, ${this._compania}`
    }

}