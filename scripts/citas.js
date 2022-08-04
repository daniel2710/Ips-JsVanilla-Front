const getAllCitasUrl = "http://localhost:9000/ipsbarranquilla/citas"
const tabla = document.getElementById("tbodyCitas")


// Evento
document.addEventListener("DOMContentLoaded", getAllCitas)

function getAllCitas(){

    fetch(getAllCitasUrl)
    .then(res=> {
        return res.json()
    })
    // llamamos a la funcion y le pasamos como argumento la data
    .then(data => {
        mostrarCitas(data)
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

// recibimos la data y la iteramos con un for
function mostrarCitas(citas){
    let body = '';
    for (let i = 0; i<citas.length; i++){
        body += `<tr>
            <td>${citas[i].idcita}</td>
            <td>${citas[i].fecha}</td>
            <td>${citas[i].hora}</td>
            <td>${citas[i].lugar}</td>
            <td>${citas[i].direccion}</td>
            <td>${citas[i].doctor}</td>
            <td>${citas[i].estado}</td>
            <td>${citas[i].tipo}</td>
            <td>${citas[i].prioritaria}</td>
            <td>${citas[i].observacion}</td>
            <td>Ir</td>
        </tr>`

        document.getElementById("tbodyCitas").innerHTML = body
    }
    
}



