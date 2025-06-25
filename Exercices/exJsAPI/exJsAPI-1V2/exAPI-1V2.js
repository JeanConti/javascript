function goFetch() {
  let url = 'https://jsonplaceholder.typicode.com/posts/'
  let resultat = document.getElementById('resultat')
  
  try {

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

      console.log(data)
      let postsReduit = data.slice(0, 5);
      
        posts.slice(0, 5).forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML =
        `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
    })

    })
    
      

  } catch (e) {
      console.error("Une erreur est apparut!", e)
  }


}      

