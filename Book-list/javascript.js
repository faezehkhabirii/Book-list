// initialize add book frame and button
const inputText = document.querySelector('#add-book input');
const link = document.querySelector('.button');
// initialize check box 
const checkBox = document.querySelector('#hide input')
// initialize unordered list of books 
const ul = document.querySelector('ul');
// search bar
const inputSearch = document.querySelector('#search-books input');
// delete button will not change (using `)
const spanDelete = `<span class="delete">حدف</span>`;

//adding book process and create object and pass to function
link.addEventListener('click', function (e) {


    // create new span tag and set class name
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;
    // add to list
    const li = document.createElement('li');
    li.appendChild(spanName);
    //add tag to html
    li.innerHTML += spanDelete;
    // add to parent 
    ul.appendChild(li);
    // using localstorage to saving input
    storeToLocalStorage(inputText.value);
    // after resive replase input value with none
    inputText.value = 'none';
    // deactive object behavior
    e.preventDefault();
})
// set listener to delete button 
ul.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        // e.target return spanDelete tag
        e.target.parentElement.remove();
        //remove from local storage
        removeFromLocalStorage(e.target.parentElement.chilrden[0].textContent);

    }
})
// hiding books 
checkBox.addEventListener('click' , function(e){
    if (checkBox.checked === true) {
        ul.style.display = 'none';
        ul.style.display = 'block';
    }
})
/* search in books using keyup and access to list of avaliable books 
 Comparing textContent with the input value */
inputSearch.addEventListener('keyup', function(e){
    for(let book of ul.children){
        if (book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1) {
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    }
})
//using DOM content loaded to show value from local storage
document.addEventListener('DOMContentLoaded', function (e) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = localStorage.getItem('tasks').split(',');
    }
    for (let item of tasks) {
        const spanName = document.createElement('span');
        spanName.className = 'name';
        spanName.textContent = inputText.value;
        const li = document.createElement('li');
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
    }

})



function storeToLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = localStorage.getItem('tasks').split(',');
    }
    tasks.push(task);
    // key : value
    localStorage.setItem('tasks', tasks);
}
//tasks : book names
function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = localStorage.getItem('tasks').split(',');
    }
 for(let i =0; i<tasks.length; i++){
    if(tasks[i] === task){
        tasks.splice(i ,1);
    }
 }
 // check storage is empty
 if(tasks.length === 0){
    localStorage.clear();
 }else{
    localStorage.setItem('tasks' , tasks);
 }
    
}


//  const url = 'https://jsonplaceholder.typicode.com/todos/1';
//  // another way using fetch
// const getTodos = async url =>{
//     const response = async url =>{
//         if(response.status === 200){
//             const data = await response.json();
//             return data;
//         }else{
//             throw new Error('not found...');
//         }
//     }
// }
// getTodos(url)
// .then(data => console.log(data))
// .catch(error => console.log(error))
// const getTodos = function(url){
//     return new Promise(function(resolve, reject){
        
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.send();
    
//     request.onload = function () {
//       if (request.status === 200) {
//         const data = JSON.parse(request.responseText);
//        resolve(data);
//       } else {
//        reject('Request failed...');
//       }
//     }
// });
// }

// // resovle sent data as argument to then()
// getTodos(url).then(function(data){
//     console.log(data)
//     // like try catch in java
// }).catch(function(error){
//     console.log(error)
// })




