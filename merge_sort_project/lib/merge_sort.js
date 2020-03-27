function merge(array1, array2) {
    let newArr = [];
    while (array1[0] !== undefined && array2[0] !== undefined){
        if(array1[0] < array2[0]){
            newArr.push(array1.shift());
        } else {
            newArr.push(array2.shift());
        }
    }
    return newArr.concat(array1,array2);
}

function mergeSort(array) {
    if(array.length < 2) return array;
    let pivot = Math.floor(array.length / 2);
    let left = array.slice(0,pivot);
    let right = array.slice(pivot);

    return merge(mergeSort(left),mergeSort(right));
}

module.exports = {
    merge,
    mergeSort
};

merge([1, 5, 10, 15], [0, 2, 3, 7, 10]);