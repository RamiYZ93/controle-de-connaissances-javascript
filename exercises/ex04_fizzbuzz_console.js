/*
Exercice 4 — FizzBuzz (affichage console)

Énoncé :
Écrire une fonction fizzBuzz(n) qui affiche dans la console les valeurs de 1 à n :
- divisible par 3  -> "Fizz"
- divisible par 5  -> "Buzz"
- divisible par 3 et 5 -> "FizzBuzz"
- sinon -> le nombre

Contraintes pédagogiques :
- Utiliser une boucle for.
- Utiliser if / else if / else et l'opérateur %.
*/

function fizzBuzz(n) {
  // TODO: écrire ton code ici

  // Indications (optionnelles) :
  // - Commencer par tester divisible par 3 ET 5
  // - Puis divisible par 3
  // - Puis divisible par 5
  // - Sinon afficher le nombre
}

// --------------------
// Tests (au moins 3)
// --------------------
console.log("Test n=5 (attendu: 1,2,Fizz,4,Buzz) :");
fizzBuzz(5);

console.log("Test n=1 (attendu: 1) :");
fizzBuzz(1);

console.log("Test n=15 (attendu: ... FizzBuzz à 15) :");
fizzBuzz(15);
