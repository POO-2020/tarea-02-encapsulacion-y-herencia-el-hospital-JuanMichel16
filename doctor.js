export default class Doctor {


    constructor({nombre, especialidad, telefono, cedula}) {
        this._nombre = nombre
        this._especialidad = especialidad
        this._telefono = telefono
        this._cedula = cedula
    }

    getPerfil() {
        return `Cedula: ${this._cedula}, Especialidad: ${this._especialidad}, Nombre: ${this._nombre.getNombreCompleto()}, Telefono: ${this._telefono}`
    }

    getApellidoPaterno() {
        return `${this._nombre.getApellidoPaterno()}`
    }

    esIgualA(doctor){
        if(doctor.getCedula() === this._cedulas){
            return true
        }else{
            return false
        }
    }
}