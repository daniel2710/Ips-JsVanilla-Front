function generate() {  
    
    const getAllPacientesUrl= "http://localhost:9000/ipsbarranquilla/pacientes"
    
    fetch(getAllPacientesUrl)
    .then(res=> {
        return res.json()
    })
    .then(data => {
    
        let doc = new jsPDF('p', 'pt', 'letter');  
        pageHeight = doc.internal.pageSize.height;  
        let y = 20;  
        doc.setLineWidth(2);  
        doc.text(200, y = y + 30, "Listado De Pacientes - IPS Barranquilla");  
        
        
        const headers = [["NOMBRES", "APELLIDOS", "TIPO DOCUMENTO", "DOCUMENTO", "FECHA NACIMIENTO", "LUGAR NACIMIENTO"]];
      
        const datos = data.map(item => [item.nombres, item.apellidos, item.tipo_doc, item.documento, item.fecha_nac, item.lugar_nac]);
      
        let content = {
          startY: 100,
          head: headers,
          body: datos
        };
        
        doc.autoTable(content);
        doc.save('reporte-pacientes.pdf');  
    })
    .catch(err=>{
        console.log(err);
    })

}  
