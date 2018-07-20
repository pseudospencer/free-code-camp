function telephoneCheck(str) {
    /*
    Takes a string as input and returns a boolean based on whether the input is a valid US phone number.

    - A variety of input formats are accepted, but no strings may be parsed to digits
    - Area code is required
    - If a country code is given, it must be 1
    */

    if ( /[^\d()\- ]/.test(str) || // anything that's not a digit, (), -, or " "
        /^[^\d(]/.test(str) || // doesn't start with number or paren
        /[^\d]$/.test(str) ||  // doesn't end with number
        /\(\d{4,}\)/.test(str) || // contains parens with more than 3 digits between
        /\(\d{0,2}\)/.test(str)||//contains parens with less than 3 digits between
        /\((?!.*\))/.test(str) || // contains open parens with no close
        /^[^\(]*(?=\))/.test(str) // contains close parens with no open
    ) {
        console.log("failed first check");
        return false;

    } else {

        let checkStr = str.replace(/[^\d]/g, ''); // remove all non-digits
        console.log(checkStr);

        if (checkStr.length > 11 || checkStr.length < 10) {
            return false; // Too many or few digits

        } else if (checkStr.length == 11) {
            return /^1[\d]*/.test(checkStr); // true if starts with country code 1

        } else if (checkStr.length == 10) {
            return true; // 10 digits only - true
        }

    }
}

telephoneCheck("555-555-5555");
