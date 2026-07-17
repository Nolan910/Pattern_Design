import Document from "./Document.js";

export default class Facture extends Document {

    changeTitle() {
        console.log("Facture");
    }

    addSections() {
        console.log("Information");
    }

    calculateTotal() {
        console.log("Calcul du total facture");
    }

    export() {
        console.log("Facture exportée");
        console.log("--------------------");
    }
}