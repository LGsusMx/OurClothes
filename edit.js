

function updateFunction(){
    var user = firebase.auth().currentUser;
    var idusuario = sessionStorage.getItem("idusuario");
    var namex = document.getElementById("idNombre").value;
    var lastnamex = document.getElementById("idApellido").value;
    var datex = document.getElementById("dod").value;
    var passvieja = document.getElementById("contrasena1").value;
    db.collection('usuarios').doc(idusuario).update({
        name: namex,
        lastname: lastnamex,
        dob: datex
    });
    

    var credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        passvieja
      );
      
      // Prompt the user to re-provide their sign-in credentials
      
      user.reauthenticateWithCredential(credential).then(function() {
        // User re-authenticated.
        cambiarContra();
      }).catch(function(error) {
        // An error happened.
        alert("Contraseña actual incorrecta")
      });


    
}
function cambiarContra(){
    var user = firebase.auth().currentUser;
    var pass = document.getElementById("contrasena").value;
    user.updatePassword(pass).then(function() {
        // Update successful.
        alert("cambio de contra hecho");
      }).catch(function(error) {
        // An error happened.
        alert(error);
      });
}
function salir(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("saliste ")
        location.href = 'login.html';
      }).catch(function(error) {
        // An error happened.
        alert("Error ")
      });
}
