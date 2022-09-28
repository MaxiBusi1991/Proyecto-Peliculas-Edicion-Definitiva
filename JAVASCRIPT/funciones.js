// PELICUAS//
let contador = 1;

function GuardarPelicula() {
  let bandera = 0;

  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];
  const arrayPeli = [];
  console.log("b antes" + bandera);
  // limpiarAlta();
  //funcion validar campos devuelve 1 si los campos del modal son validos
  bandera = validarCampos();
  console.log("b despues" + bandera);

  if (bandera === 0) {
    var nombrePeli = document.getElementById("nombrePeli").value;
    var generoPeli = document.getElementById("generoPeli").value;
    var imgPeli = document.getElementById("imgPeli").value;
    var anoPeli = document.getElementById("anoPeli").value;
    var duraPeli = document.getElementById("duraPeli").value;
    var trailerPeli = document.getElementById("trailerPeli").value;
    var sinopsis = document.getElementById("sinopsis").value;
    var Estreno = document.getElementById("Estreno").value;
    // var Destacada = document.getElementById("Destacada").value;
    var Destacada = "No";
    var Estado = document.getElementById("Estado").value;

    for (let i = 0; i < localSTGPeli.length; i++) {
      const peliviejas = localSTGPeli[i];
      arrayPeli.push(peliviejas);
    }

    arrayPeli.push({
      id: arrayPeli.length + contador,
      nombrePeli,
      generoPeli,
      imgPeli,
      anoPeli,
      duraPeli,
      trailerPeli,
      sinopsis,
      Estreno,
      Destacada,
      Estado,
    });

    localStorage.setItem("peli", JSON.stringify(arrayPeli));
    agregarpeli();
  } else {
    alert("Campos inválidos");
  }
}

// function limpiarAlta() {
//   nombrePeli.innerHTML = "";
//   generoPeli.innerHTML = "";
//   imgPeli.innerHTML = "";
//   anoPeli.innerHTML = "";
//   duraPeli.innerHTML = "";
//   trailerPeli.innerHTML = "";
//   sinopsis.innerHTML = "";
//   Estreno.innerHTML = "";
// }

function validarCampos() {
  bandera = 0;
  console.log("entra funcion validar campos");
  // nombre
  if (document.getElementById("nombrePeli").value != "") {
    var nombrePeli = document.getElementById("nombrePeli").value;
  } else {
    alert("Ingrese un nombre válido por favor");
    bandera++;
  }

  console.log("b nombre" + bandera);

  // nimg
  if (document.getElementById("imgPeli").value != "") {
    var nombrePeli = document.getElementById("imgPeli").value;
  } else {
    alert("Ingrese una URL válida por favor");
    bandera++;
  }
  console.log("b img" + bandera);
  // año
  if (
    document.getElementById("anoPeli").value != "" &&
    document.getElementById("anoPeli").value < 2023
  ) {
    var nombrePeli = document.getElementById("anoPeli").value;
  } else {
    alert("Ingrese un año válida por favor");
    bandera++;
  }
  console.log("b año" + bandera);
  //dura
  if (
    document.getElementById("duraPeli").value != "" &&
    document.getElementById("duraPeli").value > 0
  ) {
    var nombrePeli = document.getElementById("duraPeli").value;
  } else {
    alert("Ingrese una duración válida por favor");
    bandera++;
  }
  console.log("b dura" + bandera);
  // ntrailer
  if (document.getElementById("trailerPeli").value != "") {
    var nombrePeli = document.getElementById("trailerPeli").value;
  } else {
    alert("Ingrese una URL válida por favor");
    bandera++;
  }
  console.log("b trailer" + bandera);
  // sinopsis
  if (document.getElementById("sinopsis").value != "") {
    var nombrePeli = document.getElementById("sinopsis").value;
  } else {
    alert("Ingrese una sinopsis válida por favor");
    bandera++;
  }
  console.log("b sinopsis" + bandera);
  // estreno
  if (document.getElementById("Estreno").value != "") {
    var nombrePeli = document.getElementById("Estreno").value;
  } else {
    alert("Ingrese una sinipsis válida por favor");
    bandera++;
  }
  console.log("b estreno" + bandera);
  // var Destacada = document.getElementById("Destacada").value;
  var Estado = document.getElementById("Estado").value;
  return bandera;
}

let bandera = 0;
function destacarPelicula(id) {
  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];

  console.log("entra funcion destacar destacada");

  for (let i = 0; i < localSTGPeli.length; i++) {
    console.log("antes del if:" + localSTGPeli[i].Destacada);
    if (localSTGPeli[i].Destacada === "Si") {
      console.log("adentrodel if: " + localSTGPeli[i].Destacada);
      console.log("Ya hay una peli destacada");
      localSTGPeli[i].Destacada = "No";
      bandera = 1;
      alert(
        "La peli " +
          localSTGPeli[i].nombrePeli +
          " es la destacada. Modificar para destacar nueva peli"
      );
    }
    if (localSTGPeli[i].id === id && bandera === 1) {
      console.log("entra al if");
      localSTGPeli[i].Destacada = "Si";
    }
  }

  console.log(localSTGPeli);
  localStorage.setItem("peli", JSON.stringify(localSTGPeli));

  agregarpeli();
}

function agregarpeli() {
  console.log("entre agregar");
  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];

  let peliSTG = JSON.parse(localStorage.getItem("peli"));
  let tbody = document.getElementById("pieBody");

  tbody.innerHTML = peliSTG
    .map(
      (localSTGPeli) =>
        `<tr>
        <td scope='row'>${localSTGPeli.id}</td>
        <td>${localSTGPeli.nombrePeli}</td>
        <td>${localSTGPeli.generoPeli}</td>
        <td><a href="#" class="text-reset">${localSTGPeli.imgPeli}</a></td>
        <td>${localSTGPeli.anoPeli}</td>
        <td>${localSTGPeli.duraPeli}</td>
        <td><a href="#" class="text-reset">${localSTGPeli.trailerPeli}</a></td>
        <td > <button type="button" class="btn  btn-outline-light text-light" onclick ="msinopsis(${localSTGPeli.id})" data-bs-toggle="modal" data-bs-target="#sinopsisModal"> <i class="fa-solid fa-plus"></i> INFO </button></td>
        
        <td>${localSTGPeli.Estado}</td>
        <td>${localSTGPeli.Estreno}</td>
       
        
        <td><button type="button" class="btn btn-sm text-light" onclick="destacarPelicula(${localSTGPeli.id})" ><i class="fa-regular fa-star text-light"></i></button> ${localSTGPeli.Destacada}</td>
        
        <td><button type="button" class="btn  btn-outline-light " onclick ="modificar(${localSTGPeli.id})" data-bs-toggle="modal" data-bs-target="#modalModificarPeli"><i class="fa-solid fa-pen-to-square text-light"> </i></button></td>

        <td><button type="button" class="btn  btn-outline-light " onclick ="eliminarPelicula(${localSTGPeli.id})" ><i class="fa-solid fa-trash text-light">  </i> </button>
        
        </td>
        </tr>`
    )
    .join("");
}

