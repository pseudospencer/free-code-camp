function palindrome(str) {
    // convert to uppercase
    let checkStr = str.toUpperCase();
    // remove spaces
    checkStr = checkStr.replace(/\n/g, '');
    // remove all non-alphanumeric chars
    checkStr = checkStr.replace(/[^A-Za-z0-9]/g, '');
    // create a string of all remaining chars in reverse
    let revStr = '';
    for (let i = checkStr.length-1; i >=0; i--) {
        revStr = revStr + checkStr[i];
    }
    // finally, check for palindrome
    return (checkStr == revStr);
}
