function start() {
    // récupération du module `readline`
    readline = require('readline');

    //récupération de la fonction rechercher un collègue par nom
    service = require('./service.js');

    // création d'un objet `rl` permettant de récupérer la saisie utilisateur
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function run() {
        console.log(`Menu principal  
1. Rechercher un collègue par nom,
2. Créer un collègue,
3. Modifier l'email,
4. Modifier la photo,
99. Sortir`)

        // récupération de la saisie utilisateur
        rl.question('Quel est votre choix ? : ', saisie => {

            if (saisie == '1') {
                rl.question('Choisissez un nom (ex Jeltsch) : ', saisie2 => {

                    // la variable `saisie` contient la saisie effectuée
                    console.log(`Recherche en cours du nom : ${saisie2}`);

                    //Utilisationd es promesses natives
                    const promise$ = service.rechercherColleguesParNom(`${saisie2}`);

                    promise$
                        .then(tabMatricules => console.log('Matricules trouvés', tabMatricules))
                        .catch(err => console.log('OOps', err))
                        .finally(run); // .finally( () => run());


                    //On relance la fonction run seulement si on est arrivé jusqu'à la boucle pour trouver le collègue
                    

                    //On ne close pas car on boucle, et on ne veut pas que les questions soient finies !


                });

            }
            else if (saisie == '2') {
                let collegueACréer = {
                    nom: "Rupy",
                    prenoms: "ComeOnElein",
                    dateDeNaissance: "1987-12-09",
                    photoUrl: "http://img.jpg",
                    email: "mail@mail.com"
                }
                rl.question('Choisissez un nom pour le nouveau collègue : ', saisieNom => {
                    collegueACréer.nom = saisieNom;

                    rl.question('Choisissez un prénom : ', saisiePrenom => {
                        collegueACréer.prenoms = saisiePrenom;

                        rl.question('Date de naissance ? ', saisieDate => {
                            collegueACréer.dateDeNaissance = saisieDate;

                            service.creerUnCollegue(collegueACréer, collegueCree => {
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
                console.log(`\n Je n'ai pas compris votre choix \n`);
                run();
                //rl.close();
            }
        });
    }

    run();

};

exports.start = start;

