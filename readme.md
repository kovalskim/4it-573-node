# Domácí úkol č.2

Vytvořte program, který bude kopírovat obsah souboru do druhého souboru na základě jednoduchých instrukcí. Při spuštění si program načte obsah souboru s názvem "instrukce.txt". V tomto souboru budou uloženy dva názvy souborů. První název označuje zdrojový soubor (ze kterého bude program kopírovat data) a druhý název označuje cílový soubor do kterého bude program data kopírovat. Soubor "instrukce.txt" a zdrojový soubor musí existovat, pokud neexistují, program o tom informuje uživatele. Pokud neexistuje cílový soubor, program ho nejprve vytvoří a pak do něj nakopíruje data. Formát instrukcí nechám na vás.

Upozornění: Nepoužívejte xxxSync metody. Chci aby jste si vyzkoušeli asynchronní programování.

Příklad:

Obsahu souboru instrukce.txt: "vstup.txt vystup.txt"
Obsah souboru vstup.txt: "lorem ipsum dolor sit amet"
Spustim program pomoci "node index.mjs"
Vznikne soubor vystup.txt s obsahem "lorem ipsum dolor sit amet"