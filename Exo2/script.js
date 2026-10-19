"use strict";
//declaration 

const Etudiant=["Etudiant1","Etudiant2","Etudiant3"]; //tableau
const Etudiants={nom:'jhon' , prenom:'Doe' , age:'30'}; //objet
const EtuduantObjet=[
    {nom:'nom1',prenom:'prenom1',age:21},
    {nom:'nom2',prenom :'prenom2',age:22},
    {nom:'nom3',prenom :'prenom3',age:23}
]

//declaratin des fonctions

function f1(){
    //boucle for pour parcourir le tableau
    for (const e of Etudiant){
        console.log(Etudiant);
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