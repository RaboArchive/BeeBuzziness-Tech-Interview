# Beebusiness-Tech-Interview

**Objectif :**
*Ta mission est de créer la logique pour afficher des numéros sur un écran LCD. Cet écran dispose d’un grid de 3x3, chaque case peut contenir une espace, un tiret bas, ou un pipe.*

```
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.

|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|

|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
```
 

Exemple: `910`

```
._. ... ._.

|_| ..| |.|

..| ..| |_|
```

## Note :

Je n'ai pas implémenté de test pour les fonctions de display. Il faudrait soit écouter le stdout soit override la fonction de log pour qu'elle fasse autre chose.

Il y a peu ou pas d'asynchrinone car l'exercice ne s'y prêtait pas forcément.

## Pour le lancer



## Documents utilisés : 
* https://nodejs.org/docs/latest/api/process.html#process_process_argv (How to get args from the command line)
* https://en.wikipedia.org/wiki/Seven-segment_display (The exercice)
* http://easternstargeek.blogspot.com/2011/09/ascii-to-seven-segment-table.html (List of the values)
* StackOverFlow
* La documentation Javascript fait par Mozilla (https://developer.mozilla.org/fr/docs/Web/JavaScript)
