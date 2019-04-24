var request = require('request');


function rechercherColleguesParNom(nomRecherche, callback) {
    var URL = 'https://julie-collegue-api.herokuapp.com/collegue?nomClient='+nomRecherche
    request(URL, { json: true }, function(err, res, body) {

        var tableauColleguesTrouves = body;

        callback(tableauColleguesTrouves);


    });

};

function creerUnCollegue(collegue, callback){
    request({
        url : "https://julie-collegue-api.herokuapp.com/collegue",
        method : 'POST',
        json : true,
        body : collegue 
    }, function(err, res, body) {

        var collegueCree = body;

        callback(collegueCree);

    });

   
};

exports.rechercherColleguesParNom = rechercherColleguesParNom;
exports.creerUnCollegue = creerUnCollegue;

