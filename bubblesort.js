const array = [1 , 4, 3 , 2,5,8,9,7];
var temp;

for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - i - 1 ; j++){
        if(array[j] > array[j+1]){
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            console.log(array)
        }
    }
}


// for(let i = 0; i < array.length - 1; i++){
//     for(let j = 0; j < array.length - i - 1; j++){
//         if(array[j] < array[j+1]){
//             temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }
// console.log(array)