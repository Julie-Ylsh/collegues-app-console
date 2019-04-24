function start() {
    // récupération du module `readline`
    readline = require('readline');

    //récupération de la fonction rechercher un collègue par nom
    service = require('./service.js');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function run() {
        console.log('1. Rechercher un collègue par nom'),
            console.log('2. Créer un collègue'),
            console.log("3. Modifier l'email"),
            console.log('4. Modifier la photo'),
            console.log('99. Sortir'),



            // récupération de la saisie utilisateur
            rl.question('Quel est votre choix ? : ', function (saisie) {

                if (saisie == '1') {
                    rl.question('Choisissez un nom (ex Jeltsch) : ', function (saisie2) {

                        // la variable `saisie` contient la saisie effectuée
                        console.log('Recherche en cours du nom : ' + saisie2);
                        service.rechercherColleguesParNom(saisie2, (ColleguesTrouves) => {

                            if (ColleguesTrouves.length == 0) {
                                console.log("Il n'y a pas de collègue avec ce nom");
                            }

                            else {

                                // affichage du tableau des collègues trouvés
                                ColleguesTrouves.forEach(function (element) {
                                    console.log(element.nom, element.prenoms, ', Né(e) le :', element.dateDeNaissance)
                                });
                            }

                            //On relance la fonction run seulement si on est arrivé jusqu'à la boucle pour trouver le collègue
                            run();

                            //On ne close pas car on boucle, et on ne veut pas que les questions soient finies !
                        });

                    });

                }
                else if (saisie == '2') {
                    var collegueACréer = {
                        nom: "Rupy",
                        prenoms: "ComeOnElein",
                        dateDeNaissance: "1987-12-09",
                        photoUrl: "http://img.jpg",
                        email: "mail@mail.com"
                    }
                    rl.question('Choisissez un nom pour le nouveau collègue : ', function (saisieNom) {
                        collegueACréer.nom = saisieNom;

                        rl.question('Choisissez un prénom : ', function (saisiePrenom) {
                            collegueACréer.prenoms = saisiePrenom;

                            rl.question('Date de naissance ? ', function (saisieDate) {
                                collegueACréer.dateDeNaissance = saisieDate;

                                service.creerUnCollegue(collegueACréer, (collegueCree) => {
                                    console.log(collegueCree);
                                    run();
                                });
                            });
                        });
                    });


                }
                else if (saisie == '99') {
                    console.log(`Au revoir`);
                    fin = true;
                    rl.close();
                }
                else {
                    console.log("Je n'ai pas compris votre choix");
                    run();
                    //rl.close();
                }
            });
    }

    run();

};

exports.start = start;

