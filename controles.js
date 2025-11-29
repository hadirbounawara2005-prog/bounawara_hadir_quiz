// Données du quiz
const questions = [{
    question: "1. Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
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
    options: ["&lt;header&gt;", "&lt;title&gt;", "&lt;p&gt;", "&lt;meta&gt;"],
    correct: 1
  },
  {
    question: "6. En CSS, comment centrer un texte ?",
    options: ["text-position: center;", "text-align: center;", "align: middle;", "justify: center;"],
    correct: 1
  },
  {
    question: "7. En JavaScript, quel est la fonction pour transformer une chaine S en majuscules ?",
    options: ["S.toLowerCase()", "S.toUpperCase()", "S.length", "S.slice(a,b)"],
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
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
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
    question: "18. En HTML, que fait la balise &lt;strong&gt;?",
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

// Sélection des éléments du DOM
const lien = document.getElementById("lien1");
const quizContainer = document.getElementById("quiz-container");
const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-quiz");
const resultsDiv = document.getElementById("results");
const statsDiv = document.getElementById("stats");

let time = 20 * 60; // 20 minutes
let timerInterval;
let attempt = localStorage.getItem('quiz_attempt') ? parseInt(localStorage.getItem('quiz_attempt')) + 1 : 1;

// Démarrer le quiz
lien.addEventListener("click", function(e) {
  e.preventDefault();
  lien.style.display = "none";
  document.getElementById("features").style.display = "none";
  quizContainer.style.display = "block"; // avant le demarrage de quiz le container etait : display:none
  generateQuiz();
  startTimer();
});

// Générer les questions
function generateQuiz() { //creation dun div pour le chronometre
  quizForm.innerHTML = `<div id="timer" style="box-shadow: 3px 3px
  3px gray; font-weight:bold; margin-bottom:10px;">Temps restant: 20:00</div>`;
  questions.forEach((q, i) => { //on va parcourir tous les questions de quiz et inserer
    //chaque question dans un DIV
    const div = document.createElement("div");
    div.id = "divquestion"
    div.innerHTML = `<p style='color:#008080' >${q.question}</p>` +
      q.options.map((opt, idx) => `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`).join('');
    //c'est pour recuperer les champs de q (question courant pointé avec foreach)
    quizForm.append(div);
  });
}

// temps de quizz:chnometre
function startTimer() {
  updateTimer();
  timerInterval = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(timerInterval);
      calculateScore();
    }
    updateTimer();
  }, 1000);
}

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timer").innerText = `Temps restant: ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

// Calcul du score
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  clearInterval(timerInterval);
  calculateScore();
});

function calculateScore() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = quizForm.querySelector(`input[name=q${i}]:checked`);
    if (selected && parseInt(selected.value) === q.correct) score++;
  });

  // Sauvegarder dans localStorage
  const quizData = JSON.parse(localStorage.getItem('quiz_data')) || [];
  quizData.push({
    attempt: attempt,
    score: score,
    date: new Date().toLocaleString()
  });//ajout dans la table un nv essai (local localStorage)
  localStorage.setItem('quiz_data', JSON.stringify(quizData));
  localStorage.setItem('quiz_attempt', attempt);
  showresults(score);
  showstats();


}

// Afficher le résultat et corrections
function showresults(score) {
  quizContainer.style.display = "none";
  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = `<h2 id='h22'>Votre score: ${score}/${questions.length}</h2>`;

  // Corrections
  let correctionHTML = "<h3 id='h3' style='text-align:center;'>Corrections:</h3><br>";
  questions.forEach((q, i) => {
    const selected = quizForm.querySelector(`input[name=q${i}]:checked`);
    correctionHTML += `
    <div id="divcorrec" style="
      padding: 15px;
      margin: 15px auto;
      width: 100%;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    ">
      <p style='color:#008080; font-weight:bold;'>${q.question}</p> <br>
      <p>Votre réponse: ${selected ? q.options[selected.value] : "Aucune"}</p><br>
      <p>Bonne réponse: ${q.options[q.correct]}</p>
    </div>
  `;
  });

  resultsDiv.innerHTML += correctionHTML;
}
// Afficher les statistiques
function showstats() {/*
  const quizData = JSON.parse(localStorage.getItem('quiz_data'));
  statsDiv.style.display = "block";
  let statsHTML = "<h3 id='h3'>Statistiques:</h3>";
  quizData.forEach(d => {
    statsHTML += `<br><p> Essai ${d.attempt}:  Score = ${d.score}/${questions.length}, Date = ${d.date}</p>`;
  });
  statsDiv.innerHTML = statsHTML;*/
  const quizData = JSON.parse(localStorage.getItem('quiz_data'));
statsDiv.style.display = "block";

// Titre
let statsHTML = "<h3 id='h3' align='center'>Statistiques</h3>";

// Parcours chaque essai
quizData.forEach(d => {
  statsHTML += `
    <div style="
      background-color: #E0FFFF;
      padding: 15px;
      margin: 15px auto;
      width: 90%;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
      color: #4169E1;
      font-variant: small-caps;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    "
    onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 15px rgba(0,0,0,0.3)'"
    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='2px 2px 6px rgba(0,0,0,0.2)';"
    > <br>
      Essai ${d.attempt}
      Score = ${d.score}/${questions.length}
      Date = ${d.date}<br>
    </div>
  `;
});

statsDiv.innerHTML = statsHTML;
  let btn = document.getElementById("retour_home");
  btn.style.display = "block";

}

//tous les styles des nv elements crees en js sont en css
/*pour vider le stockagelocale :
    localStorage.clear();
    attempt = 1;
*/
