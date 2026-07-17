export default class Document {

    generateDocument() {
        this.changeTitle();
        this.addSections();
        this.calculateTotal();
        this.export();
    }

    changeTitle() {
        console.log("Titre du document");
    }

    addSections() {
        console.log("Ajout des sections");
    }

    calculateTotal() {
        console.log("Calcul du total");
    }

    export() {
        console.log("Document exporté");
        console.log("--------------------");
    }
}