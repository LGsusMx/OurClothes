var user = firebase.auth().currentUser;
var idusuario = sessionStorage.getItem("idusuario");
console.log("a");








agarramelaDelCarro();
function agarramelaDelCarro() {
    db.collection('carritos').doc(sessionStorage.getItem("idusuario")).collection('productos').where("Cantidad", "==", "1")
        .get()
        .then(function (querySnapshot) {
            totalPagar = 0;
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                totalPagar += doc.data().Precio;
                document.getElementById("tabloski").innerHTML +=
                    `
                    <br>
                  <tr>
                    <td><img width="100" src="${doc.data().imagen}" alt=""> </td>
                    <td > ${doc.data().NombreArticulo} </td>
                    <td > $${doc.data().Precio}</td>
                    <td>
                    <input class="span1" style="max-width:34px" placeholder="1" id="appendedInputButtons" size="16" type="text" value="${doc.data().Cantidad}" disabled	>
                </tr>`
                
            })
            document.getElementById("tabloski").innerHTML += `<tr>
            <td colspan="6" class="alignR">Total products: </td>
            <td class="label label-primary" id="totalPago"> $${totalPagar}</td>
        </tr>`;
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
        
    /*firebasedoc.get().then(function (doc) {
        if (doc.exists) {
            // Get the modal
                document.getElementById("nombreId").innerHTML = doc.data().NombreArticulo;
                document.getElementById("precioId").innerHTML = '$' + doc.data().Precio;
            
           // document.getElementById("IdMdFooter").innerHTML = `<button type="button" class="btn btn-success btn-block" onclick="AgregarCarro('${id}')">Añadir al carro</button>`
        } else {
            console.log("No existe ese documento!");
        }
    }).catch(function (error) {
        console.log("Se ha presentado un error: ", error);
    });*/
}