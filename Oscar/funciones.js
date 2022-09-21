function recuperarContraseña (){
    
    var correoRecupero = document.getElementById("correoRecupero").value 
    
    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || [] 

    const userExists = localSTGUsers.filter(local=> local.correo === correoRecupero)

    if (userExists.length == 1 ) {
      alert ("correo existente")
    } else{
      alert ("correo INexistente")
    }
}
    
      
function ingresar(){
  correo2 = document.getElementById("correo").value;
  contra = document.getElementById("contra").value;
  
  const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
  const userExists = localSTGUsers.filter(local=> local.correo === correo2)

  if (userExists.length > 0) {
    if (userExists[0].contraseña == contra) {      
      alert('correcto')
      if (userExists[0].role == 'admin') {
        location.href = 'inicio.html'
      }else {
        location.href = 'inicio.html'
      }
        
    }else{
      alert('incorrecto')
    }
    
  }
}
function comparar (){
  console.log ("entre");
  contra1 = document.getElementById("contraRegistro1").value;
  contra2 = document.getElementById("contraRegistro2").value;

  if (contra1 == contra2) {
    console.log ("son iguales");    
    document.getElementById('siguiente1').style.display = 'block';

  } else {
    alert("contraseñas incorrectas")
  }
}
function sigDatos(){
  console.log ("entre")
  $('#collapseTwo').collapse("show")
}
function btnsig(){
  document.getElementById('siguiente2').style.display = 'block';
}
function sigFin(){
  $('#collapseThree').collapse("show")
  document.getElementById("finCorreo").value = document.getElementById("correoRegistro").value
  document.getElementById("finContraseña").value = document.getElementById("contraRegistro2").value
  document.getElementById("finNombre").value = document.getElementById("datosNombre").value
  document.getElementById("finApellido").value = document.getElementById("datosApell").value
  document.getElementById("finFechaNac").value = document.getElementById("datosFechaNac").value
}

function Guardar(){
  console.log ("entre Guardar")
  var correo = document.getElementById("finCorreo").value 
  var contraseña = document.getElementById("finContraseña").value
  var nombre = document.getElementById("finNombre").value 
  var apellido = document.getElementById("finApellido").value 
  var fechaNac = document.getElementById("finFechaNac").value
  let stateLogin = false
  
  const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
  const arrayUser = []

  const userExists = localSTGUsers.filter(local=> local.role === 'admin')

  if (userExists.length == 0) {
    var role = 'admin'
  } else{
    var role = 'user'
  }

  for (let i = 0; i < localSTGUsers.length; i++) {
    const userviejos = localSTGUsers[i];
    arrayUser.push(userviejos)
  }

  arrayUser.push({  id: arrayUser.length + 1, 
                    correo, 
                    contraseña, 
                    stateLogin, 
                    nombre, 
                    apellido, 
                    fechaNac, 
                    role })

  localStorage.setItem('user', JSON.stringify(arrayUser))

  location.href = 'inicio.html'
}

// PELICUAS//

function GuardarPelicula(){
  var nombrePeli = document.getElementById("nombrePeli").value 
  var generoPeli = document.getElementById("generoPeli").value
  var imgPeli = document.getElementById("imgPeli").value 
  var anoPeli = document.getElementById("anoPeli").value 
  var duraPeli = document.getElementById("duraPeli").value
  var trailerPeli = document.getElementById("trailerPeli").value
  var chaqueoPeli = document.getElementById("chaqueoPeli").value

  const localSTGPeli= JSON.parse(localStorage.getItem('peli')) || []
  const arrayPeli = []


/*  const peliExists = localSTGPeli.filter(local=> local.chaqueoPeli === 'act')

  if (peliExists.length == 0) {
    var chaqueoPeli = 'act'
  } else{
    var chaqueoPeli = 'desc'
  }
*/

  for (let i = 0; i < localSTGPeli.length; i++) {
    const peliviejas = localSTGPeli[i];
    arrayPeli.push(peliviejas)
  }

  arrayPeli.push({  id: arrayPeli.length + 1, 
                    nombrePeli ,
                    generoPeli, 
                    imgPeli ,
                    anoPeli ,
                    duraPeli ,
                    trailerPeli ,
                    chaqueoPeli })

  localStorage.setItem('peli', JSON.stringify(arrayPeli))

  agregarpeli()
}

