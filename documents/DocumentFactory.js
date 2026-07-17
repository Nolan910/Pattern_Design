import Devis from "./Devis.js";
import Facture from "./Factures.js";
import Document from "./Document.js";

export default class DocumentFactory {
    constructor(type) {
        if (type === "devis") {
            return new Devis();
        }

        if (type === "facture") {
            return new Facture();
        }

        if (type === "document") {
            return new Document();
        }
    }
}