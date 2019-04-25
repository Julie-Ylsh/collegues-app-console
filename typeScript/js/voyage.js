"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    Sejour.prototype.toString = function () {
        return "Nom du s\u00E9jour : " + this._nom + ", " + this._prix + "\u20AC";
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._Sejour = [new Sejour('Nantes', 12), new Sejour('Paris', 150)];
    }
    SejourService.prototype.RechercherSejourParNom = function (nomSejour) {
        var sejour;
        this._Sejour.forEach(function (sejour) {
            if (sejour.nom == nomSejour) {
                console.log(sejour.toString());
            }
        });
    };
    return SejourService;
}());
var testSejourService = new SejourService;
testSejourService.RechercherSejourParNom('Nantes');
