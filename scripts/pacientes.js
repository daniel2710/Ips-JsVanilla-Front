// api node js => 
// const getAllPacientesUrl= "http://localhost:9000/ipsbarranquilla/pacientes";

// api springboot =>
const getAllPacientesUrl= "http://localhost:8080/crud/pacientes";


const tabla = document.getElementById("tbodyPacientes");

// Evento DOM
document.addEventListener("DOMContentLoaded", getAllPacientes)

// GET ALL Pacientes
function getAllPacientes(){

    fetch(getAllPacientesUrl)
    .then(res=> {
        return res.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        mostrarPacientes(data)
        //console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

// recibimos la data y la iteramos con un for
function mostrarPacientes(paciente){
    let body = '';
    for (let i = 0; i<paciente.length; i++){
        body += `<tr>
            <td>${paciente[i].idpaciente}</td>
            <td>${paciente[i].nombres}</td>
            <td>${paciente[i].apellidos}</td>
            <td>${paciente[i].tipo_doc}</td>
            <td>${paciente[i].documento}</td>
            <td>${paciente[i].lugar_nac}</td>
            <td>${paciente[i].fecha_nac}</td>
            <td><img onclick="openModalCita()" class="icon btnAddCita" width="15px" height="15px" src="./assets/png/añdir.png" alt="añadir cita"/></td>
            <td><img onclick="openModalEdit()" class="icon btnPut" width="15px" height="15px" src="./assets/png/editar.png" alt="editar paciente" /></td>
            <td><img onclick="openModalDelete()" class="icon btnDelete" width="15px" height="15px" src="./assets/png/eliminar.png" alt="eliminar paciente" /></td>
        </tr>`

        document.getElementById("tbodyPacientes").innerHTML = body;
    }
}

