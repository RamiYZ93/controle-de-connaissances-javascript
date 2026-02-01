/*
Exercice 3 — Count Digits

Énoncé :
Étant donné un entier positif `n`, retourner le nombre de chiffres qu'il contient.

Exemples :
- 123 -> 3
- 9 -> 1
- 1000 -> 4

Contraintes pédagogiques :
- Ne pas convertir en string.
- Utiliser une boucle while et la division entière.
*/

function countDigits(n) {
  // TODO: écrire ton code ici

  // Indications (optionnelles) :
  // - Cas limite : n = 0 doit retourner 1 (0 a 1 chiffre)
  // - Sinon : tant que n > 0, compter +1 et faire n = division entière de n par 10
}

// --------------------
// Tests (au moins 3)
// --------------------
console.log(countDigits(123)); // attendu: 3
console.log(countDigits(9)); // attendu: 1
console.log(countDigits(0)); // attendu: 1 (cas limite)
