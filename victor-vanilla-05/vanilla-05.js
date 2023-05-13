// const name1 = ["Donald", "Joe", "Barack"];
// console.log(name1.sort());
// // 1. сортирует строки "из коробки", т.е. без доп. параметров
//
// const name2 = ["Donald", "Joe", "Barack", "Айдар", "азим", "Байзак", "alex"];
// console.log(name2.sort());
// // 2. сортирует строки типа по "алфавиту" (unicode table)
//
// console.log(name1);
// // 3. работает мутабельно (сортирует массив на месте)
//
// console.log(name1.sort() === name1);
// // 4. возвращает ссылку на исходный массив
//
// const nums = [1000, 999, 20000, 4, -100];
// console.log(nums.sort());
// // 5. для остальных случаев необходимо передать функцию сравнения (callback)
//
// // const compareFunction = (a, b) => { // по возрастанию
// //     // > 0 - надо переставить
// //     // < 0 - не надо менять местами
// //     if (a > b) {
// //         return 0;
// //     } else {
// //         return -1;
// //     }
// // }
//
// const compareFunction = (a, b) => a - b;
//
// console.log(nums.sort(compareFunction));
// // 6. функция сравнения должна возвращать число большее или меньшее 0
//
// console.log(nums.reverse());
// // 7. вместе с sort часто используется reverse
//
//
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: "Alex",
//         age: 24,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Helge",
//         age: 24,
//         isMarried: true,
//         scores: 90
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: "alex",
//         age: 22,
//         isMarried: false,
//         scores: 89
//     },
// ]
//
// console.log(students.sort((a, b) => a.age - b.age));
// // 8. Сортировка массива объектов по числовым значениям
//
//
// const sortByName = (a, b) => {
//     if(a.name > b.name) {
//         return 10;
//     } else {
//         return -10;
//     }
// }
//
// console.log(students.sort(sortByName));
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
// // 9. Сортировка массива объектов по строковым значениям



// bubble sort
const numbers = [23, 67, 12, 90, 34];

for (let j = 0; j < numbers.length - 1; j++) {
    let isSorted = true;
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if(numbers[i] > numbers[i + 1]) {
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
            isSorted = false;
        }
    }
    if (isSorted) break;
}

console.log(numbers)