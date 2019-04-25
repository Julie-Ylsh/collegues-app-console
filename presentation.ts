// récupération du module `readline`
import readline from 'readline';

//récupération des fonctions services et classe collègue
import * as service from './service';
import * as metiers from './domains';


export function start() {

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
                    service.rechercherColleguesParNom(`${saisie2}`)
                        .then(tabMatricules => {
                            if (tabMatricules.size == 0) {
                                console.log(` \n Je suis désolée, mais aucun collègue n'est répertorié avec ce nom \n`);
                                run();
                            }
                            else {
                                console.log('Matricules trouvés', tabMatricules);
                                run();
                            }
                        }
                        )
                        .catch(err => {
                            console.log('OOps', err);
                            run();
                        }
                        )
                    //.finally(run); // .finally( () => run());
                    //On ne close pas car on boucle, et on ne veut pas que les questions soient finies !
                });

            }
            else if (saisie == '2') {
                let collegueACréer = new metiers.Collegue("Rupy", "ComeOnElein", "1987-12-09", "http://img.jpg", "mail@mail.com"
                );
                rl.question('Choisissez un nom pour le nouveau collègue : ', saisieNom => {
                    collegueACréer.nom = saisieNom;

                    rl.question('Choisissez un prénom : ', saisiePrenom => {
                        collegueACréer.prenoms = saisiePrenom;
                        collegueACréer.email = `${saisiePrenom}.${saisieNom}@societe.fr`

                        rl.question('Date de naissance ? ', saisieDate => {
                            collegueACréer.dateDeNaissance = saisieDate;

                            //Utilisationd es promesses natives
                            service.creerUnCollegue(collegueACréer)
                                .then(collegueCrée => {
                                    console.log(collegueCrée);
                                    run();
                                }
                                )
                                .catch(err => {
                                    console.log('OOps', err);
                                    run();
                                }
                                )
                        });
                    });
                });


            }
            else if (saisie == '99') {
                console.log(`Au revoir`);
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

