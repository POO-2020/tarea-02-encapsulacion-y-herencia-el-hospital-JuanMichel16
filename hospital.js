export default class Hospital {

    /**
     * 
     * @param {*} nombre 
     * @param {*} direccion 
     * @param {*} doctores 
     * @param {*} citas 
     */

    constructor({nombre, direccion}) {
        this._nombre = nombre;
        this.direccion = direccion;
        this._doctores = [];
        this._citas = [];
    }

    registrarDoctor(doctores) {   //"Doctor" es la variable donde se almacenara el doctor que registre en la clase main
        this._doctores.push(doctores); //Aca esto diciendo que se va a agregar el doctor (Ya almacenado) al array mediante un push
    }

    listarDoctores() {
        this._doctores.forEach((imprimirDoctor,i) => {
            console.log(`Doctor ${i + 1}. ${imprimirDoctor.getPerfil()}`)
        })
    }

    _encontrarIndiceDoctor(doctor){
        let indice = this._doctores.findIndex((e => e.esIgualA(doctor)))
        return indice;
    }

    _encontrarDoctor(doctor){
        let indice = this._doctores.find((e => e.esIgualA(doctor)))
        return indice;
    }

    eliminar(doctor){
        let indice = this._encontrarIndiceDoctor(doctor)

        if(indice < 0){
            return false
        }

        this._doctores.splice(indice, 1)
        return true
    }

    registrarCita(citas) {
        this._citas.push(citas);
    }

    listarCitas() {
        this._citas.forEach((elemento,i) => {
            console.log(`Cita ${i + 1}. ${elemento.getPerfil()}`)
        })
    }
}