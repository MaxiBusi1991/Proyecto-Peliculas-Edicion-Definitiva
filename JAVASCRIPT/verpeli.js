//pagina redireccionada

let id = window.location.search.split("?").pop();
console.log(id);

const localSTGpelisB = JSON.parse(localStorage.getItem("peli")) || [];

const peliEs = localSTGpelisB.filter((peli) => peli.id == id);
verPeli.innerHTML = peliEs
  .map(
    (localSTGPeliEs) =>
      `
             <div class="row ">
            <img src="${localSTGPeliEs.imgPeli}" class="mt-2 " alt="${localSTGPeliEs.nombrePeli}">
             </div>

             <div class="row text-light">
             
            <!-- abro columna izquierda -->

            <div class="m-2 col">
               
                    <h2 >${localSTGPeliEs.nombrePeli}</h2>
                   <div ><p >${localSTGPeliEs.duraPeli} min &nbsp&nbsp&nbsp&nbsp&nbsp    +16  &nbsp&nbsp&nbsp&nbsp&nbsp    ⭐⭐⭐⭐⭐</p>

                   </div>

                 
                        <button type="button" class="btn violeta-claro m-2 text-light "><i class="fa-solid fa-play mx-2"></i>Reproducir</button>
                        
                        <abbr title="Agregar a mi lista">  <button type="button" class="boton-sobrio m-2 text-light "><i class="fa-solid fa-plus text-light"></i></button></abbr>

                        <button type="button" class="boton-sobrio m-2 text-light "><i class="fa-solid fa-thumbs-up text-light"></i></i></button>
                    
                     
                  <p>${localSTGPeliEs.sinopsis}</p>

                  <div class=" d-none d-lg-block text-light">
                    <h5>Información técnica de ${localSTGPeliEs.nombrePeli}</h5>
                    <p>Año: ${localSTGPeliEs.anoPeli} </p>
                    <p>Duración:${localSTGPeliEs.duraPeli}
                    </p>
                    <p>Género:${localSTGPeliEs.generoPeli} </p>
            
         
                 </div>


          </div>
          <!-- cierro columna izquierda  -->

          <!-- abro columna derecha  -->
          <div class="col  m-auto  d-none d-lg-block ">
            
            <div class="mt-2">
                <p class="text-center  "><iframe width="560" height="315" src="${localSTGPeliEs.trailerPeli}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe></p> 
            </div>
            
        
          </div>
          
          <!-- cierro columna derecha -->
          </div>
            `
  )
  .join("");
