function generate() {  
    var doc = new jsPDF('p', 'pt', 'letter');  
    var htmlstring = '';  
    var tempVarToCheckPageHeight = 0;  
    var pageHeight = 0;  
    pageHeight = doc.internal.pageSize.height;  
    var y = 20;  
    doc.setLineWidth(2);  
    doc.text(200, y = y + 30, "Listado De Pacientes - IPS Barranquilla");  
    doc.autoTable({  
        html: '#my-table',  
        startY: 70,  
        theme: 'grid',  
    })  
    doc.save('reporte-pacientes.pdf');  
}  
