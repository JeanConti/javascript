function formData() {
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let email = document.getElementById("email");

  FormData = {
    nom: nom,
    prenom: prenom,
    email: email,
  };
}

document.getElementById("btn").addEventListener("click", () => {
  let saveData =
    document.getElementById("nom").value &&
    document.getElementById("prenom").value &&
    document.getElementById("password").value;

  localStorage.setItem("formData", JSON.stringify(formData));
  
  if (addEventListener = 'click')
  alert("Données sauvegarder!!");

});

function getFormData() {
  let formData = JSON.parse(localStorage.getItem("formData"));
}
