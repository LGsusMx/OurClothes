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
function guardarProducto(){
    var idusuariA = sessionStorage.getItem("idusuario");
    //var idusuariA = 'testinguwu';
    const file = document.querySelector('#photo').files[0];
    const metadata ={
        contentType:file.type
    };
    const task = ref.child(document.getElementById('txtNombrePro').value + idusuariA).put(file,metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url =>{
        db.collection("productos").add({
            Descripción: document.getElementById('txtDescripcionPro').value,
            IDUsuario: idusuariA,
            Imagen: url,
            NombreArticulo: document.getElementById('txtNombrePro').value,
            Precio: parseFloat(document.getElementById('txtPrecioPro').value),
            Status:'Disponible'
        })
        .then(function(docRef) {
            $('#venderproducto').modal('hide');
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    })
}
