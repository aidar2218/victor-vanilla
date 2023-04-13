let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]


const getName = st => st.name




const getNames = (array) => {
    const result = [];
    const getName = st => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = getName(array[i])
        result[i] = newValue;
    }
    return result;
}

// [85, 89, 120, 100]

const getScores = (array) => {
    const result = [];
    const getStScores = st => st.scores;
    for (let i = 0; i < array.length; i++) {
        const newValue = getStScores(array[i])
        result[i] = newValue;
    }
    return result;
}




const superMap = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        result[i] = newValue;
    }
    return result;
}

console.log(students.map(getName));
console.log(superMap(students ,getName));

function superFilter (func) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if(func(this[i]) === true) {
            result.push(this[i]);
        }
    }
    return result;
}
Array.prototype.superFilter = superFilter()

console.log(students.superFilter(st => st.scores >= 100));
console.log(students.filter(st => st.scores >= 100));



const superPop = (array) => {
    let lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
}

console.log(superPop([1,2,3,4,5]));



const superPush = (arr, el) => {
    arr[arr.length] = el;
    return arr;
}

console.log(superPush([1,2,3,4], 5))



