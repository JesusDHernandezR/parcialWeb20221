function ArmarJSON() {
    var identificacion = document.getElementById("identificacion").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var e = document.getElementById("sexo");
    var sexo = e.options[e.selectedIndex].value;

    var persona = {
        "identificacion": identificacion,
        "nombre": nombre,
        "edad": edad,
        "sexo": sexo,
    }
    return persona;
}
function guardarPersona(persona) {
    let personas = [];
    var persona = ArmarJSON();
    if (localStorage.getItem('BDLocal') != null) {
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    }
    personas.push(persona);
    localStorage.setItem('BDLocal', JSON.stringify(personas));
}
function consultarPersona() {
    var personas = [];
    if (localStorage.getItem('BDLocal') != null) {
        personas = JSON.parse(localStorage.getItem('BDLocal'));
    }
    personas.forEach(item => {
        document.getElementById("tableBodyDatos").innerHTML =
            '<tr>' +
            '<td >' + item.identificacion + '</td>' +
            '<td align="center" style="dislay: none;">' + item.nombre + '</td>' +
            '<td align="center" style="dislay: none;">' + item.edad + '</td>' +
            '<td align="center" style="dislay: none;">' + item.sexo + '</td>' +
            '</tr>';
    });
}