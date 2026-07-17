import DocumentFactory from "./documents/DocumentFactory.js";
import Document from "./documents/Document.js";
import Devis from "./documents/Devis.js";
import Facture from "./documents/Factures.js";

// let document = new DocumentFactory("document");
let devis = new DocumentFactory("devis");
let facture = new DocumentFactory("facture");

// document.generateDocument();
devis.generateDocument();
facture.generateDocument();