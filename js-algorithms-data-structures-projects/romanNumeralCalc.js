function convertToRoman(num) {
    /*
    Converts int to roman numerals.

    ** Only able to handle ints < 400,000 **
    */
    let numeralsKey = [
        ["I", "V"],            // Ones place:  1:"I", 5:"V"
        ["X", "L"],            // Tens place  10:"X", 50:"L"
        ["C", "D"],            // Hundreds place: 100 : "C", 500  : "D"
        ["M", "V\u0305"],      // Thousands place: 1000: "M", 5000: "V\u0305" == V̅
        ["X\u0305", "L\u0305"], // Ten Thousands place: 10000: "X\u0305", 50000: "L\u0305"
        ["C\u0305"]             // Hundred Thousands place: 100000: "C\u0305"
    ];

    if (num >= 400000) {
        console.error("convertToRoman is only able to handle integers < 400000, you passed" + str(num));
        return;
    } else if ( num % 1 !== 0) {
        console.error("convertToRoman is only able to handle whole numbers, you passed" + str(num));
        return;
    }

    // convert number to an array of single digits, representing each "place" value
    let places = num.toString().split('').reverse(); // array of single digits, reversed so that ones place comes first rather than last

    // for each place value, convert to correct roman numerals
    places.forEach( function (item, index) {

        let x = Number(item);
        let placeNumerals = '';

        if (x == 0) {
            // 0 = nothing; empty string
            places[index] = placeNumerals + '';

        } else if (x > 0 && x <=3) {
            // 1, 2, 3 = "1 value" for the given place, repeated up to 3 times
            for ( let j = 0; j < x; j++) {
                placeNumerals = placeNumerals + numeralsKey[index][0];
            }
            places[index] = placeNumerals;

        } else if (x == 4) {
            // 4: "1 value" then "5 value" for given place. Ex: 4 == "IV"
            places[index] = placeNumerals + numeralsKey[index][0] + numeralsKey[index][1];

        } else if (x == 5) {
            // 5: "5 value" for given place.
            places[index] = placeNumerals + numeralsKey[index][1];

        } else if (x > 5 && x <= 8) {
            // 6, 7, 8: "5 value" for the given place, followed by "1 value" repeated up to 3 times.
            placeNumerals = placeNumerals + numeralsKey[index][1];
            let remainder = x % 5; // how many "1 value" chars are needed?
            for ( let j = 0; j < remainder; j++) {
                placeNumerals = placeNumerals + numeralsKey[index][0];
            }
            places[index] = placeNumerals;

        } else if (x == 9) {
            // 9: "1 value" for the givem place followed by "1 value" for the NEXT place up
            places[index] = placeNumerals + numeralsKey[index][0] + numeralsKey[index + 1][0];

        }
    });

    // now that all the places have been converted to roman numeral equivalents, revert the order back to original order
    places.reverse();
    // combine placeNumerals for each place into one big string and return
    return places.join("");
}
