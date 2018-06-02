function myReplace(str, before, after) {
    let array1 = str.split(" ");

    console.log(array1);
    for (index in array1) {
        if (array1[index] == before) {
            console.log(/[A-Z]/.test(before[0]));
            if (/[A-Z]/.test(before[0])) {
                after = after.charAt(0).toUpperCase() + after.slice(1);
            } else {                               
                after = after.charAt(0).toLowerCase() + after.slice(1);           
            }
            array1.splice(index, 1, after);
        }
    }
    str = array1.join(' ');
    return str;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));