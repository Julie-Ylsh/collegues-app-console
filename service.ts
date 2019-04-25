import request from 'request-promise-native';
import * as metiers from './domains';


export function rechercherColleguesParNom(nomRecherche:string) {
    let URL = `https://julie-collegue-api.herokuapp.com/collegue?nomClient=${nomRecherche}`
    return request(URL, { json: true }).promise();
};

export function creerUnCollegue(collegue:metiers.Collegue) {
    return request({
        url: "https://julie-collegue-api.herokuapp.com/collegue",
        method: 'POST',
        json: true,
        body: collegue
    }).promise();


};


