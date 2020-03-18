import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Cita from "./cita.js";
import Doctor from "./doctor.js";
import Hospital from "./hospital.js";

class Main {

    constructor() {
        this.fecha1 = new Fecha(20,1,2010)
        this.tiempo1 = new Tiempo(6,30, "PM")
        this.nombre1 = new Nombre("Juan", "Michel", "Vargas")
        this.paciente1 = 
        new Paciente(
            new Nombre(
                "Enrique",
                "Cobian",
                "Ramirez"),
            new Fecha(
                12,2,2015
            ),
            123124234
        );

        this.doctor1 = 
        new Doctor(
            new Nombre(
                "Chaleco",
                "Anti",
                "Balas"),
                "Cirujano",
                31234456734,
                9146
        );

        this.doctor1 = 
        new Doctor(
            new Nombre(
                "guamuchil",
                "pelon",
                "chiquito"),
                "gamulologo",
                4563456,
                6745675647
        );

        this.cita1 =
        new Cita(
            new Fecha(15,4,2017),
            new Tiempo(4,50,"PM"),
            new Doctor(
                new Nombre(
                "Elizabeth",
                "Meliodas",
                "Seaman"
            ),
            ),
            new Paciente(
                new Nombre(
                    "chacal",
                    "Chiquito",
                    "Malandrin"),
                new Fecha(12,12, 2012),
                42341234)
            );

            this.cita2 =
            new Cita(
                new Fecha(19,6,2013),
                new Tiempo(5,55,"PM"),
                new Doctor(
                    new Nombre(
                    "Corona",
                    "virus",
                    "pro 64GB"),
                ),
                new Paciente(
                    new Nombre(
                        "sillon",
                        "grande",
                        "derecho"),
                    new Fecha(20,11, 2006),
                    567457)
                );

        this.hospital1 = new Hospital("Tarahumara", "Elias Fernandez #18")
    }
    probarFechaNacimiento() {
        console.log(`${this.fecha1.getAños()} anos`);
        //console.log(Date.now())
        console.log(`${this.fecha1.getMeses()} meses`);
        console.log(`${this.fecha1.getSemanas()} semanas`);
        console.log(`${this.fecha1.getDias()} dias `);
        console.log(this.fecha1.getFecha());
        console.log(this.fecha1.getDiaFecha());
    }

    probarTiempo() {
        console.log(this.tiempo1.getFormato12());
        console.log(this.tiempo1.getFormato24());
    }

    probarNombre() {
        console.log(this.nombre1.getNombreCompleto());
        console.log(this.nombre1.getApellidoNombre());
        console.log(this.nombre1.getIniciales());
    }

    probarPaciente() {
        console.log(`Paciente: ${this.paciente1.getPerfil()}`);
    }

    probarCita() {
        console.log(this.cita1.getPerfil());
    }

    probarHospital() {
        this.hospital1.registrarDoctor(this.doctor1); //Lo que esta dentro del parentesis "this.doctor1" es el doctor que quiero registrar
        this.hospital1.listarDoctores();

        this.hospital1.registrarCita(this.cita1);
        this.hospital1.registrarCita(this.cita2);
        this.hospital1.listarCitas();
    }
    
}

let probar = new Main();
probar.probarFechaNacimiento()
probar.probarTiempo();
probar.probarNombre();
probar.probarPaciente();
probar.probarCita();
probar.probarHospital();