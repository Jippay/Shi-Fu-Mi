//Shi fu mi
//pierre > ciseaux, papier > pierre, ciseaux > papier
//atttribution du click au objet
//
//l'ordinateur choisi un objet
//resultats


/*variables*/
var pi = document.getElementById("pi");/*pierre*/
var pa = document.getElementById("pa");/*papier*/
var ci = document.getElementById("ci");/*ciseau*/


/*fonction click choix du joueur*/
function main (){
    pi.addEventListener("click", function () {
        choixDuJoueur("pi");
        document.getElementById("txChoix").textContent = "la force de la pierre !";
    });
    
    pa.addEventListener("click", function () {
        choixDuJoueur("pa");
        document.getElementById("txChoix").textContent = "la souplesse de la feuille !";
    });
    
    ci.addEventListener("click", function () {
        choixDuJoueur("ci");
        document.getElementById("txChoix").textContent = "le tranchant du ciseau !";
    });
    }
main()


/*fonction choix de l'ia*/
function choixIa (){
    var choix = ['pi', 'pa', 'ci'];
    var randomNumber = Math.floor(Math.random() * 3)
    return choix [randomNumber];
}

/*fonction comparaison entre le joueur et l'ia*/
function choixDuJoueur(userchoise){
    var choixDelIa = choixIa ();
    if (userchoise == choixDelIa){
        console.log(userchoise);
        console.log(choixDelIa);
        console.log("egalité");
        document.getElementById("quiGagne").textContent = "Match nul !!";
    } else if (userchoise == "pi" & choixDelIa == "ci"){
        console.log(userchoise);
        console.log(choixDelIa);
        console.log("gagné");
        document.getElementById("quiGagne").textContent = "Gooood !";
    } else if (userchoise == "pa" & choixDelIa == "pi"){
        console.log(userchoise);
        console.log(choixDelIa);
        console.log("gagné");
        document.getElementById("quiGagne").textContent = "Chapeau !!!";
    } else if (userchoise == "ci" & choixDelIa == "pa"){
        console.log(userchoise);
        console.log(choixDelIa);
        console.log("gagné");
        document.getElementById("quiGagne").textContent = "Bravissimo !!!";
    } else{
        console.log(userchoise);
        console.log(choixDelIa);
        console.log("perdu");
        document.getElementById("quiGagne").textContent = "Oh noooo ... Bowser gagne ...";
    }
}

function imageIa (){
    if (choixDelIa === "pi"){
        document.getElementById(imgIa).src = url("img/pierre.png");
    }
}

/*rafraichir la page*/
function reload() 
    {location.reload(); 
    };