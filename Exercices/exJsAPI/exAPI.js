// Function que se ejecuta con el click en el boton del HTML
function goFetch() {
  // Variables
  let url = 'https://jsonplaceholder.typicode.com/posts/'
  let resultat = document.getElementById('resultat')

  try {

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

        let postsReduit = data.slice(0, 5);
        console.log(postsReduit)
              
        for (let i = 0; i < postsReduit.length; i++) {
        
        // Creo los li en la ul        
        let newLi = document.createElement('li')

        // Se define el HTML dentro del nuevo elemento li (hecho con Boostrap)
        newLi.innerHTML +=
          `
        <div class="card">
        ${postsReduit[i].id}  
          <div class="card-body">
          <h5 class="card-title">${postsReduit[i].title}</h5>
          <hr>
          <p class="card-text">${postsReduit[i].body}</p>
          </div>
        </div>
        `
        
        resultat.appendChild(newLi)
      }

    })
  } catch (e) {
      console.error("Une erreur est apparut!", e)
  }
}      


