const commentaires = document.querySelectorAll(".commentaire");
const titres = document.querySelectorAll("h2");

commentaires.forEach((commentaire) => {
  commentaire.style.display = "none";
});

titres.forEach((titre, index) => {
  titre.addEventListener("click", (event) => {
    const commentaire = commentaires[index];

    if (commentaire.style.display === "none") {
      commentaire.style.display = "block";
    } else {
      commentaire.style.display = "none";
    }
  });
});
