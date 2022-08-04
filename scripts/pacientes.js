const getAllPacientesUrl= "http://localhost:9000/ipsbarranquilla/pacientes"
const tabla = document.getElementById("tbodyPacientes")


// Evento
document.addEventListener("DOMContentLoaded", getAllPacientes)

function getAllPacientes(){

    fetch(getAllPacientesUrl)
    .then(res=> {
        return res.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        mostrarPacientes(data)
        console.log(data);
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
            <td>Añadir</td>
            <td>Editar</td>
            <td>Eliminar</td>
        </tr>`

        document.getElementById("tbodyPacientes").innerHTML = body
    }
    
}
