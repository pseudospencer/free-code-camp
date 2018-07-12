function mutation(arr) {
    // Takes an array with 2 strings
    let reference = arr[0];
    let check = arr[1];
    // checks reference string against each letter from second string
    for (let i = 0; i <= check.length; i++) {
        if (i == check.length) {
            // if all letters (case insensitive) in second string found in first string
            return true;
        } else if (!reference.match(new RegExp("[" + check[i] + "]", "gi"))) {
            return false;
        }
    }
}
