
 /*variables*/
var pi = document.getElementById("r");/*pierre*/
var pa = document.getElementById("p");/*papier*/
var ci = document.getElementById("s");/*ciseau*/



/*fonction click sur icone + affichage de l'image dans la zone choix joueur*/
function main (){
    pi.addEventListener("click", function () {
        game("pi");
        document.getElementById("txChoix").textContent = "la force de la pierre !";
        document.getElementById("imgYou").src = "style/img/pierre.png";
    });
    
    pa.addEventListener("click", function () {
        game("pa");
        document.getElementById("txChoix").textContent = "la souplesse de la feuille !";
        document.getElementById("imgYou").src = "style/img/feuille.png";
    });
    
    ci.addEventListener("click", function () {
        game("ci");
        document.getElementById("txChoix").textContent = "le tranchant du ciseau !";
        document.getElementById("imgYou").src = "style/img/ciseaux.png";
    });

}

/*choix de l'IA au hasard, avec changement de son image*/
function getComputerChoice() {
    const choices = ['pi', 'pa', 'ci'];
    const randomNumber =  Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber === 0){
        document.getElementById("imgIa").src = "style/img/pierre.png";
    } else if (randomNumber === 1){
        document.getElementById("imgIa").src = "style/img/feuille.png";
    } else if (randomNumber === 2){
        document.getElementById("imgIa").src = "style/img/ciseaux.png";
    }
    return choices[randomNumber];
}


/*fonction jeu - comparation des choix joueurs et IA */
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "pici":
        case "papi":
        case "cipa":
            console.log("choix du joueur => " + userChoice);
            console.log("choix de l'ordi => " + computerChoice);
            document.getElementById("quiGagne").textContent = "Gooood !";
        break;
        case "pipa":
        case "paci":
        case "cipi":
            console.log("choix du joueur => " + userChoice);
            console.log("choix de l'ordi => " + computerChoice);
            document.getElementById("quiGagne").textContent = "Bowser gagne !!";
        break;
        case "pipi":
        case "papa":
        case "cici":
            console.log("choix du joueur => " + userChoice);
            console.log("choix de l'ordi => " + computerChoice);
            document.getElementById("quiGagne").textContent = "Match nul ...";
        break;
    }
}

main();


/*rafraichir la page*/
function reload() 
    {location.reload(); 
    };