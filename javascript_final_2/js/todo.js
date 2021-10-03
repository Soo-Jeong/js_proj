const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput= toDoForm.querySelector("input");

const TODOS_KEY="todos";

let toDos=[];
function savetoDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value= "";
    const newTodoObj={
        text : newTodo, id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
 
    savetoDos();
}

function paintToDo(toDo){
    const li = document.createElement("li") ;
    li.id=toDo.id;
    const span = document.createElement("span");
    const button  = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = toDo.text;
    button.innerText='X';
    toDoList.appendChild(li);

    button.addEventListener("click",deleteToDo);

}

function deleteToDo(event){
    event.preventDefault();
    const li= event.target.parentNode; // which  was it clicked?
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savetoDos();
    li.remove();
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos=localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedToDos =JSON.parse(savedTodos);
    toDos=parsedToDos; 
    //console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
    //console.log("this is the turn of ",item));
}
