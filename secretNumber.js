const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var coup = 0;
var NombreSecret = Math.floor(Math.random() * 10);

var FonctionCodeSecret = function () {
    rl.question('Choisissez un chiffre entre 0 et 9 : ', function (answer) {
        if (answer >= 0 && answer <= 9) {
            coup++;
            if (answer == NombreSecret) {
                console.log('Bravo. Tu as gagné !');
                return rl.close();
            }
            else if (coup < 3) {
                console.log('Perdu. Essaie encore !');
                FonctionCodeSecret();
            }
            else {
                console.log(`Perdu. Le code secret était ${NombreSecret}`);
                return rl.close();
            }

        }
        else {
            console.log("Ceci n'est pas un nombre compris entre 0 et 9"); FonctionCodeSecret();//n'est pas compté comme un coup
        }

    });
};

FonctionCodeSecret();





