// let arr = ['a', 'b', 'c', 'a', 'a', 'c']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// // Swap:
// let temp = arr[0] // temp = a [a b c a a c]
// arr[0] = arr[2] // 'a' => 'c' [c b c a a c]
// arr[2] = temp // 'c' => 'a'
// // arr[1] = 'c'

// let arr = [2 ,3 ,4 ,1 ,1 ,1 ,4] 
// let alex = []

// for (let i = 0; i < arr.length; i++){
//     if (arr[i + 1] == arr[i] && arr[i + 2] == arr[i]){
//         let next = 0
//         while (arr[i + next] < arr[i]) {
//             next += 1 
//             alex.push(arr[i])
//         }
//         break
//     }   else {
//          continue
//     }
// }

// console.log(alex)

// let sandu = [34, 5, 10, 50, -10]
// let alex = []
// let alexI = 0

// for (let i = 0; i < sandu.length; i++){
//     if (sandu[i] > 5){
//         alex[alexI] = sandu[i]
//         alexI += 1
//     }
// }

// console.log(alex)

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] 

// for (let i = 0; i < 3; i++) {
    //console.log(m[i])
    for (let i = 0; i < m.length; i++) {
        console.log(m[i][i])
    }
//}

let sum =0
for (let i = 0; i < m.length; i++) {
        sum += m[i][m.length - 1 - i]
}

console.log(sum)

