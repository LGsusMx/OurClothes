var user = firebase.auth().currentUser;
var idusuario = sessionStorage.getItem("idusuario");

const listaproductos = document.getElementById('listaproductos');

const datosdelacuenta = document.getElementById('datosP');

//Traer productos
firebase.firestore().collection('productos').onSnapshot(query => {
    let html = ''
    query.forEach(doc =>{
        console.log(doc.data())
        const productodetalle = doc.data();
        const columna = `
        <div class="col-md-4" style="padding-bottom: 15px;">
        <div class="card h-100" onclick="DetalleProducto('${doc.id}')">
          <section class="panel">
              <div class="pro-img-box">
                  <img src="${productodetalle.Imagen}" alt="" />
                  <a href="#" class="adtocart">
                      <i class="fa fa-shopping-cart"></i>
                  </a>
              </div>
              <div class="panel-body text-center">
                  <h4><a href="#" class="pro-title"> ${productodetalle.NombreArticulo}</a> </h4>
                  <p class="price">$  ${productodetalle.Precio} </p>
              </div>
          </section>
          <div class="card-footer" style="padding: .25rem 1.25rem; text-align: center;">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
        `;
        html += columna;
        });
        listaproductos.innerHTML = html;
    });
  
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

