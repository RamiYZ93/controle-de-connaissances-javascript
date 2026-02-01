# Évaluation JavaScript — Chapitre 1 (Pratique) — Sans tableaux

## Objectif
Réaliser 4 exercices en JavaScript en utilisant uniquement les notions vues au **Chapitre 1** :
- Variables, types (String / Number / Boolean)
- Opérateurs (arithmétiques, comparaison, logiques, modulo `%`)
- Conditions (`if / else if / else`, `switch`)
- Boucles (`for`, `while`)

> ⚠️ Cette évaluation **n'utilise pas les tableaux**, car ils ne sont pas encore au programme.

## Règles
- ✅ Autorisé : `var`, `if/else`, `switch`, `for`, `while`, opérateurs, chaînes, nombres.
- ❌ Interdit : tableaux (`[]`), `map`, `filter`, `reduce`, `sort`, `Set`, `Map`, regex, bibliothèques externes.
- ⚠️ Chaque exercice doit contenir **au moins 3 tests** via `console.log(...)` (dont 1 cas limite).

## Structure
```
/exercises
  ex01_length_of_last_word.js
  ex02_palindrome_number.js
  ex03_count_digits.js
  ex04_fizzbuzz_console.js
README.md
```

## Comment exécuter
Dans un terminal :
```bash
node exercises/ex01_length_of_last_word.js
```

---

# Exercices

## Exercice 1 — Length of Last Word
**Énoncé :** Étant donnée une chaîne `s` composée de mots et d'espaces, retourner la longueur du **dernier mot** de la chaîne.  
Un *mot* est une séquence maximale de caractères non-espace.

**Contraintes pédagogiques :**
- Ne pas utiliser `split()`.
- Faire une boucle en partant de la fin de la chaîne.

---

## Exercice 2 — Palindrome Number
**Énoncé :** Étant donné un entier `x`, retourner `true` si `x` est un palindrome, sinon `false`.  
Un palindrome se lit pareil dans les deux sens.

**Contraintes pédagogiques :**
- Ne pas convertir en string (pas de `"" + x`).
- Utiliser une boucle et des opérations sur les nombres (`%`, division entière).

---

## Exercice 3 — Count Digits
**Énoncé :** Étant donné un entier positif `n`, retourner le **nombre de chiffres** qu'il contient.

**Exemples :**
- `123` → `3`
- `9` → `1`
- `1000` → `4`

**Contraintes pédagogiques :**
- Ne pas convertir en string.
- Utiliser une boucle `while` et la division entière.

---

## Exercice 4 — FizzBuzz (affichage console)
**Énoncé :** Écrire une fonction `fizzBuzz(n)` qui affiche dans la console les valeurs de `1` à `n` :
- si le nombre est divisible par 3 → afficher `"Fizz"`
- si divisible par 5 → afficher `"Buzz"`
- si divisible par 3 **et** 5 → afficher `"FizzBuzz"`
- sinon afficher le nombre

**Exemple pour n = 5 :**
```
1
2
Fizz
4
Buzz
```

**Contraintes pédagogiques :**
- Utiliser une boucle `for`.
- Utiliser `if / else if / else` et l'opérateur `%`.

---

## Rendu attendu
- Compléter les fonctions dans chaque fichier.
- Ajouter des tests (au moins 3 par exo).
- Le code doit être lisible (noms de variables corrects, indentation).

Bon travail !
