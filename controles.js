const questions = [
  {
    question: "1. Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "2. Quelle propriété CSS change la couleur du texte ?",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: 2
  },
  {
    question: "3. Que signifie CSS ?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Style Syntax"
    ],
    correct: 1
  },
  {
    question: "4. Quelle méthode JS affiche un message dans la console ?",
    options: ["console.log()", "alert()", "message()", "prompt()"],
    correct: 0
  },
  {
    question: "5. Quelle balise contient le titre du site ?",
    options: ["<header>", "<title>", "<head>", "<meta>"],
    correct: 1
  },
  {
    question: "6. En CSS, comment centrer un texte ?",
    options: ["text-position: center;", "text-align: center;", "align: middle;", "justify: center;"],
    correct: 1
  },
  {
    question: "7. En JavaScript, quel symbole est utilisé pour les commentaires ?",
    options: ["#", "//", "/* */", "<!-- -->"],
    correct: 1
  },
  {
    question: "8. Quelle extension pour un fichier JavaScript ?",
    options: [".java", ".js", ".jsx", ".json"],
    correct: 1
  },
  {
    question: "9. Quelle propriété CSS contrôle la taille du texte ?",
    options: ["font-size", "text-size", "size", "font-style"],
    correct: 0
  },
  {
    question: "10. Quelle méthode JS convertit une chaîne en nombre ?",
    options: ["toNumber()", "parseInt()", "int()", "convert()"],
    correct: 1
  },
  {
    question: "11. Quel attribut HTML affiche un texte d’aide ?",
    options: ["alt", "placeholder", "title", "tooltip"],
    correct: 2
  },
  {
    question: "12. En CSS, comment faire une bordure arrondie ?",
    options: ["border-curve", "border-round", "border-radius", "curve"],
    correct: 2
  },
  {
    question: "13. En JavaScript, que fait '===’ ?",
    options: [
      "Compare sans vérifier le type",
      "Compare avec vérification du type",
      "Assigne une valeur",
      "Aucune des réponses"
    ],
    correct: 1
  },
  {
    question: "14. Quelle balise HTML crée une liste ordonnée ?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: 1
  },
  {
    question: "15. Quelle fonction JS demande une saisie utilisateur ?",
    options: ["confirm()", "ask()", "prompt()", "alert()"],
    correct: 2
  },
  {
    question: "16. Quelle unité CSS est relative à la taille du viewport ?",
    options: ["px", "em", "rem", "vw"],
    correct: 3
  },
  {
    question: "17. Quelle propriété CSS ajoute une ombre à un texte ?",
    options: ["box-shadow", "text-shadow", "shadow", "font-shadow"],
    correct: 1
  },
  {
    question: "18. En HTML, que fait la balise <strong> ?",
    options: ["Met le texte en italique", "Souligne le texte", "Met le texte en gras", "Rien du tout"],
    correct: 2
  },
  {
    question: "19. Quelle méthode JS joint les éléments d’un tableau ?",
    options: ["merge()", "join()", "concat()", "combine()"],
    correct: 1
  },
  {
    question: "20. Que signifie DOM en JavaScript ?",
    options: ["Document Object Model", "Data Object Map", "Digital Object Module", "Document Oriented Mode"],
    correct: 0
  }
];
const lien = document.getElementById("lien1");
  lien.addEventListener("click", function(e) {
    e.preventDefault(); // empeche le lien de deplaceemnt  a une autre page

  });
