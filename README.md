# Pattern_Design

Nolan Fievet

## Pourquoi la solution actuelle pose problème

Comme la base des types de documents est similaire, cela va créer de la répétition dans le code. Avec cette répétition lorsque l'on va devoir changer quelque chose on devra la modifier dans toute les parties du codes

## Design patterns proposés

Factory : Car le logiciel doit créer plusieurs type de document (devis - factures - avoirs - bons de livraison ). On peut utiliser un Factory pour créer le type de document demandé sans utiliser des classes différentes pour chaque type

Template méthod : Car même étape de création des documents. Il permet d’avoir une structure commune, avec des classes spécialisées pour certaines étapes

## En quoi ils permettent de réutiliser la logique commune tout en laissant des variantes

La Factory centralise la création des documents et permet d'ajouter de nouveaux types sans modifier le code principal
La TemplateMethod définit les étapes communes de création tout en laissant chaque document personnaliser certaines étapes