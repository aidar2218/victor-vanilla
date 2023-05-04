const todoListId_1 = "12rt-fg67"; // v1()
const todoListId_2 = "13rt-fg68"; // v1()

const todoLists = [
    {
        id: todoListId_1, // "12rt-fg67"
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListId_2, // "13rt-fg68"
        title: "What to buy",
        filter: "all",
    },
]

const getKey = (func) => func();
const tasks = {
    [todoListId_1]: [ // "12rt-fg67"
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false}, // true
    ],
    [todoListId_2]: [ // "13rt-fg68"
        {id: 4, title: "Bread", isDone: true},
        {id: 5, title: "Meat", isDone: true},
        {id: 6, title: "Milk", isDone: false},
    ],
    [todoListId]: []
}

console.log(tasks[todoListId_1]);
console.log(tasks[todoLists[0].id]);

const setTodoLists = ([]) => {}
const setTasks = ({}) => {}

const addTodoList = (title) => {
    const todoListId = "34gd-44rk";
    const newTodo = {
        id: todoListId,
        title: title,
        filter: "all",
    };
    setTodoLists([...todoLists, newTodo]);
    setTasks({...tasks, [todoListId]: []});
}


const changeStatus = (taskId, newStatus) => {
    setTasks({...tasks,
        [todoListId_1]: tasks[todoListId_1].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    })
}

const remove = (taskId, todoListId) => {
    const updatedTasks = tasks[todoListId]
        .filter(t => t.id !== taskId);
    setTasks({...tasks,
        [todoListId]: updatedTasks
    })
}