import request from 'request-promise-native';
import * as metiers from './domains';

let rq = request.defaults({jar: true})

rq({
    url: "https://julie-collegue-api.herokuapp.com/auth",
    method: 'POST',
    json: true,
    body: {
        "matriculeCollegue" : "1",
        "motDePasse" : "pass1"
    }
})


export function rechercherColleguesParNom(nomRecherche:string) {
    let URL = `https://julie-collegue-api.herokuapp.com/collegue?nomClient=${nomRecherche}`
    return rq(URL, { json: true }).promise();
};

export function creerUnCollegue(collegue:metiers.Collegue) {
    return request({
        url: "https://julie-collegue-api.herokuapp.com/collegue",
        method: 'POST',
        json: true,
        body: collegue
    }).promise();


};


