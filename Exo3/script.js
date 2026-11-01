"use strict"; // Mode strict : signale les variables non déclarées (slide 52)

// ============================================================
// EXERCICE 3 : délibération
// Le script comporte exactement 2 fonctions : A (appelée par le bouton)
// qui appelle B. Aucune autre fonction (ni fléchée, ni anonyme).
// Seule sortie autorisée : console.log() (slide 34)
// Les commentaires // et /* */ sont vus au slide 37
// ============================================================

// Données "Students" : tableau d'objets (slide 41)
// const : la référence du tableau ne change pas (slide 52)
// Format de l'énoncé : (id, nom, prénom, note, valeur2)
// Types : id et note sont des number, nom et prenom des string (slide 38)
// La note (4e valeur) décide de l'admission ; valeur2 (5e valeur) n'est pas utilisée.
const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     note: 14, valeur2: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", note: 7,  valeur2: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   note: 13, valeur2: 3 }
];

// Fonction B : reçoit UN seul paramètre (un nombre décimal, "float") et retourne un booléen.
// En JS il n'existe qu'un seul type number : 14 ou 15.5 sont tous deux des number (slide 38).
// Fonction avec un paramètre et un retour (slide 46)
function B(note) {
  // L'opérateur de comparaison >= renvoie directement un booléen true/false (slide 42)
  return note >= 10;
}

// Fonction A : parcourt les étudiants, appelle B et affiche le résultat un par un
function A() {   // déclaration de fonction appelée par le bouton (slides 25 et 46)
  // Boucle for...of sur le tableau d'objets (slide 45)
  for (const s of Students) {
    // Opérateur ternaire : condition ? valeurSiVrai : valeurSiFaux (slide 43)
    // B(s.note) : appel de B avec la note ; s.note = accès à une propriété (slide 40)
    const decision = B(s.note) ? "ADMIS" : "AJOURNÉ";
    // Template literal pour construire "1000: ADMIS" (slide 38)
    console.log(`${s.id}: ${decision}`);
  }
}