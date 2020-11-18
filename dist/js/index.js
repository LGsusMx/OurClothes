var user = firebase.auth().currentUser;
var idusuario = sessionStorage.getItem("idusuario");
const datosdelacuenta = document.getElementById('datosP');
db.collection('usuarios').doc(idusuario).get().then( doc =>{
    const html = `
        <p>Nombre: ${ doc.data().name } ${ doc.data().lastname }</p>
        <p>Correo: ${ user.email}</p>
        <p>Fecha de nacimiento: ${ doc.data().dob }</p>
    `;
    datosdelacuenta.innerHTML = html;

});