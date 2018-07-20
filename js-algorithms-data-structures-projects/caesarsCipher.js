
function rot13(str) { // LBH QVQ VG!
    /*
    Rot 13 cipher takes a string comprised of capital letters, spaces, and punctuation as an input,
    and returns a string with the same spacing and punctuation where all letters are offset by 13 places 
    */

    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let chars = str.split(""); // Array of chars

    chars.forEach( function (item, index) {
        if ( /[\s.,!?]/.test(item) ) {
            // pass over spaces and punctuation
            return;
        } else if ( /[A-Z]/.test(item) ) {
            // if it's a letter, get the alphabet position, rotate by 13 and change
            let i = alphabet.indexOf(item) + 13;
            i > 25 ? chars[index] =  alphabet[i -26] : chars[index] = alphabet[i];
        } else {
            console.error("Unexpected character: Input string should contain only capital letters, spaces, punctuation, got: " + item + " in " + str);
            return;
        }
    });

    return chars.join("");
}

rot13("SERR PBQR PNZC");