function msinopsis(id) {
  console.log("entre si");
  idm = id;

  const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];

  const peliItem = localSTGpelisB.filter((local) => local.id === idm);

  document.getElementById("sinopsisVer").value = peliItem[0].sinopsis;
}

function modificar(id) {
  idm = id;

  const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];

  const peliItem = localSTGpelisB.filter((local) => local.id === idm);

  document.getElementById("ModiIdPeli").value = idm;
  // console.log("id sin modificar" + idm);
  document.getElementById("ModinombrePeli").value = peliItem[0].nombrePeli;
  document.getElementById("ModigeneroPeli").value = peliItem[0].generoPeli;
  // console.log("Genero sin modificar" + peliItem[0].generoPeli);
  document.getElementById("ModiimgPeli").value = peliItem[0].imgPeli;
  document.getElementById("ModianoPeli").value = peliItem[0].anoPeli;
  document.getElementById("ModiduraPeli").value = peliItem[0].duraPeli;
  document.getElementById("ModitrailerPeli").value = peliItem[0].trailerPeli;
  document.getElementById("Modisinopsis").value = peliItem[0].sinopsis;
  document.getElementById("ModiEstreno").value = peliItem[0].Estreno;
  document.getElementById("ModiDestacada").value = peliItem[0].Destacada;
  console.log("Destacada sin modificar" + peliItem[0].Destacada);
  document.getElementById("ModiEstado").value = peliItem[0].Estado;
}

function GuardarCambios() {
  var id = document.getElementById("ModiIdPeli").value;
  // console.log("id modificado" + id);
  var nombrePeli = document.getElementById("ModinombrePeli").value;
  var generoPeli = document.getElementById("ModigeneroPeli").value;
  // console.log("Genero modificado" + generoPeli);
  var imgPeli = document.getElementById("ModiimgPeli").value;
  var anoPeli = document.getElementById("ModianoPeli").value;
  var duraPeli = document.getElementById("ModiduraPeli").value;
  var trailerPeli = document.getElementById("ModitrailerPeli").value;
  var sinopsis = document.getElementById("Modisinopsis").value;
  var Estreno = document.getElementById("ModiEstreno").value;
  var Destacada = document.getElementById("ModiDestacada").value;
  console.log("Destaca modificado" + Destacada);
  var Estado = document.getElementById("ModiEstado").value;

  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];
  const arrayPeli = [];

  // CONTINUAR DESDE ACA

  for (let i = 0; i < localSTGPeli.length; i++) {
    if (id == localSTGPeli[i].id) {
      localSTGPeli[i].id = id;
      localSTGPeli[i].nombrePeli = nombrePeli;
      localSTGPeli[i].generoPeli = generoPeli;
      localSTGPeli[i].imgPeli = imgPeli;
      localSTGPeli[i].anoPeli = anoPeli;
      localSTGPeli[i].duraPeli = duraPeli;
      localSTGPeli[i].trailerPeli = trailerPeli;
      localSTGPeli[i].sinopsis = sinopsis;
      localSTGPeli[i].Estreno = Estreno;
      localSTGPeli[i].Destacada = Destacada;
      localSTGPeli[i].Estado = Estado;
    } else {
      console.log("no hubo modificaciones");
    }
  }
  console.log(localSTGPeli);
  localStorage.setItem("peli", JSON.stringify(localSTGPeli));

  agregarpeli();
}

function eliminarPelicula(id) {
  let peli = JSON.parse(localStorage.getItem("peli")); //// esto pasa la variables del locl a un ARRAY

  for (let i = 0; i < peli.length; i++) {
    if (peli[i].id === id) {
      peli.splice(i, 1); /// esto elimina en el array el valor seleccionado con el ID
    }
  }

  localStorage.setItem("peli", JSON.stringify(peli));
  contador++;
  agregarpeli();
}

/// pagina principal

function CargaPrincipal() {
  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const userExists = localSTGUsers.filter((local) => local.sesion === 1);

  if (userExists.length == 0) {
    // navar comun
    document.getElementById("navUsuario").style.display = "none";
    document.getElementById("navComun").style.display = "block";
  } else {
    // navar user
    document.getElementById("navComun").style.display = "none";
    document.getElementById("navUsuario").style.display = "block";
  }

  const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];
  console.log(localSTGpelisB.length);

  if (localSTGpelisB.length === 0) {
    primeraCarga();
  }

  //PELICULA DESTACADA

  console.log(localSTGpelisB);
  const peliItem = localSTGpelisB.filter((local) => local.Destacada === "Si");

  Fav.innerHTML = peliItem
    .map(
      (localSTGPeli) =>
        `<div class="container d-flex justify-content-center">
                <div class="card d-flex text-bg-dark my-3 mx-2">
                <img src="${localSTGPeli.imgPeli}" class="card-img" alt="...">

                <div class="card-img-overlay mx-0 w-50">
                    <h5 class="card-title">${localSTGPeli.nombrePeli}</h5>
                    <p class="card-text d-none d-sm-none d-md-block">${localSTGPeli.sinopsis}</p>
                    <button class="btn btn-primary">Reproducir</button>
                </div>
                </div>
            </div>`
    )
    .join("");

  // ESTRENOS
  const peliEstreno = localSTGpelisB.filter((local) => local.Estreno === "Si");
  console.log("Hola Maxi");
  console.log(peliEstreno);
  pEstreno.innerHTML = peliEstreno
    .map(
      (localSTGPeliEstreno) =>
        `<div class="col-6 col-sm-4 col-md-3 col-lg-2 h-100 pt-3">
              
              
              <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliEstreno.id}"><img src="${localSTGPeliEstreno.imgPeli}" alt="" class="img-fluid w-100 pt-2"></a>

              
            </div>`
    )
    .join("");
  console.log(pEstreno);

  // GENERO ACCION
  const peliAccion = localSTGpelisB.filter(
    (local) => local.generoPeli === "Accion"
  );
  console.log("Hola Maxi bUSI");
  pAccion.innerHTML = peliAccion
    .map(
      (localSTGPeliAccion) =>
        `<div class="col-6 my-3 h-100">
                      

<a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliAccion.id}"><img src="${localSTGPeliAccion.imgPeli}" alt="" class="img-fluid w-100"></a>

                     
                    </div>`
    )
    .join("");

  // GENERO COMEDIA
  const peliComedia = localSTGpelisB.filter(
    (local) => local.generoPeli === "Comedia"
  );

  pComedia.innerHTML = peliComedia
    .map(
      (localSTGPeliComedia) =>
        `<div class="col-6 my-3 h-100">
           
<a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliComedia.id}"><img src="${localSTGPeliComedia.imgPeli}" alt="" class="img-fluid w-100"></a>
            
            
          </div>`
    )
    .join("");

  // GENERO DRAMA
  const peliDrama = localSTGpelisB.filter(
    (local) => local.generoPeli === "Drama"
  );

  pDrama.innerHTML = peliDrama
    .map(
      (localSTGPeliDrama) =>
        `<div class="col-6 my-3 h-100">
                      
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliDrama.id}"><img src="${localSTGPeliDrama.imgPeli}" alt="" class="img-fluid w-100"></a>
                     
                    </div>`
    )
    .join("");

  // GENERO TERROR
  const peliTerror = localSTGpelisB.filter(
    (local) => local.generoPeli === "Terror"
  );

  pTerror.innerHTML = peliTerror
    .map(
      (localSTGPeliTerror) =>
        `<div class="col-6 my-3 h-100">
                      
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliTerror.id}"><img src="${localSTGPeliTerror.imgPeli}" alt="" class="img-fluid w-100"></a>

                    </div>`
    )
    .join("");

  // GENERO AVENTURA
  const peliAventura = localSTGpelisB.filter(
    (local) => local.generoPeli === "Aventura"
  );

  pAventura.innerHTML = peliAventura
    .map(
      (localSTGPeliAventura) =>
        `<div class="col-6 my-3 h-100  h-100">
                      
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliAventura.id}"><img src="${localSTGPeliAventura.imgPeli}" alt="" class="img-fluid w-100"></a>

                    </div>`
    )
    .join("");

  // GENERO INFANTIL
  const peliInfantil = localSTGpelisB.filter(
    (local) => local.generoPeli == "Infantil"
  );

  pInfantil.innerHTML = peliInfantil
    .map(
      (localSTGPeliInfantil) =>
        `<div class="col-6 my-3 h-100">
                     
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliInfantil.id}"><img src="${localSTGPeliInfantil.imgPeli}" alt="" class="img-fluid w-100"></a>

                    </div>`
    )
    .join("");

  // GENERO DOCUMENTAL
  const peliDocumental = localSTGpelisB.filter(
    (local) => local.generoPeli == "Documental"
  );

  pDocumental.innerHTML = peliDocumental
    .map(
      (localSTGPeliDocumental) =>
        `<div class="col-6 my-3 h-100 h-100">
                     
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliDocumental.id}"><img src="${localSTGPeliDocumental.imgPeli}" alt="" class="img-fluid w-100"></a>

                    
                    </div>`
    )
    .join("");

  // GENERO ROMANCE
  const peliRomance = localSTGpelisB.filter(
    (local) => local.generoPeli == "Romance"
  );

  pRomance.innerHTML = peliRomance
    .map(
      (localSTGPeliRomance) =>
        `<div class="col-6 my-3 h-100 h-100">
                      
                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliRomance.id}"><img src="${localSTGPeliRomance.imgPeli}" alt="" class="img-fluid w-100"></a>

                    
                    </div>`
    )
    .join("");

  // GENERO CIENCIA FICCION
  const peliFiccion = localSTGpelisB.filter(
    (local) => local.generoPeli == "Ficcion"
  );

  pFiccion.innerHTML = peliFiccion
    .map(
      (localSTGPeliFiccion) =>
        `<div class="col-6 my-3 h-100">
                      

                      <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliFiccion.id}"><img src="${localSTGPeliFiccion.imgPeli}" alt="" class="img-fluid w-100"></a>

                      
                    </div>`
    )
    .join("");
}

