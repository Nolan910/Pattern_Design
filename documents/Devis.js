import Document from "./Document.js";

export default class Devis extends Document {

    changeTitle() {
        console.log("Devis");
    }

    addSections() {
        console.log("Informations1");
        console.log("Informations2");
    }

    calculateTotal() {
        console.log("Calcul du total du devis");
    }

    export() {
        console.log("Devis exporté");
        console.log("--------------------");
    }
}