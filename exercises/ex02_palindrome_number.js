/*
Exercice 2 — Palindrome Number

Énoncé :
Étant donné un entier `x`, retourner true si `x` est un palindrome, sinon false.
Un palindrome se lit pareil dans les deux sens.

Contraintes pédagogiques :
- Ne pas convertir en string (pas de "" + x).
- Utiliser une boucle et des opérations sur les nombres (% et division entière).
*/

function isPalindrome(x) {
  // TODO: écrire ton code ici

  // Indications (optionnelles) :
  // - Si x < 0 => false
  // - Inverser le nombre :
  //    lastDigit = x % 10
  //    reversed = reversed * 10 + lastDigit
  //    x = division entière de x par 10
  // - Comparer le nombre inversé à l'original
}

// --------------------
// Tests (au moins 3)
// --------------------
console.log(isPalindrome(121)); // attendu: true
console.log(isPalindrome(-121)); // attendu: false
console.log(isPalindrome(10)); // attendu: false
