const getAllCitasUrl = "http://localhost:9000/ipsbarranquilla/citas";
const getCitasId = "http://localhost:9000/ipsbarranquilla/citas/";
const tabla = document.getElementById("tbodyCitas")

// Evento
document.addEventListener("DOMContentLoaded", getAllCitas)

// capturar fila
const capturarFila = (element, event, selector, handler)=>{
    //console.log(handler);
    element.addEventListener(event, e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

capturarFila(document, 'click', '.btnir', e =>{
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild
    console.log(id.innerHTML);
    // historial tablas y header
    const headerHistorialGet = document.getElementById("headerHistorial");
    const containerHistorialGet = document.getElementById("containerHistorial");
    // citas tablas y header
    const containerCitasGet = document.getElementById("containerCitas");
    const headerCitasGet = document.getElementById("headerCitas");
    // historial remove class
    headerHistorialGet.classList.remove("d-none")
    containerHistorialGet.classList.remove("d-none")
    // citas add class
    containerCitasGet.classList.add("d-none")
    headerCitasGet.classList.remove("d-flex")
    headerCitasGet.classList.add("d-none")
    const getPaciente = "http://localhost:9000/ipsbarranquilla/pacientes/"+id.innerHTML;

    // Peticion para obtener el paciente seleccionado
    fetch(getPaciente)
    .then(res=> {
        return res.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        mostrarPaciente(data)
    })
    .catch(err=>{
        console.log(err);
    })

    // Peticion para obtener las citas por el id del paciente
    fetch(getCitasId+id.innerHTML)
    .then(resp=> {
        return resp.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        ultimaCita = data.pop()
        mostrarUltimaCita(ultimaCita)
        historialCitas(data)
    })
    .catch(err=>{
        console.log(err);
    })
})


function getAllCitas(){

    fetch(getAllCitasUrl)
    .then(res=> {
        return res.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        mostrarCitas(data)
    })
    .catch(err=>{
        console.log(err);
    })
}

// recibimos la data y la iteramos con un for
function mostrarPaciente(paciente){
    let body = '';
    for (let i = 0; i<paciente.length; i++){
        body += `<tr>
            <td id="idpaciente">${paciente[i].idpaciente}</td>
            <td>${paciente[i].nombres}</td>
            <td>${paciente[i].apellidos}</td>
            <td>${paciente[i].tipo_doc}</td>
            <td>${paciente[i].documento}</td>
            <td>${paciente[i].lugar_nac}</td>
            <td>${paciente[i].fecha_nac}</td>
        </tr>`

        document.getElementById("tbodyPaciente").innerHTML = body
    }
}


// recibimos la data y la iteramos con un for
function mostrarCitas(citas){
    let body = '';
    for (let i = 0; i<citas.length; i++){
        body += `<tr>
            <td class="d-none">${citas[i].idpaciente}</td>
            <td id="idcita">${citas[i].idcita}</td>
            <td class="bg-info">${citas[i].fecha}</td>
            <td>${citas[i].hora}</td>
            <td>${citas[i].lugar}</td>
            <td>${citas[i].direccion}</td>
            <td>${citas[i].doctor}</td>
            <td>${citas[i].estado}</td>
            <td>${citas[i].tipo}</td>
            <td class=${citas[i].prioritaria === "no" ? 'bg-warning' : 'bg-success'}>${citas[i].prioritaria}</td>
            <td>${citas[i].observacion}</td>
            <td><button class="btnir btn btn-sm btn-info">Ir</button></td>
        </tr>`

        document.getElementById("tbodyCitas").innerHTML = body
    }
}



// recibimos la data y la asignamos a body
function mostrarUltimaCita(cita){
        body = `<tr>
            <td class="d-none">${cita.idpaciente}</td>
            <td id="idcita">${cita.idcita}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.lugar}</td>
            <td>${cita.direccion}</td>
            <td>${cita.doctor}</td>
            <td>${cita.estado}</td>
            <td>${cita.tipo}</td>
            <td>${cita.prioritaria}</td>
            <td>${cita.observacion}</td>
        </tr>`
        document.getElementById("tbodyUltimaCita").innerHTML = body
}

// recibimos la data y la asignamos a body
function historialCitas(citas){
    let body = '';
    for (let i = 0; i<citas.length; i++){
        body += `<tr>
            <td class="d-none">${citas[i].idpaciente}</td>
            <td id="idcita">${citas[i].idcita}</td>
            <td>${citas[i].fecha}</td>
            <td>${citas[i].hora}</td>
            <td>${citas[i].lugar}</td>
            <td>${citas[i].direccion}</td>
            <td>${citas[i].doctor}</td>
            <td>${citas[i].estado}</td>
            <td>${citas[i].tipo}</td>
            <td>${citas[i].prioritaria}</td>
            <td>${citas[i].observacion}</td>
        </tr>`

        document.getElementById("tbodyHistorial").innerHTML = body
    }
}