// funcion barra busqueda
let search = document.getElementById("search");

function buscarPelicula() {
  const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];

  const peliEncontrada = localSTGpelisB.filter(
    (peli) =>
      peli.nombrePeli.toUpperCase().includes(search.value.toUpperCase()) ||
      peli.generoPeli.toUpperCase().includes(search.value.toUpperCase())
  );

  pBusqueda.innerHTML = peliEncontrada
    .map(
      (localSTGPeliEncontrada) =>
        `
              <div class="col-6 col-sm-4 col-md-3 col-lg-2 h-100 pt-3 text-center">
                    
                       <a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliEncontrada.id}"><img src="${localSTGPeliEncontrada.imgPeli}" alt="" class="img-fluid w-100 pt-2"></a>

                      
                    </div>
            `
    )
    .join("");

  if (search.value == "") {
    pBusqueda.innerHTML = `
            <div  class="row">
              <div class="col">
                    </div>
            </div>`;
  }
}

// funcion primeraCarga
function primeraCarga() {
  localStorage.setItem("peli", JSON.stringify(pelis));
  console.log(pelis);
}

// login y registro
function UsuarioRoot() {
  console.log("entre Guardar");
  var correo = "admin@admin.com";
  var contraseña = 1234;
  var nombre = "Administrador";
  var apellido = "Administrador";
  var fechaNac = 01 / 01 / 2001;
  let stateLogin = false;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const arrayUser = [];

  const userExists = localSTGUsers.filter((local) => local.role === "admin");

  if (userExists.length === 0) {
    var role = "admin";
  }

  for (let i = 0; i < localSTGUsers.length; i++) {
    const userviejos = localSTGUsers[i];
    arrayUser.push(userviejos);
  }
  if (userExists.length === 0) {
    arrayUser.push({
      id: arrayUser.length + 1,
      sesion: 0,
      correo,
      contraseña,
      stateLogin,
      nombre,
      apellido,
      fechaNac,
      role,
    });
  }

  localStorage.setItem("user", JSON.stringify(arrayUser));
}
function recuperarContraseña() {
  var correoRecupero = document.getElementById("correoRecupero").value;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];

  const userExists = localSTGUsers.filter(
    (local) => local.correo === correoRecupero
  );

  if (userExists.length == 1) {
    alert("correo existente");
  } else {
    alert("correo INexistente");
  }
}
let banderaUser = 0;
function ingresar() {
  correo2 = document.getElementById("correo").value;
  contra = document.getElementById("contra").value;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const userExists = localSTGUsers.filter((local) => local.correo === correo2);

  if (userExists.length > 0) {
    if (userExists[0].contraseña == contra) {
      alert("correcto");
      if (userExists[0].role == "admin") {
        console.log("soy admin");
        for (let i = 0; i < localSTGUsers.length; i++) {
          if (localSTGUsers[i].correo == correo2) {
            console.log("entre if correo");
            localSTGUsers[i].sesion = 2;
          }
        }
        localStorage.setItem("user", JSON.stringify(localSTGUsers));
        location.href = "vistaUserAdmin.html";
      } else {
        for (let i = 0; i < localSTGUsers.length; i++) {
          if (localSTGUsers[i].correo == correo2) {
            console.log("entre if correo");
            localSTGUsers[i].sesion = 1;
          }
        }
        localStorage.setItem("user", JSON.stringify(localSTGUsers));
        location.href = "index.html";
      }
    } else {
      alert("incorrecto");
    }
  }
}
function Cerrar() {
  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const userExists = localSTGUsers.filter((local) => local.sesion === 1);
  if (userExists.length > 0) {
    for (let i = 0; i < localSTGUsers.length; i++) {
      if (localSTGUsers[i].sesion > 0) {
        localSTGUsers[i].sesion = 0;
      }
    }
    localStorage.setItem("user", JSON.stringify(localSTGUsers));
  }
  location.href = "index.html";
}

