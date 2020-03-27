function quickSort(array) {
    if(array.length < 2) return array;
    let pivot = array[0];
    let left = array.slice(1).filter(el => el < pivot);
    let right = array.slice(1).filter(el => el >= pivot);
    return quickSort(left).concat([pivot], quickSort(right));
}


module.exports = {
    quickSort
};