// Objects:
// -object
// -array
// -function

// structure => make copy => change copy => use copy

const user = {
    name: "Aidar",
    age: 23,
    friends: ["Azim", "Baizak"]
}

// CRUD
// create - read - update - delete

const copyUser = {
    ...user,
    friends: [...user.friends]
}

const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const copySuperUser = {
    ...superUser
}

const users = [
    {
        id: 1,
        name: "Aidar",
        isStudent: true
    }, {
        id: 2,
        name: "Agbar",
        isStudent: true
    }, {
        id: 3,
        name: "Baizak",
        isStudent: true
    }, {
        id: 4,
        name: "Azim",
        isStudent: true
    },

]

const copyUsers = [
    ...users,
];

const newStudent = {
    id: 5,
    name: "Donald",
    isStudent: true
}

// const updatedUsers = [...users, newStudent];
//
// const updatedUsers = [];
// for (let i = 0; i < users.length; i++) {
//     updatedUsers.push(users[i]);
// }
// updatedUsers.push();


const updatedUsers = users.filter(st => st.id !== 4);
console.log(updatedUsers === users);

const superUser2 = {
    ...superUser,
    address: {...superUser.address, city: "Bishkek"}
}

const superUser3 = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {
            "lat": "183.567",
            "lng": "938.737"
        }
    }
}