// registro
function comparar() {
  console.log("entre");
  contra1 = document.getElementById("contraRegistro1").value;
  contra2 = document.getElementById("contraRegistro2").value;

  if (contra1 == contra2) {
    console.log("son iguales");
    document.getElementById("siguiente1").style.display = "block";
  } else {
    alert("contraseñas incorrectas");
  }
}
function sigDatos() {
  console.log("entre");
  $("#collapseTwo").collapse("toggle");
}
function btnsig() {
  document.getElementById("siguiente2").style.display = "block";
}
function sigFin() {
  $("#collapseThree").collapse("show");
  document.getElementById("finCorreo").value =
    document.getElementById("correoRegistro").value;
  document.getElementById("finContraseña").value =
    document.getElementById("contraRegistro2").value;
  document.getElementById("finNombre").value =
    document.getElementById("datosNombre").value;
  document.getElementById("finApellido").value =
    document.getElementById("datosApell").value;
  document.getElementById("finFechaNac").value =
    document.getElementById("datosFechaNac").value;
}
function Guardar() {
  var correo = document.getElementById("finCorreo").value;
  var contraseña = document.getElementById("finContraseña").value;
  var nombre = document.getElementById("finNombre").value;
  var apellido = document.getElementById("finApellido").value;
  var fechaNac = document.getElementById("finFechaNac").value;
  var provi = document.getElementById("datosProv").value;
  let stateLogin = false;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const arrayUser = [];

  const userExists = localSTGUsers.filter((local) => local.role === "admin");

  if (userExists.length == 0) {
    var role = "admin";
  } else {
    var role = "user";
  }

  for (let i = 0; i < localSTGUsers.length; i++) {
    const userviejos = localSTGUsers[i];
    arrayUser.push(userviejos);
  }

  arrayUser.push({
    id: arrayUser.length + 1,
    sesion: 0,
    correo,
    contraseña,
    stateLogin,
    nombre,
    apellido,
    fechaNac,
    role,
    provi,
  });

  localStorage.setItem("user", JSON.stringify(arrayUser));
  VerUsuario();
}
function modiagre(idv) {
  console.log(idv);
  if (idv === " ") {
    document.getElementById("iduser").value = "";
    document.getElementById("finCorreo").value = "";
    document.getElementById("finContraseña").value = "";
    document.getElementById("finContraseña2").value = "";
    document.getElementById("finNombre").value = "";
    document.getElementById("finApellido").value = "";
    document.getElementById("finFechaNac").value = "";
    document.getElementById("datosProv").value = "";
    document.getElementById("GuardarM").style.display = "none";
    document.getElementById("Guardar").style.display = "block";
  } else {
    document.getElementById("Guardar").style.display = "none";
    document.getElementById("GuardarM").style.display = "block";
  }
}
function VerUsuario() {
  const localSTGUsuario = JSON.parse(localStorage.getItem("user")) || [];

  let UsuarioSTG = JSON.parse(localStorage.getItem("user"));
  let tablaUsuario = document.getElementById("tablaUsuario");

  tablaUsuario.innerHTML = UsuarioSTG.map(
    (localSTGUsuario) =>
      `<tr>
        <td scope='row'>${localSTGUsuario.id}</td>
        <td>${localSTGUsuario.correo}</td>
        <td>${localSTGUsuario.contraseña}</td>
        <td>${localSTGUsuario.nombre}</td>
        <td>${localSTGUsuario.apellido}</td>
        <td>${localSTGUsuario.provi}</td>
        <td> ${localSTGUsuario.fechaNac}</td>      
        <td> ${localSTGUsuario.role}</td>    

        <td><button onclick ="modificarU(${localSTGUsuario.id})" type="button"
            class="btn text-light btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#modalAgregarU"><i class="fa-solid fa-pen-to-square text-light"> </i></button></td>

        <td><button type="button" class="btn  btn-outline-light " onclick ="eliminarU(${localSTGUsuario.id})" ><i class="fa-solid fa-trash text-light">  </i> </button>
        
        </td>
        </tr>`
  ).join("");
}
function eliminarU(idE) {
  console.log(idE);
  console.log("entreUser");
  let idEE = Number(idE);
  let user = JSON.parse(localStorage.getItem("user")); //// esto pasa la variables del locl a un ARRAY
  console.log(user);

  for (let i = 0; i < user.length; i++) {
    if (Number(user[i].id) === idEE) {
      user.splice(i, 1); /// esto elimina en el array el valor seleccionado con el ID
    }
  }

  localStorage.setItem("user", JSON.stringify(user));

  VerUsuario();
}
function modificarU(idd) {
  console.log("entre");
  console.log(idd);
  idmm = idd;
  if (idmm > 0) {
    document.getElementById("Guardar").style.display = "none";
    document.getElementById("GuardarM").style.display = "block";
  } else {
    document.getElementById("GuardarM").style.display = "none";
    document.getElementById("Guardar").style.display = "block";
  }

  const localSTGusuarioB = JSON.parse(localStorage.getItem("user")) || [];

  const usuarioDatos = localSTGusuarioB.filter((local) => local.id == idmm);

  console.log(usuarioDatos);

  document.getElementById("iduser").value = idmm;
  document.getElementById("finCorreo").value = usuarioDatos[0].correo;
  document.getElementById("finContraseña").value = usuarioDatos[0].contraseña;
  document.getElementById("finContraseña2").value = usuarioDatos[0].contraseña;
  document.getElementById("finNombre").value = usuarioDatos[0].nombre;
  document.getElementById("finApellido").value = usuarioDatos[0].apellido;
  document.getElementById("finFechaNac").value = usuarioDatos[0].fechaNac;
  document.getElementById("datosProv").value = usuarioDatos[0].provi;
}

// Boton peliculas
function ActivarPeliculas() {
  agregarpeli();
  document.getElementById("UsuarioTabla").style.display = "none";
  document.getElementById("PeliculaTabla").style.display = "block";
}
// boton Usuario
function ActivarUsuarios() {
  document.getElementById("PeliculaTabla").style.display = "none";
  document.getElementById("UsuarioTabla").style.display = "block";
}

function GuardarModiUsuario() {
  console.log("entre a modi user");
  var iduser = document.getElementById("iduser").value;
  var correo = document.getElementById("finCorreo").value;
  var contraseña = document.getElementById("finContraseña").value;
  var nombre = document.getElementById("finNombre").value;
  var apellido = document.getElementById("finApellido").value;
  var fechaNac = document.getElementById("finFechaNac").value;
  var provi = document.getElementById("datosProv").value;
  let stateLogin = false;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const arrayUser = [];

  for (let i = 0; i < localSTGUsers.length; i++) {
    if (iduser == localSTGUsers[i].id) {
      localSTGUsers[i].id = iduser;
      localSTGUsers[i].correo = correo;
      localSTGUsers[i].contraseña = contraseña;
      localSTGUsers[i].nombre = nombre;
      localSTGUsers[i].apellido = apellido;
      localSTGUsers[i].fechaNac = fechaNac;
      localSTGUsers[i].provi = provi;
    }
  }

  localStorage.setItem("user", JSON.stringify(localSTGUsers));
  VerUsuario();
}

//pre carga movies

// pelis

