var jour = prompt("Quel jour de la semaine est-on ?");

switch(jour) {
    case "lundi":
        alert("mardi");
        break;
    case "mardi":
        alert("mercredi");
        break;
    case "mercredi":
        alert("jeudi");
        break;
    case "jeudi":
        alert("vendredi");
        break;
    case "vendredi":
        alert("samedi");
        break;
    case "samedi":
        alert("dimanche");
        break;
    case "dimanche":
        alert("lundi");
        break;
}