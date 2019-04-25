const request = require('request-promise-native');


function rechercherColleguesParNom(nomRecherche) {
    let URL = `https://julie-collegue-api.herokuapp.com/collegue?nomClient=${nomRecherche}`
    return request(URL, { json: true });
};

function creerUnCollegue(collegue, callback) {
    request({
        url: "https://julie-collegue-api.herokuapp.com/collegue",
        method: 'POST',
        json: true,
        body: collegue
    }, (err, res, body) => {

        let collegueCree = body;

        callback(collegueCree);

    });


};

exports.rechercherColleguesParNom = rechercherColleguesParNom;
exports.creerUnCollegue = creerUnCollegue;

