console.log("Tamagotchi doet het");

const fases = [ //array//
  "images/fase2ei.png",
  "images/fase3ei.png",
  "images/fase4ei.png"
];


const knopPeper = document.querySelector("#knop-peper");
const knopPeer = document.querySelector("#knop-peer");
const knopAardappel = document.querySelector("#knop-aardappel");
const knopVis = document.querySelector("#knop-vis");

const tamagotchi = document.getElementById("tamagotchi");
const muziek = document.getElementById("achtergrondmuziek");

const confettiKnop = document.getElementById("confetti-knop");




//Dlo en W3schools.//
let currentStage = 0;

function upgradeTamagotchi() {
  if (currentStage < fases.length) {
    tamagotchi.src = fases[currentStage]; 
    currentStage++;
  } else {
    tamagotchi.src = "images/fase1draak.png";
    tamagotchi.classList.add("vuurdraak");
  }
}



//Hulp gekregen van Valerie en chatgpt gevraagd om te ordenen.//
let muziekGestart = false;

document.body.addEventListener("click", () => {
  if (!muziekGestart) {
    if (muziek) {
      muziek.play();
      muziekGestart = true;
    } else {
      console.log("Achtergrondmuziek niet gevonden.");
    }
  }
});


//Geordend met behulp van chatgpt + zweefeffect van chatgpt. Promt: voeg een zwevend effect aan de draakjes toe.//
function voedDraak(eten) {

  if (currentStage < fases.length) {
    upgradeTamagotchi();
  } else {
   
    tamagotchi.classList.remove("zwevend");

    if (eten === "peper") {
      tamagotchi.src = "images/fase1draak.png"; 
      tamagotchi.classList.add("vuurdraak", "zwevend"); 
    } else if (eten === "peer") {
      tamagotchi.src = "images/draakjewind.png";
      tamagotchi.classList.add("zwevend");
      tamagotchi.classList.remove("vuurdraak");
    } else if (eten === "aardappel") {
      tamagotchi.src = "images/draakjeaarde.png";
      tamagotchi.classList.add("zwevend"); 
      tamagotchi.classList.remove("vuurdraak");
    } else if (eten === "vis") {
      tamagotchi.src = "images/draakjewater.png";
      tamagotchi.classList.add("zwevend"); 
      tamagotchi.classList.remove("vuurdraak");
    } else {
      console.log("Onbekend eten:", eten);
    }
  }
}


//met behulp van chatgpt. Prompt: voeg een confetti button toe.// 
confettiKnop.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
});


//Dlo en W3schools.//
knopPeper.addEventListener("click", function() {
  voedDraak("peper");
});

knopPeer.addEventListener("click", function() {
  voedDraak("peer");
});

knopAardappel.addEventListener("click", function() {
  voedDraak("aardappel");
});

knopVis.addEventListener("click", function() {
  voedDraak("vis");
});


