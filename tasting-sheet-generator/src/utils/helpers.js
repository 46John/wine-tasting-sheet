export let reorderArrayByOne = (array, old_index, new_index) => {
    let arrCopy = array.slice();
    arrCopy[old_index] = array[new_index];
    arrCopy[new_index] = array[old_index];
    return arrCopy;
}