let friends = [
    "Josh",
    "Garett",
    "Haylee",
    "Kait",
    "Pepper"
]

function friendSong() {
    //Loop through list friends
    for (let i = 0; i < friends.length; i++) {

        //List friend name before song begins
        console.log(friends[i].toUpperCase() + ":");

        //99 lines loop
        for (let j = 99; j > 0; j--) {

            //Line minus 1
            let k = j - 1;

            if (j > 2) {

                console.log( j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + k + " lines of code in the file");
            
            //Keeping "1 line of code" on this line grammatically correct
            } else if (j == 2) {

                console.log( j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + k + " line of code in the file");

            } else {

                console.log( j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");

            }

        }

    }

}

friendSong();