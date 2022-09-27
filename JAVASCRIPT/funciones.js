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
  console.log(localSTGpelisB.length);

  if (localSTGpelisB.length === 0) {
    primeraCarga();
  }

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
        `<div class="col-6 my-2  h-100">
                      <img
                        src="${localSTGPeliAventura.imgPeli}"
                        alt=""
                        class="img-fluid w-100 "
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
        `<div class="col-6 my-2 h-100">
                      <img
                        src="${localSTGPeliRomance.imgPeli}"
                        alt=""
                        class="img-fluid w-100 "
                      />
                      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliRomance.id}">${localSTGPeliRomance.nombrePeli}</a></p>
                    </div>`

      //         `<div class="card bg-white p-2 bg-opacity-25 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
      //   <img src="${localSTGPeliRomance.imgPeli}" class="card-img-top" alt="...">
      //   <div class="card-body">
      //      <p class="text-center p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeliRomance.id}">${localSTGPeliRomance.nombrePeli}</a></p>
      //   </div>
      // </div>`
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
      (localSTGPeli) =>
        `<div class="col-6 col-sm-4 col-md-3 col-lg-2  pt-3">
              <img src="${localSTGPeli.imgPeli}" alt="" class="img-fluid w-100">
              <p class="text-center  p-3 border"><a class="text-decoration-none text-white" href="verpelicula2.html?${localSTGPeli.id}">${localSTGPeli.nombrePeli}</a></p>
            </div>`
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
  console.log("primera cArga");
  localStorage.setItem("peli", JSON.stringify(MOVIES));
  console.log(MOVIES);
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

//pre carga movies
let MOVIES = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    nombre: "La memoria de un asesino",
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    nombrePeli: "Trece vidas",
    imgPeli: "https://pics.filmaffinity.com/thirteen_lives-664179403-large.jpg",
    generoPeli: "Drama",
    sinopsis:
      "Basada en la historia real, ´Trece vidas´ es el relato del rescate de un equipo de fútbol de la cueva de Tham Luang, en Tailandia, tras quedar atrapado por las lluvias torrenciales y peligrosas inundaciones. ",
    duraPeli: 142,
    trailerPeli: "https://www.youtube.com/embed/R068Si4eb3Y",
    anoPeli: 2022,
    Estreno: "Si",
    Destacada: "No",
    Estado: "Si",
  },
  {
    id: 9,
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
    id: 10,
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
];
