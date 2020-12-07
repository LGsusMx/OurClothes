
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="nombre"]');
    var lastname = $('.validate-input input[name="apellido"]');
    var date = $('.validate-input input[name="fechanacimiento"]');
    var email = $('.validate-input input[name="correo"]');
    var password = $('.validate-input input[name="contrasena"]');


    $('.validate-form').on('submit',function(e){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(lastname).val().trim() == ''){
            showValidate(lastname);
            check=false;
        }

        if($(password).val().trim() == ''){
            showValidate(password);
            check=false;
        } 
        if($(date).val().trim() == ''){
            showValidate(date);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if (check) {
            e.preventDefault();
            registerFunction(name,lastname,date,email,password);
        }
        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function registerFunction(namex,lastnamex,datex,emailx,passwordx){
    auth.createUserWithEmailAndPassword(emailx.val(),passwordx.val()).then( cred =>{
        sessionStorage.setItem("idusuario",cred.user.uid );
        return db.collection('usuarios').doc(cred.user.uid).set({
            name: namex.val(),
            lastname: lastnamex.val(),
            dob: datex.val()
        });


    }).then( ()=>{
        location.href = "index.html";
    }).catch( err => {
        formaregistrate.querySelector('.error').innerHTML = mensajeError(err.code);
    });
    
}