let pelis = [
  {
    id: 1,
    nombrePeli: "Section 8",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/3G1wHQNITyfiABp2fgytpiFMHf9.jpg",
    generoPeli: "Accion",
    sinopsis:
      "Tras vengar el asesinato de su familia, un ex soldado sale de la cárcel y es reclutado por una oscura agencia gubernamental.",
    duraPeli: 98,
    trailerPeli: "https://www.youtube.com/embed/Jg9w12zHwlk",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 2,
    nombrePeli: "Megaboa",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/sAnAMv3eyQiGI1z2k8NsvH0Y6r5.jpg",
    generoPeli: "Accion",
    sinopsis:
      "En un viaje a Colombia, un grupo de estudiantes universitarios se encuentra con una boa constrictor de veinte metros, hambrienta de sangre.",
    duraPeli: 100,
    trailerPeli: "https://www.youtube.com/embed/h9X6rt9aUP4",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 3,
    nombrePeli: "Supercool",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/3NV278UG4Z8wOWpKFHz6I7D7Nda.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Mejores amigos, Neil y Gilbert comienzan su último año de secundaria con grandes esperanzas y aspiraciones. Neil siempre ha fantaseado con ser lo suficientemente genial como para salir con su enamorado de mucho tiempo y Gilbert siempre ha soñado con ser una súper estrella de las redes sociales. Después de lo que es, según todos los informes, un primer día muy decepcionante y vergonzoso en la escuela, Neil pide un deseo mágico de ser genial justo en el momento mágico en que el reloj marca las 11:11. A la mañana siguiente, Neil se despierta con una realidad que proviene directamente de los cómics de sus sueños.",
    duraPeli: 91,
    trailerPeli: "https://www.youtube.com/embed/nFsBy6i2z1k",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 4,
    nombrePeli: "Honor Society",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/1oeN5NtPM8SP6SZkpsZO6BWiegl.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Honor es una ambiciosa estudiante de último año de instituto cuyo único objetivo es entrar en Harvard, suponiendo que primero consiga la codiciada recomendación de su orientador, el Sr. Calvin. Dispuesta a hacer lo que sea necesario, Honor urde un plan maquiavélico para acabar con sus tres principales competidores estudiantiles, hasta que las cosas dan un giro cuando se enamora inesperadamente de su mayor competidor, Michael.",
    duraPeli: 97,
    trailerPeli: "https://www.youtube.com/embed/TIPBMxGqNWk",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 5,
    nombrePeli: "The Ex",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gd2Lsq6yMzQmjhlbU2C9vw4HAJ8.jpg",
    generoPeli: "Terror",
    sinopsis:
      "La historia de cómo las redes sociales y la mensajería instantánea están cambiando la vida de una persona moderna. Han pasado varios años desde que un adolescente de 16 años publicó una foto de su novia en el chat general, con la esperanza de presumir ante sus amigos. Ahora tiene una vida adulta feliz: trabajo, amigos, su prometida Katya, que está a punto de convertirse en su esposa. Pero Internet le hace recordar el amor adolescente, tras el cual se produce una cadena de inexplicables acontecimientos místicos con la futura esposa del joven. La chica recibe misteriosos mensajes del pasado de su prometido. A causa de ellos, su vida se convierte en una pesadilla.",
    duraPeli: 90,
    trailerPeli: "https://www.youtube.com/embed/1Cz--nL7CD0",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 6,
    nombrePeli: "Pinocho",
    imgPeli: "https://pics.filmaffinity.com/pinocchio-256590713-large.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "Versión en acción real y CGI del aclamado cuento sobre una marioneta que se embarca en una trepidante aventura para convertirse en un niño de verdad. La historia también presenta a otros personajes, como Gepetto, el carpintero que fabrica a Pinocho y lo trata como a su propio hijo; Pepito Grillo, que hace las veces de guía y “conciencia” de Pinocho o el Hada Azul.",
    duraPeli: 111,
    trailerPeli:
      "https://secure.disney.com/embed/5e052907a44a4ebd6b4f2a72?domain=disneylatino.com",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 7,
    nombrePeli: "Top Gun",
    imgPeli:
      "https://pics.filmaffinity.com/top_gun_maverick-537976462-large.jpg",
    generoPeli: "Acccion",
    sinopsis:
      "Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete ´Mavericks´ Mitchel  se encuentra donde siempre quiso estar: superando los límites como un valiente piloto de pruebas y esquivando el ascenso de rango, que no le dejaría volar emplazándolo en tierra. Cuando es destinado a la academia de Top Gun con el objetivo de entrenar a los pilotos de élite para realizar una peligrosa misión en territorio enemigo, Maverick se encuentra allí con el joven teniente Bradley Bradshaw , el hijo de su difunto amigo ´Goose´.",
    duraPeli: 131,
    trailerPeli: "https://www.dailymotion.com/embed/video/x89hfnb?autoplay=1",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 8,
    nombrePeli: "La memoria de un asesino",
    imgPeli: "https://pics.filmaffinity.com/memory-281680996-large.jpg",
    generoPeli: "Terror",
    sinopsis:
      "Un asesino a sueldo descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal... Remake de la película belga ´De zaak alzheimer´ (2003).",
    duraPeli: 114,
    trailerPeli: "https://www.youtube.com/embed/l6a_GdKxhWY",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 9,
    nombrePeli: "The Bunker Game",
    imgPeli: "https://pics.filmaffinity.com/samaritan-449167522-large.jpg",
    generoPeli: "Terror",
    sinopsis:
      "Después de varios accidentes misteriosos, se interrumpe un juego de rol de acción en vivo y los jugadores abandonan el búnker mientras el personal se queda atrás para investigar la desaparición de Greg, el autor intelectual del juego.",
    duraPeli: 90,
    trailerPeli: "https://www.youtube.com/embed/DPcbatQ7Yrk",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 10,
    nombrePeli: "Samaritan",
    imgPeli:
      "https://pics.filmaffinity.com/ame_wo_tsugeru_hyouryuu_danchi-350727721-large.jpg",
    generoPeli: "Acccion",
    sinopsis:
      "Sam Cleary , un joven de 13 años, sospecha que su misterioso y solitario vecino, el Sr. Smith , es en realidad un personaje legendario que se esconde a plena vista. Hace 20 años, el vigilante superpoderoso de Granite City, Samaritan, fue declarado muerto tras una batalla en un almacén con su rival, Némesis. La gente cree que Samaritan falleció en el incendio, pero algunos ciudadanos como Sam tienen la esperanza de que siga vivo. Con la delincuencia en aumento y la ciudad al borde del caos, Sam se propone sacar a su vecino de su escondite para salvar la ciudad de la ruina.",
    duraPeli: 102,
    trailerPeli: "https://www.youtube.com/embed/DPcbatQ7Yrk",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 11,
    nombrePeli: "Hogar a la deriva",
    imgPeli: "https://pics.filmaffinity.com/me_time-211909621-large.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "Los adolescentes Kosuke y Natsume son vecinos y amigos desde pequeños. Un verano, mientras juegan en su edificio que van a demoler, sucede un fenómeno muy extraño: a su alrededor, solo ven el mar. ¿Conseguirán Kosuke y los demás volver a su mundo? Las despedidas del verano no han hecho más que empezar.",
    duraPeli: 93,
    trailerPeli: "https://www.youtube.com/embed/eFkAo2sbn8M",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 12,
    nombrePeli: "Me Time",
    imgPeli: "https://pics.filmaffinity.com/thirteen_lives-664179403-large.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Un padre encuentra tiempo para sí mismo por primera vez en años mientras su esposa e hijos están fuera. Vuelve a conectar con un amigo para pasar un fin de semana salvaje.",
    duraPeli: 101,
    trailerPeli: "https://www.youtube.com/embed/zlWwUGrfXlo",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 13,
    nombrePeli: "Trece vidas",
    imgPeli: "https://pics.filmaffinity.com/thirteen_lives-664179403-large.jpg",
    generoPeli: "Drama",
    sinopsis:
      "Basada en la historia real, ´Trece vidas´ es el relato del rescate de un equipo de fútbol de la cueva de Tham Luang, en Tailandia, tras quedar atrapado por las lluvias torrenciales y peligrosas inundaciones. ",
    duraPeli: 142,
    trailerPeli: "https://www.youtube.com/embed/R068Si4eb3Y",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "Si",
    Estado: "Si",
  },
  {
    id: 14,
    nombrePeli: "Goodnight Mommy",
    imgPeli:
      "https://pics.filmaffinity.com/ich_seh_ich_seh_goodnight_mommy-227747347-large.jpg",
    generoPeli: "Terror",
    sinopsis:
      "Dos hermanos gemelos llegan a la casa de su madre y comienzan a sospechar que algo no está bien. Remake de la película austriaca homónima de 2014.",
    duraPeli: 92,
    trailerPeli: "https://www.youtube.com/embed/PS6Clja4S2E",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 15,
    nombrePeli: "Hustle",
    imgPeli: "https://pics.filmaffinity.com/hustle-306927612-large.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Sandler interpreta a un cazatalentos de baloncestistas en horas bajas que, estando en el extranjero, descubre un jugador con enorme talento pero con un pasado difícil. Sin la aprobación de su equipo, decide llevarse el fenómeno con él, dándoles a ambos una última oportunidad para demostrar que son dignos de la NBA.",
    duraPeli: 117,
    trailerPeli: "https://www.youtube.com/embed/lvRWUIUoaqU",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 16,
    nombrePeli: "Buenas Noches, Mamá",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/oHhD5jD4S5ElPNNFCDKXJAzMZ5h.jpg",
    generoPeli: "Terror",
    sinopsis:
      "Este remake de la película austriaca de 2014 del mismo nombre, sigue a una madre y sus dos hijos. En una casa solitaria en el campo, entre bosques y maizales, viven dos hermanos gemelos de nueve años que esperan a su madre. Cuando llega a casa, vendada tras la cirugía estética, nada es como antes. Los niños empiezan a dudar de que esta mujer sea realmente su madre. De esta forma, surge una lucha existencial por la identidad y la confianza en el seno de la familia.",
    duraPeli: 91,
    trailerPeli: "https://www.youtube.com/embed/rtE4pDglejo",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 17,
    nombrePeli: "La Huerfana",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
    generoPeli: "Terror",
    sinopsis:
      "Tras escapar de un centro psiquiátrico estonio, Leena Klammer viaja a América haciéndose pasar por Esther, la hija desaparecida de una familia adinerada. Pero cuando su máscara empieza a caer, se enfrenta a una madre que protegerá a su familia de la «niña» asesina a cualquier precio.",
    duraPeli: 99,
    trailerPeli: "https://www.youtube.com/embed/MRW6qHPODbE",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 18,
    nombrePeli: "No te preocupes querida",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/nK5CTCp1xF8hS6RyFSnlL5zNOmH.jpg",
    generoPeli: "Drama",
    sinopsis:
      "Alice y Jack tienen la suerte de vivir en Victoria, la ciudad experimental de la compañía que alberga a los hombres que trabajan para el Proyecto Victoria, de alto secreto, y a sus familias. La vida es perfecta, con todas las necesidades de los residentes cubiertas por la empresa. Todo lo que piden a cambio es un compromiso incondicional con la causa de Victoria. Pero cuando empiezan a aparecer grietas en su idílica vida, exponiendo destellos de algo mucho más siniestro que se esconde bajo la atractiva fachada, Alice no puede evitar cuestionarse qué están haciendo en Victoria y por qué. ¿Cuánto está dispuesta a perder Alice para sacar a la luz lo que realmente ocurre en el paraíso?",
    duraPeli: 123,
    trailerPeli: "https://www.youtube.com/embed/kMwLgSTNxb8",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 19,
    nombrePeli: "Thor:Amor y Trueno",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/kf9Bib75eduxt0QiVJO4pawfd9p.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "Cuarta película sobre «Thor» del MCU, en la que el Dios del trueno contará con Lady Thor como acompañante, personaje que interpretará Natalie Portman.",
    duraPeli: 119,
    trailerPeli: "https://www.youtube.com/embed/kBGD4kmA7KI",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 20,
    nombrePeli: "Veneciafrenia",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/luMC56bwZqaECYRz6X7sXjqN6nd.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "En la naturaleza existe vínculo indisoluble entre la belleza y la muerte. El ser humano, deudor de su entorno, imita lo que observa. Como mosquitos atraídos por el faro más brillante, los turistas están apagando la luz de la ciudad más hermosa del planeta. La agonía de las últimas décadas ha desatado la ira entre los venecianos. Para frenar la invasión, algunos se han organizado, dando rienda suelta a su instinto de supervivencia. Nuestros protagonistas, un sencillo grupo de turistas españoles, viajan a Venecia con la intención de divertirse, ajenos a los problemas que les rodean. Allí se verán obligados a luchar por salvar sus propias vidas.",
    duraPeli: 100,
    trailerPeli: "https://www.youtube.com/embed/uT-0OIVwLmQ",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 21,
    nombrePeli: "Black Phone",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/2LJC0MCghmmgSUNshpfA5RjHQay.jpg",
    generoPeli: "Terror",
    sinopsis:
      "En una ciudad de Colorado, en los años 70, un enmascarado secuestra a Finney Shaw, un chico tímido e inteligente de 13 años, y le encierra en un sótano insonorizado donde de nada sirven sus gritos. Cuando un teléfono roto y sin conexión empieza a sonar, Finney descubre que a través de él puede oír las voces de las anteriores víctimas, las cuales están decididas a impedir que Finney acabe igual que ellas.",
    duraPeli: 102,
    trailerPeli: "https://dai.ly/x8ac68v",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 22,
    nombrePeli: "Los Amantes",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/59sz1loOyLeIzARlgvj9nXOQyUK.jpg",
    generoPeli: "Drama",
    sinopsis:
      "Lisa y Simon son inseparables desde que se conocieron siendo adolescentes. Pero todo cambia a causa de las actividades criminales de Simon, que le obligan a huir sin Lisa al ver su vida amenazada. Ella espera recibir noticias suyas en vano durante algún tiempo. Tres años más tarde, sus caminos vuelven a cruzarse en una isla del océano índico, pero sus circunstancias han cambiado.",
    duraPeli: 102,
    trailerPeli: "https://dai.ly/x8bb253",
    anoPeli: 2020,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 23,
    nombrePeli: "Atenea",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uponqptyKtBsJuODqmxoronFd8P.jpg",
    generoPeli: "Drama",
    sinopsis:
      "Horas después de la trágica muerte de su hermano menor en circunstancias inexplicables, la vida de tres hermanos se ve sumida en el caos.",
    duraPeli: 97,
    trailerPeli: "https://dai.ly/x8d88qu",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 24,
    nombrePeli: "Amor Prohibido",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5StCcvqGPA4bjNrq3JGqXGfnjqS.jpg",
    generoPeli: "Drama",
    sinopsis:
      "En medio de la jungla urbana, Darko, un joven y apuesto inmigrante indocumentado, conoce a Alina, una misteriosa mujer que lleva una vida estable en Alemania. A pesar de las diferencias sociales y culturales, comparten una conexión erótica inmediata. Comienzan un apasionado romance y muy pronto Darko se encuentra absorbido por una atracción magnética.",
    duraPeli: 104,
    trailerPeli: "https://youtu.be/GW2LpXb7GXA",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 25,
    nombrePeli: "Tren Bala",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ybSIUt48PsM08F4UZwHdjL9ZVG2.jpg",
    generoPeli: "Accion",
    sinopsis:
      "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
    duraPeli: 127,
    trailerPeli: "https://youtu.be/jUPwb7yz1Nk",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 26,
    nombrePeli: "Lou",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
    generoPeli: "Accion",
    sinopsis:
      "Una tormenta inclemente. Una niña secuestrada. Una madre desesperada. Y una misteriosa vecina que no duda en unirse a una peligrosa misión de rescate en la naturaleza.",
    duraPeli: 107,
    trailerPeli: "https://dai.ly/x8d6rv8",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 27,
    nombrePeli: "Por los Pelos",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/l1gpVietOZl6UPfNY3zxaLkEPci.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Quedarse calvo sigue siendo un trauma para muchos hombres. Juanjo, Sebas y Rayco son tres ejemplos, entre millones, de cómo la alopecia, conlleva también la caída de la autoestima. Pero si bien la alopecia no diferencia ni entiende de estratos sociales, su solución, sí. Y es que, lo que hasta ahora era prohibitivo para muchos, Turquía lo ha hecho accesible para todos con su turismo capilar low cost, convirtiéndose así en el nuevo maná de los calvos. Juanjo, Sebas y Rayco se embarcarán en una aventura en la que descubrirán que su problema no está tanto encima de su cabeza, si no dentro.",
    duraPeli: 106,
    trailerPeli: "https://dai.ly/x8bpi3a",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 28,
    nombrePeli: "Minions",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/asE7W6XInrfxZ24svc5k24DTpek.jpg",
    generoPeli: "Comedia",
    sinopsis:
      "Fanboy de un supergrupo de supervillanos conocido como Vicious 6, Gru trama un plan para volverse lo suficientemente malvado como para unirse a ellos, con el respaldo de sus seguidores, los Minions.",
    duraPeli: 87,
    trailerPeli: "https://dai.ly/x8bfpli",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 29,
    nombrePeli: "La Bestia",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/lGIkv9fQ3i7yVcJXDvG0Vry00LI.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "El Doctor Nate Samuels, que se ha quedado viudo recientemente, regresa a Sudáfrica, lugar en el que conoció a su mujer, para visitar una reserva de animales con sus hijas. Pero lo que empieza siendo un viaje curativo se convierte en una lucha por la supervivencia cuando un león que ha escapado de unos cazadores furtivos empieza a seguirles.",
    duraPeli: 93,
    trailerPeli: "https://dai.ly/x8b3zbb",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 30,
    nombrePeli: "Broad Peak",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/hssJ3koEXveKRDXb3r6ujEuySGF.jpg",
    generoPeli: "Aventura",
    sinopsis:
      "Maciej Berbeka realiza la primera ascensión invernal del Broad Peak en 1988, escapando de la muerte por centímetros. Andrzej Zawada, el líder de la expedición, anuncia un gran éxito. Una vez que regresan a Polonia, resulta que Maciej «solo» alcanzó la Cumbre Rocosa, situada veintitrés metros más abajo que el pico real.",
    duraPeli: 100,
    trailerPeli: "https://dai.ly/x8d91xw",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 31,
    nombrePeli: "Koati",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5ljcIhwKHK5KlKunybUDNqJ4KXO.jpg",
    generoPeli: "Infantil",
    sinopsis:
      "Un coatí, una mariposa y una rana unen sus fuerzas para evitar a una malvada serpiente que está destruyendo sus hogares.",
    duraPeli: 85,
    trailerPeli: "https://dai.ly/x83u7ko",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 32,
    nombrePeli: "David y los Elfos",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/AtpnwDfKBlcPokEGcaxWO2fmiNl.jpg",
    generoPeli: "Infantil",
    sinopsis:
      "Un elfo, harto y desbordado por su trabajo, huye al mundo real para tratar de vivir la magia de la Navidad con la ayuda de un nuevo y joven amigo.",
    duraPeli: 105,
    trailerPeli: "https://dai.ly/x860hvc",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 33,
    nombrePeli: "Magic Camp",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/awcPLFFYjufRXd2oAAP6ZIXF9vM.jpg",
    generoPeli: "Infantil",
    sinopsis:
      "Un banquero regresa al Magic Camp al que asistió cuando era niño.",
    duraPeli: 100,
    trailerPeli: "https://dai.ly/x7vilow",
    anoPeli: 2020,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 34,
    nombrePeli: "Pajaro Loco",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/9crXSxVpQmw4kdmtKrvizmWwBG.jpg",
    generoPeli: "Infantil",
    sinopsis:
      "Lance Walters es un abogado divorciado que decide irse a vivir con su hijo y su nueva novia a una casa de ensueño en un bosque situado en las montañas. Sin embargo, allí descubrirá que para construir su hogar deberá cortar un árbol en el que vive un pájaro carpintero, contra el que empezará una guerra para decidir quién se quedará con el lugar.",
    duraPeli: 84,
    trailerPeli: "https://youtu.be/YKynIkUAC2k",
    anoPeli: 2017,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 35,
    nombrePeli: "Unplugging",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/tFL9lRtVUEmsVcggoag0u4H14mJ.jpg",
    generoPeli: "Romance",
    sinopsis:
      "¿Crees que una escapada rústica sin servicio de móvil, Internet o redes sociales es una forma romántica de reparar tu matrimonio y tu vida sexual? Piénsalo de nuevo. Conoce a Dan y Jeanine Dewerson. La única chispa que hay en su dormitorio proviene del enchufe de la pared. El mejor amigo de su hija es su iPad. Dan no va a aguantar más y planea un tranquilo y relajante fin de semana en un remoto pueblo de montaña. Sin niños, sin teléfonos, sin redes sociales, sólo aire puro y mucho romance. Pero lo que empieza como un fin de semana perfecto se convierte rápidamente en un desastre con encuentros sobrenaturales, fuertes comestibles, lugareños malhumorados y un molesto perro tuerto. Sin un GPS que les guíe ni redes sociales que eviten su aburrimiento, Dan y Jeanine se ven obligados a reconectar entre sí. ¿Puede una «desintoxicación digital» salvar su matrimonio y su cordura?",
    duraPeli: 94,
    trailerPeli: "https://dai.ly/x89sj5g",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 36,
    nombrePeli: "Sin Aliento",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/AqnFoTOKLAtVIf3HtfM5GUd1ivW.jpg",
    generoPeli: "Romance",
    sinopsis:
      "Roxana Aubrey decide dejar sus estudios y escapar de su vida en París para tomar un curso de buceo libre en el sur de Francia. Rápidamente se ve arrastrada a una vida que alcanza nuevas profundidades gracias al peso del descenso de un océano.",
    duraPeli: 100,
    trailerPeli: "https://dai.ly/x8dnhwz",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 37,
    nombrePeli: "After",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/iA7oMNByuPRIapcILH8zwEoxV2h.jpg",
    generoPeli: "Romance",
    sinopsis:
      "El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle. Tessa es la única capaz de entenderle y calmarle… él la necesita, pero ella ya no es la chica buena y dulce que era cuando llegó a la universidad. Deberá plantearse si lo que debe hacer ahora es salvar a Hardin y su relación con él, o si ha llegado el momento de pensar solo en ella. Si quieren que su amor sobreviva, primero tendrán que trabajar en sí mismos. ¿Pero será su destino seguir estando juntos?",
    duraPeli: 95,
    trailerPeli: "https://dai.ly/x8ch0mo",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 38,
    nombrePeli: "First Love",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/aygkRhW2pOmJHP8KgU4rVK9gKJb.jpg",
    generoPeli: "Romance",
    sinopsis:
      "La difícil entrada en la vida adulta de un joven que experimenta los altibajos de su primer amor, mientras lidia con las secuelas familiares provocadas por la crisis financiera de 2008.",
    duraPeli: 95,
    trailerPeli: "https://dai.ly/x8aqzu6",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 39,
    nombrePeli: "Maybe Die",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/juk7GtWdjEkZqviJN96ReHRgnQl.jpg",
    generoPeli: "Documental",
    sinopsis:
      "Un equipo de mensajeros en bicicleta con sede en Madrid, especializado en viajes de larga distancia, viaja a Japón con sus bicicletas de piñón fijo. Inspirados en la legendaria Odisea japonesa, recorren sin asistencia alguna 22 etapas y más de 1.200 km.",
    duraPeli: 63,
    trailerPeli: "https://youtu.be/2L92_EsS4mw",
    anoPeli: 2016,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 40,
    nombrePeli: "Vidas Menores",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gqBPf8G7VxaKePDYV7iAIrFmFVu.jpg",
    generoPeli: "Documental",
    sinopsis:
      "En los últimos años, miles de menores marroquíes salen de su país para tratar de vivir en Europa. Viajan sin compañía de sus familiares, muchos de ellos colándose en los transportes que atraviesan el Mediterráneo hacia la costa española. “Vidas menores” acompaña a varios de estos chicos en diferentes momentos de su viaje migratorio, retratando su cotidianeidad tal y como ellos la viven. El documental gira en torno al impacto y al significado que este viaje tiene para sus protagonistas, en una historia que se cuenta desde la perspectiva humana, sin otros testimonios que los de los propios menores y ofreciendo al espectador una mirada sin filtros ni prejuicios.",
    duraPeli: 78,
    trailerPeli: "https://player.vimeo.com/video/451425554?h=939c18968a",
    anoPeli: 2020,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 41,
    nombrePeli: "Flight/Risk",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/coiqkol7YYXOKeZiVROkYHhd7wv.jpg",
    generoPeli: "Documental",
    sinopsis:
      "Personas cotidianas se encuentran en medio de una tragedia mundial cuando dos aviones Boeing 737 Max se estrellan con solo cinco meses de diferencia en 2018 y 2019. Este impactante documental se cuenta a través de la perspectiva de los miembros de las familias afectadas, sus equipos legales, los denunciantes y el periodista del Seattle Times ganador del Pulitzer, Dominic Gates.",
    duraPeli: 98,
    trailerPeli: "https://dai.ly/x8diw3n",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 42,
    nombrePeli: "Fantasia",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/kzsGvpbWMtgIYt1Y8gIr61CWLVY.jpg",
    generoPeli: "Documental",
    sinopsis:
      "Los hermanos Amaia y Aitor están cerca de cumplir cincuenta años. No tienen hijos. Desde muy jóvenes viven lejos de sus padres, Kontxi e Iñaki, ya jubilados. Un verano se juntan en un crucero llamado Fantasia. En alta mar es como si el tiempo se parase, pero más allá del horizonte la realidad sigue avanzando sin descanso.",
    duraPeli: 100,
    trailerPeli: "https://dai.ly/x82swek",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 43,
    nombrePeli: "¡Nop!",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/hlJKvYdKJJeWoKeNNs1Fom1chIz.jpg",
    generoPeli: "Ficcion",
    sinopsis:
      "Dos residentes de un remoto pueblo en el interior de California realizan un descubrimiento tan insólito como escalofriante…",
    duraPeli: 135,
    trailerPeli: "https://dai.ly/x8bjgco",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 44,
    nombrePeli: "Visitante",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/lQJoMwHXtARzZoryw5YfO3HhybJ.jpg",
    generoPeli: "Ficcion",
    sinopsis:
      "Marga, en medio de una crisis con su marido, decide pasar unos días en una antigua casa de su pueblo. Allí, empieza a percibir extraños fenómenos que la aterran.",
    duraPeli: 99,
    trailerPeli: "https://dai.ly/x87c3xw",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 45,
    nombrePeli: "Tides",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ccGic6JXCnk6sxCC0qT8T9o0gCU.jpg",
    generoPeli: "Ficcion",
    sinopsis:
      "Tides [The Colony] cinta de ciencia ficción y misterio, co escrita y dirigida por Tim Fehlbaum (Hell), cuando la tierra se volvió inhabitable para los humanos a consecuencia a una catástrofe global, los miembros de la élite gobernante se instalaron en el planeta Kepler 209, uno de los más cercanos a la Tierra y con condiciones favorables para la vida. Sin embargo, la atmósfera del nuevo planeta ha dejado estériles a sus nuevos habitantes y, previendo un nuevo desastre, el gobierno organiza una misión de exploración a la Tierra para analizar sus nuevas condiciones. Sin embargo, el viaje sufre contratiempos al entrar al planeta y Blake, una astronauta, es la única sobreviviente del impacto. Pronto, descubre que hay más habitantes en el lugar, mismos que permanecen ocultos de las mareas que abarcan todo el territorio y solo salen para buscar comida cuando las aguas retroceden. En los siguientes días, la chica descubre un peligroso secreto que puede poner fin a los sobrevivientes y a su propio planeta.",
    duraPeli: 104,
    trailerPeli: "https://youtu.be/Vw7zapoTYWo",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 46,
    nombrePeli: "Programa ADN",
    imgPeli:
      "https://image.tmdb.org/t/p/w185_and_h278_bestv2/c2eiDD1vvCYLllgDrG5Q8ZsyX5E.jpg",
    generoPeli: "Ficcion",
    sinopsis:
      "Cuando un humilde cartero es incluido en un programa de ADN sobrehumano ultrasecreto en un centro de investigación, se revela que podrá recibir, controlar y enviar información basada en los sentidos de los demás.",
    duraPeli: 90,
    trailerPeli: "https://youtu.be/au750jTS_2I",
    anoPeli: 2021,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
];
