// PELICUAS//

function GuardarPelicula() {
  var nombrePeli = document.getElementById("nombrePeli").value;
  var generoPeli = document.getElementById("generoPeli").value;
  var imgPeli = document.getElementById("imgPeli").value;
  var anoPeli = document.getElementById("anoPeli").value;
  var duraPeli = document.getElementById("duraPeli").value;
  var trailerPeli = document.getElementById("trailerPeli").value;
  var sinopsis = document.getElementById("sinopsis").value;
  var Estreno = document.getElementById("Estreno").value;
  var Destacada = document.getElementById("Destacada").value;
  var Estado = document.getElementById("Estado").value;

  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];
  const arrayPeli = [];

  for (let i = 0; i < localSTGPeli.length; i++) {
    const peliviejas = localSTGPeli[i];
    arrayPeli.push(peliviejas);
  }

  arrayPeli.push({
    id: arrayPeli.length + 1,
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
        <td > <button type="button" class="btn btn-primary" onclick ="msinopsis(${localSTGPeli.id})" data-bs-toggle="modal" data-bs-target="#exampleModal"> </td>
        <td>${localSTGPeli.Estado}</td>
        <td>${localSTGPeli.Estreno}</td>
        <td>${localSTGPeli.Destacada}</td>
        <td><button type="button" class="btn btn-warning" onclick ="modificar(${localSTGPeli.id})" data-bs-toggle="modal" data-bs-target="#modalModificarPeli"><i class="fa-solid fa-pen-to-square text-light"> </i></button></td>
        <td><button type="button" class="btn btn-danger" onclick ="eliminarPelicula(${localSTGPeli.id})" ><i class="fa-solid fa-trash text-light">  </i> </button></td>
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

  console.log(peliItem[0].Estreno);

  document.getElementById("ModiIdPeli").value = idm;
  document.getElementById("ModinombrePeli").value = peliItem[0].nombrePeli;
  document.getElementById("ModigeneroPeli").value = peliItem[0].generoPeli;
  document.getElementById("ModiimgPeli").value = peliItem[0].imgPeli;
  document.getElementById("ModianoPeli").value = peliItem[0].anoPeli;
  document.getElementById("ModiduraPeli").value = peliItem[0].duraPeli;
  document.getElementById("ModitrailerPeli").value = peliItem[0].trailerPeli;
  document.getElementById("Modisinopsis").value = peliItem[0].sinopsis;
  document.getElementById("ModiEstreno").value = peliItem[0].Estreno;
  document.getElementById("ModiDestacada").value = peliItem[0].Destacada;
  document.getElementById("ModiEstado").value = peliItem[0].Estado;
}

function GuardarCambios() {
  var id = document.getElementById("ModiIdPeli").value;
  var nombrePeli = document.getElementById("ModinombrePeli").value;
  var generoPeli = document.getElementById("ModigeneroPeli").value;
  var imgPeli = document.getElementById("ModiimgPeli").value;
  var anoPeli = document.getElementById("ModianoPeli").value;
  var duraPeli = document.getElementById("ModiduraPeli").value;
  var trailerPeli = document.getElementById("ModitrailerPeli").value;
  var sinopsis = document.getElementById("Modisinopsis").value;
  var Estreno = document.getElementById("ModiEstreno").value;
  var Destacada = document.getElementById("ModiDestacada").value;
  var Estado = document.getElementById("ModiEstado").value;

  const localSTGPeli = JSON.parse(localStorage.getItem("peli")) || [];
  const arrayPeli = [];

  for (let i = 0; i < localSTGPeli.length; i++) {
    const peliviejas = localSTGPeli[i];
    if (i == id - 1) {
      arrayPeli.push({
        id,
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
    } else {
      arrayPeli.push(peliviejas);
    }
  }

  localStorage.setItem("peli", JSON.stringify(arrayPeli));

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
  agregarpeli();
}

/// pagina principal

function CargaPrincipal() {
  const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];

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

  // col-6 col-sm-4 col-md-3 col-lg-2

  // ESTRENOS
  const peliEstreno = localSTGpelisB.filter((local) => local.Estreno === "Si");
  console.log("Hola Maxi");
  console.log(peliEstreno);
  pEstreno.innerHTML = peliEstreno
    .map(
      (localSTGPeliEstreno) =>
        `<div class="col-6 col-sm-4 col-md-3 col-lg-2  pt-3">
              <img src="${localSTGPeliEstreno.imgPeli}" alt="" class="img-fluid w-100">
              <p class="text-center  p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliEstreno.id}">${localSTGPeliEstreno.nombrePeli}</a></p>
            </div>`
    )
    .join("");
  console.log(pEstreno);

  // GENERO ACCION
  const peliAccion = localSTGpelisB.filter(
    (local) => local.generoPeli === "Acccion"
  );
  console.log("Hola Maxi bUSI");
  pAccion.innerHTML = peliAccion
    .map(
      (localSTGPeliAccion) =>
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliAccion.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliAccion.id}">${localSTGPeliAccion.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliComedia.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliComedia.id}">${localSTGPeliComedia.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliDrama.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliDrama.id}">${localSTGPeliDrama.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliTerror.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliTerror.id}">${localSTGPeliTerror.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliAventura.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliAventura.id}">${localSTGPeliAventura.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliInfantil.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliInfantil.id}">${localSTGPeliInfantil.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliDocumental.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliDocumental.id}">${localSTGPeliDocumental.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliRomance.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliRomance.id}">${localSTGPeliRomance.nombrePeli}</a></p>
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
        `<div class="col-6 my-2">
                      <img
                        src="${localSTGPeliFiccion.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center  p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliFiccion.id}">${localSTGPeliFiccion.nombrePeli}</a></p>
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
              <div class="col-6 col-sm-4 col-md-3 col-lg-2  pt-3 text-center">
                      <img
                        src="${localSTGPeliEncontrada.imgPeli}"
                        alt=""
                        class="img-fluid w-100"
                      />
                      <p class="text-center  p-3 border"><a class="text-white text-decoration-none" href="verpelicula2.html?${localSTGPeliEncontrada.id}">${localSTGPeliEncontrada.nombrePeli}</a></p>
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

  if (userExists.length == 0) {
    var role = "admin";
  }

  for (let i = 0; i < localSTGUsers.length; i++) {
    const userviejos = localSTGUsers[i];
    arrayUser.push(userviejos);
  }

  arrayUser.push({
    id: arrayUser.length + 1,
    correo,
    contraseña,
    stateLogin,
    nombre,
    apellido,
    fechaNac,
    role,
  });

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

function ingresar() {
  correo2 = document.getElementById("correo").value;
  contra = document.getElementById("contra").value;

  const localSTGUsers = JSON.parse(localStorage.getItem("user")) || [];
  const userExists = localSTGUsers.filter((local) => local.correo === correo2);

  if (userExists.length > 0) {
    if (userExists[0].contraseña == contra) {
      alert("correcto");
      if (userExists[0].role == "admin") {
        location.href = "inicio.html";
      } else {
        location.href = "inicio.html";
      }
    } else {
      alert("incorrecto");
    }
  }
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
  console.log("entre Guardar");
  var correo = document.getElementById("finCorreo").value;
  var contraseña = document.getElementById("finContraseña").value;
  var nombre = document.getElementById("finNombre").value;
  var apellido = document.getElementById("finApellido").value;
  var fechaNac = document.getElementById("finFechaNac").value;
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
    correo,
    contraseña,
    stateLogin,
    nombre,
    apellido,
    fechaNac,
    role,
  });

  localStorage.setItem("user", JSON.stringify(arrayUser));

  location.href = "inicio.html";
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
