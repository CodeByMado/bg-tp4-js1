"use strict";  // Mode strict : signale les variables non déclarées (slide 52)
//declaration 

const Etudiant=["Etudiant1","Etudiant2","Etudiant3"]; //tableau
const Etudiants={nom:'jhon' , prenom:'Doe' , age:'30'}; //objet  ensemble de paires clé: valeur (slide 40) Type nom et prenom sont des string, age est un number (slide 38)
const EtuduantObjet=[    // Tableau contenant 3 objets (tableau d'objets, slide 41)
    {nom:'nom1',prenom:'prenom1',age:21},
    {nom:'nom2',prenom :'prenom2',age:22},
    {nom:'nom3',prenom :'prenom3',age:23}
]

//declaratin des fonctions

function f1(){
     // déclaration d'une fonction (slide 46)
  // Tableau (array) de 3 chaînes de caractères (slide 39)
  // const : la référence du tableau ne change pas (slide 52)
  // Boucle for...of : parcourt chaque élément du tableau (slide 45)
    for (const e of Etudiant){
        console.log(Etudiant);  // un affichage par ligne (slide 34)
    }
}


function f2(){
    //parcour de objet
    for (const e of Etudiants){
          console.log(e.nom+""+e.prenom+""+e.age);
    }
}


function f3(){
    //parcour tableau d'objets
    for(const e of EtuduantObjet){
        console.log(e.nom1+""+e.prenom1+""+e.age);
        console.log(e.nom2+""+e.prenom2+""+e.age);
        console.log(e.nom3+""+e.prenom3+""+e.age);
    }
}