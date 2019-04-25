class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }

    toString(){
        return `Nom du séjour : ${this._nom}, ${this._prix}€`
    }
}

class SejourService {
    _Sejour: Sejour[];
    constructor() {
        this._Sejour = [new Sejour('Nantes', 12), new Sejour('Paris', 150)];
    }

    RechercherSejourParNom(nomSejour: string): void {
    let sejour: Sejour;
    this._Sejour.forEach(sejour => {
        if (sejour.nom == nomSejour) {
            console.log(sejour.toString());
        }
        
    });
        
    }
}

let testSejourService = new SejourService;
testSejourService.RechercherSejourParNom('Nantes');