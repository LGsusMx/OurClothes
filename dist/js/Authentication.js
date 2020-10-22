const formaingresar = document.getElementById('ingresar');

formaingresar.addEventListener('submit', (e)=>{
    e.preventDefault();

    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;
    
    auth.signInWithEmailAndPassword(correo,contrasena).then( cred =>{
        console.log(cred);
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML=''; 
        location.href = "../index.html"
        console.log( "Ingreso")
    }).catch( err => {

        formaingresar.querySelector('.error').innerHTML=mensajeError(err.code);
        console.log( err)
        console.log( "Error al ingresar")
    });


});

function mensajeError(codigo){

  let mensaje ='';

  switch(codigo){
      case 'auth/wrong-password':
          mensaje = 'Su contraseña no es correcta';
          break;
      case 'auth/user-not-found':
          mensaje = 'Usuario no encontrado';
          break;
      case 'auth/weak-password':
          mensaje = 'Contraseña débil';
          break;
      default:
          mensaje ='Ocurrió un error al ingresar con este usuario';

  }

  return mensaje;
} 


