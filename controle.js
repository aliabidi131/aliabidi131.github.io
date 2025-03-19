// Exercice 1 //

function calculerCirconference(rayon) {
    if (isNaN(rayon) || rayon <= 0) {
        alert("Rayon invalide !");
        return;
    }
    let circonference = 2 * Math.PI * rayon;
    return circonference.toFixed(2);
}

function Calcul_Circonference() {
    let rayon = parseFloat(prompt("Entrez le rayon du cercle :"));
    let res = calculerCirconference(rayon);
    if (res) {
        alert("La circonférence du cercle est : " + res.toFixed(2));
    }
}


// Exercice 2 //

function saisirRayon() {
    let Rayon1 = parseFloat(prompt("Rayon du cercle :"));
    if (isNaN(Rayon1) || Rayon1 <= 0) {
        alert("Rayon Invalide!");
        return null; 
    }
    return Rayon1; 
}

function calculerCirconference(Rayon1) {
    return 2 * Math.PI * Rayon1;
}

function afficherCirconference(Rayon1, c1) {
    alert("Rayon : " + Rayon1 + "\nLa circonférence du cercle est : " + c1.toFixed(2));
}

function calculerEtAfficher() {
    let Rayon1 = saisirRayon();
    if (Rayon1 !== null) { 
        let c1 = calculerCirconference(Rayon1);
        afficherCirconference(Rayon1, c1);
    }
}


// Exercice 3 //
function estPremier(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { return false; }
    }
    if (n < 2) return false;
    return true;
}

function verifierPremier() {
    let n = prompt("Entrez le nombre :");

    if (isNaN(n)) {
        alert("Nombre invalide !");
        return;
    }

    if (n.includes(',') || n.includes('.')) {
        alert("Point (',') et virgule ('.') interdits !");
        return;
    }

    n = parseInt(n);
    if (estPremier(n)) {
        let res = "Nombre Premier";
        alert(res);
    } else {
        let res = "N'est pas  Premier";
        alert(res);
    }
}


// Exercice 4 //
function Factorielle(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorielle(n - 1);
    }
}

function Aff_factorielle() {
    let nb = prompt("Entrez un nombre entier positif :");

    if (nb.includes(",") || nb.includes(".")) {  
        alert("Point (.) et Virgule (,) Interdits !!!");
        return;
    }

    let n = parseInt(nb);

    if (isNaN(n) || n <= 0) {
        alert("Nombre Invalide !!!");
        return;
    }

    let fact = Factorielle(n);
    alert("Factorielle de " + n + " est : " + fact);
}



// Exercice 5 //


function puissance(nbr, puis) {
    let res = 1;

    if (puis === 0) {
        return 1;
    }

    if (puis > 0) {
        for (let i = 1; i <= puis; i++) {
            res *= nbr;
        }
    } else {
        for (let i = 1; i <= -puis; i++) {
            res *= nbr;
        }
        res = 1 / res;
    }

    return res;
}

function AfficherPuissance() {
    let nbr = parseFloat(prompt("Entrez le nombre :"));
    if (isNaN(nbr)) {
        alert("Nombre Invalide !");
        return;
    }

    let puis = parseInt(prompt("Entrez la puissance :"));
    if (isNaN(puis)) {
        alert("Puissance invalide !");
        return;
    }

    let res = puissance(nbr, puis);
    alert("Le résultat de " + nbr + " puissance " + puis + " est : " + res);
}


// Exercice 6 //

function celsiusVersFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitVersCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertirTemperature() {
    let choix = prompt("Choisissez la conversion :\n1. Celsius → Fahrenheit\n2. Fahrenheit → Celsius");

    if (choix === "1") {
        let celsius = parseFloat(prompt("Entrez la température en Celsius :"));
        if (isNaN(celsius)) {
            alert("Valeur invalide !");
            return;
        }
        alert(celsius + "°C = " + celsiusVersFahrenheit(celsius).toFixed(2) + "°F");
    } 
    else if (choix === "2") {
        let fahrenheit = parseFloat(prompt("Entrez la température en Fahrenheit :"));
        if (isNaN(fahrenheit)) {
            alert("Valeur invalide !");
            return;
        }
        alert(fahrenheit + "°F = " + fahrenheitVersCelsius(fahrenheit).toFixed(2) + "°C");
    } 
    else {
        alert("Choix invalide !");
    }
}


// Exercice 7 //
function afficher_Table_Multiplication(n) {
    if (isNaN(n) || n <= 0) {
        alert("Nombre Invalide !");
        return;
    }

    let table = "Table de " + n + " :\n";
    for (let i = 1; i <= 10; i++) {
        table += n + " × " + i + " = " + (n * i) + "\n";
    }
    alert(table);
}

function aff_Multiplication() {
    let n = parseInt(prompt("Entrez un nombre :"));
    afficher_Table_Multiplication(n);
}



// Exercice 8 //
function plusGrand(a, b, c) {
    return Math.max(a, b, c);
}

function afficher_plus_Grand() {
    let a = parseFloat(prompt("Entrez le premier nombre :"));
    let b = parseFloat(prompt("Entrez le deuxième nombre :"));
    let c = parseFloat(prompt("Entrez le troisième nombre :"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Nombre Invalide !");
        return;
    }

    alert("Le plus grand nombre est : " + plusGrand(a, b, c));
}




// Exercice 9 //
function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function afficher_nombre_Aleatoire() {
    let min = parseInt(prompt("Entrez  Min :"));
    let max = parseInt(prompt("Entrez  Max :"));

    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Valeurs Invalides !");
        return;
    }

    alert("Nombre aléatoire  : " + nombreAleatoire(min, max));
}



// Exercice 10 //
function estPalindrome(Chaine) {
    let ch1 = Chaine.toLowerCase();
    let ch2 = '';

    for (let i = ch1.length - 1; i >= 0; i--) {
        ch2 += ch1[i];
    }

    for (let i = 0; i < ch1.length; i++) {
        if (ch1[i] !== ch2[i]) {
            return false;
        }
    }
    
    return true;
}

function verifierPalindrome() {
    let Chaine = prompt("Entrez un Chaine :");

    if (Chaine === null || Chaine.trim() === "") {
        alert("Chaine Invalide !");
        return;
    }

    if (estPalindrome(Chaine)) {
        alert("'" + Chaine +"'" + "    Est une Chaine palindrome.");
    } else {
        alert("'" + Chaine +"'" + "     N'est pas une Chaine palindrome.");
    }
}



