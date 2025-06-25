function goFetch() {
  let url = 'https://jsonplaceholder.typicode.com/posts/'
  let resultat = document.getElementById('resultat')
  
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      let arr = new Array()

      let postsReduit = data.slice(0, 5);
      console.log(postsReduit)

      arr.forEach(postsReduit(resultat), {
        title,
        body
      });        
    })

}  