var globalArray = [5, 6, 3, 2, 9];

// Sort an array without mutating it.
function nonMutatingSort(arr) {
    // two ways to do this:

    // 1. create a shallow copy in local scope and then sort, return... More explicit, but technically longer
    // let localArray = [...globalArray];
    // return localArray.sort( (a,b ) => a - b );

    // 2. concatenate an empty array (concat returns a new array) and then sort... Less readable but shorter
    return globalArray.concat( [] ).sort( (a,b) => a - b );
}

nonMutatingSort(globalArray);
