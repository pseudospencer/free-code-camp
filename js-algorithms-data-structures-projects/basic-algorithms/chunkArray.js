function chunkArrayInGroups(arr, size) {
    // splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array
    if (size <= 0) {
        return Error("Size should be an integer greater than 0; currently " + size);
    } else {
        let newArr = [];
        while (arr.length >= size) {
            newArr.push(arr.splice(0, size)); // arr.splice returns an array
        }
        if (arr.length == 0) {
            return newArr;
        } else {
            newArr.push(arr.splice(0)); // clear out what's left
            return newArr;
        }
    }
}
