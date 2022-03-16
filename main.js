console.log("test");
let userIdValue = 7;

axios.get(`https://jsonplaceholder.typicode.com/todos`,{
    params: {
        userId:userIdValue,
        id:124
    }
})
.then((response) =>console.log(response))

// fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userIdValue}&id=124`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
