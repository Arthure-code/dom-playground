// Le paragraphe devient bleu sous la souris et redevient noir quand elle
// s'en va. Le style est posé par le script, pas par une règle :hover.
const survolable = document.getElementById("survolable");

survolable.addEventListener("mouseover", () => {
  survolable.style.color = "blue";
});

survolable.addEventListener("mouseout", () => {
  survolable.style.color = "black";
});
