var request = require('request');


function rechercherColleguesParNom(nomRecherche, callback) {
    var URL = 'https://julie-collegue-api.herokuapp.com/collegue?nomClient='+nomRecherche
    request(URL, { json: true }, function(err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);


    });

}

exports.rechercherColleguesParNom = rechercherColleguesParNom;

