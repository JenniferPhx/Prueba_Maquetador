function guardarDatos(){       
       
    var nombre = document.getElementById("nombre");
    var apellidopa = document.getElementById("apellidopa");
    var apellidoma = document.getElementById("apellidoma");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    var rfc = document.getElementById("rfc");

    if(nombre.value != null && nombre.value != "" && apellidopa.value != null && apellidopa.value != "" && apellidoma.value != null && 
    apellidoma.value != "" && validatelefono() && validacorreo() && validarfc()){
        console.log("nombre" + nombre.value);
        console.log("apellido1" + apellidopa.value);
        console.log("apellido2" + apellidoma.value);
        console.log("telefono" + telefono.value);
        console.log("correo" + correo.value);
        console.log("rfc" + rfc.value);
        localStorage.getItem("savebanco");
        localStorage.getItem("savetienda");
        localStorage.getItem("savefinancieras");
        localStorage.getItem("savedeuda");
        localStorage.setItem("savenombre",nombre.value);
        localStorage.setItem("saveapellido1",apellidopa.value);
        localStorage.setItem("saveapellido2",apellidoma.value);
        localStorage.setItem("savetelefono",telefono.value);
        localStorage.setItem("savecorreo",correo.value);
        localStorage.setItem("saverfc",rfc.value);
        
    }          
} 

function validatelefono(){
var telefono = document.getElementById("telefono");

if( telefono.value != null && telefono.value != "" && telefono.value.length === 10 ){
    return true;
}else{
    return false;
}

} 

function validacorreo(){
var correo = document.getElementById("correo");

if( correo.value != null && correo.value != "" && correo.value.includes("@") && correo.value.includes(".")){
    return true;
}else{
    return false;
}

}

function validarfc(){
var rfc = document.getElementById("rfc");

if(rfc.value != null && rfc.value != "" && (rfc.value > 10 || rfc.value == 10) ){
    return true;
}else{
    return false;
}
}

function guardarDatos2(){

    var banco = document.getElementById("banco");
    var tienda = document.getElementById("tienda");
    var financieras = document.getElementById("financieras");
    var deuda = document.getElementById("deuda");

    if(banco.value != null && banco.value != "" && tienda.value != null && tienda.value != "" && financieras.value != null && financieras.value != "" && 
    deuda.value != null && deuda.value != "" && deuda.value >= 35){
        
        alert('¡Datos guardados exitosamente!');

        console.log("banco" + banco.value);
        console.log("tienda" + tienda.value);
        console.log("financieras" + financieras.value);
        console.log("deuda" + deuda.value);
        localStorage.setItem("savebanco",banco.value);
        localStorage.setItem("savetienda",tienda.value);
        localStorage.setItem("savefinancieras",financieras.value);
        localStorage.setItem("savedeuda",deuda.value);
    
    }
}; 
