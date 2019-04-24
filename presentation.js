function start() {
    console.log('1. Rechercher un collègue par nom'),
    console.log('2. Créer un collègue'),
    console.log("3. Modifier l'email"),
    console.log('4. Modifier la photo'),
    console.log('99. Sortir'),


// récupération du module `readline`
readline = require('readline');

//récupération de la fonction rechercher un collègue par nom
service = require('./service.js');


// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// récupération de la saisie utilisateur
rl.question('Quel est votre choix ? : ', function (saisie) {

    if (saisie == "1") {

        rl.question('Choisissez un nom (ex Jeltsch) : ', function (saisie2) {

        // la variable `saisie` contient la saisie effectuée
        console.log('Recherche en cours du nom : ' + saisie2);
        service.rechercherColleguesParNom(saisie2, (colleguesTrouves)=>{

            // affichage du tableau des collègues trouvés
            colleguesTrouves.forEach(function (element) {
                console.log(element.nom, element.prenoms, ', Né(e) le :', element.dateDeNaissance)
            });
            rl.close();
        });
        
        });
    }

    else if (saisie == '99') {

        // la variable `saisie` contient la saisie effectuée
        console.log(`Au revoir`);
        rl.close();
    }

    else {
        console.log("Je n'ai pas compris votre choix");
        rl.close();
    }

    
});
};

exports.start = start;