function agregarpeli(){

    let peliSTG = JSON.parse(localStorage.getItem('peli'))
    
    console.log (peliSTG);
    
    let tbody = document.getElementById('pieBody')

    tbody.innerHTML = peliSTG.map(localSTGPeli =>
      `<tr>
          <td scope='row'>${localSTGPeli.id}</td>
          <td>${localSTGPeli.nombrePeli}</td>
          <td>${localSTGPeli.generoPeli}</td>
          <td>${localSTGPeli.imgPeli}</td>
          <td>${localSTGPeli.anoPeli}</td>
          <td>${localSTGPeli.duraPeli}</td>
          <td>${localSTGPeli.trailerPeli}</td>
          <td>${localSTGPeli.chaqueoPeli}</td>
          <td><button type="button" class="btn btn-warning" onclick ="modificar(${localSTGPeli.id})" data-bs-toggle="modal" data-bs-target="#modalModificarPeli">Modificar</button></td>
          <td><button type="button" class="btn btn-danger" onclick ="Eliminar(${localSTGPeli.id})" >Eliminar</button></td>
        </tr>`)
      console.log (tbody.innerHTML)
}

function modificar (id){  
  idm = id;
  var dbPeliM = localStorage.getItem('peli');


  const localSTGpelisB = JSON.parse(localStorage.getItem('peli')) || [] 

  const peliItem = localSTGpelisB.filter(local=> local.id === idm)

 
  // console.log(peliItem.nombrePeli); // { nombre: 'cerezas', cantidad: 5 }
  var Item = JSON.stringify(peliItem);
  var itemm = JSON.parse(Item);
console.log (itemm.nombrePeli)

  /*$("#modinombrePeli").val(Item.nombrePeli);
  $("#modiimgPeli").val(Item.imgPeli);
  $("#modianoPeli").val(Item.anoPeli);
  $("#modiduraPeli").val(Item.duraPeli);
  $("#moditrailerPeli").val(Item.trailerPeli);
  $("#modichaqueoPeli").val(Item.chaqueoPeli);*/

  $("#modinombrePeli").focus();
}

function Eliminar (id){
  idm = id;
  const localSTGpelisEliminar = JSON.parse(localStorage.getItem('peli')) || [] 
  const arrayPeli = []
  /*const PelisEliminar = localSTGpelisEliminar.filter(local=> local.id === idm)*/

  for (let i = 0; i < localSTGpelisEliminar.length; i++) {

    const peliviejas = localSTGpelisEliminar[i];
    if ( i = idm) {
      
    } else {
      arrayPeli.push(peliviejas)  
    } 
    localStorage.setItem('peli', JSON.stringify(arrayPeli))
  }

}




function mostrarPeli(){
  let peliSTG = JSON.parse(localStorage.getItem('peli'))

  let card = document.getElementById('card')

   card.innerHTML = peliSTG.map(localSTGPeli =>
    `<div class='card' style="'width: 18rem;'>
        <img src='${localSTGPeli.imgPeli}' class='card-img-top' alt='...'>
        <div class="card-body">
          <h5 class='card-title'>${localSTGPeli.nombrePeli}</h5>
          <p class='card-text'> Sipnoci de Pelicula </p>
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>${localSTGPeli.anoPeli} </li>
          <li class='list-group-item'>${localSTGPeli.duraPeli} </li>
          <li class='list-group-item'>A third item</li>
        </ul>
        <div class='card-body'>
          <a href='#' class='card-link'>${localSTGPeli.trailerPeli}</a>
          <a href='#' class='card-link'> </a>
        </div>
      </div>`)
}