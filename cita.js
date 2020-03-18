export default class Cita {

constructor({fecha, hora, doctor, paciente}) {
    this._fecha = fecha
    this._hora = hora
    this._doctor = doctor
    this._paciente = paciente

}

getPerfil() {
    return `${this._fecha.getFecha()}, ${this._hora.getFormato24()}, DR. ${this._doctor.getApellidoPaterno()}, Paciente ${this._paciente.getNombreCompleto()}`
    }
} 