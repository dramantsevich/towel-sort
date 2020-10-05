
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let emptyArray = [];

    if(matrix == undefined){
        return emptyArray;
    }else if(matrix.length == 0){
        return emptyArray;
    }else if(matrix.length > 3){
        let secondArray = matrix[1].reverse();
        let newArray = matrix.fill(secondArray, 1, 1);
        let thirdArray = matrix[3].reverse();
        newArray = matrix.fill(thirdArray, 3);

        return newArray.flat(Infinity);
    }
    else{
        let secondArray = matrix[1].reverse();
        let newArray = matrix.fill(secondArray, 1, 1);

        return newArray.flat(Infinity);
    }
}
