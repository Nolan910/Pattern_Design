import Document from "./documents/Document.js";
import Devis from "./documents/Devis.js";
import Facture from "./documents/Factures.js";

let document = new Document();
let devis = new Devis();
let facture = new Facture();

document.generateDocument();
devis.generateDocument();
facture.generateDocument();