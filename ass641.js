

var state = {
    todos: [],
  };
  
  var todoListElement = document.getElementById("todo-list");
  var form = document.querySelector(".input-form");
  var inputElement = document.getElementById("todo-input");
  
  form.addEventListener("submit", addTodoItem);
  
  function addTodoItem(e) {
    e.preventDefault();
    if (inputElement.value !== "") {
      state.todos.push(inputElement.value);
      printItemToScreen(inputElement.value);
      inputElement.value = "";
    }
    console.log(state.todos);
  }
  
  function printItemToScreen(todoItem) {
    var todoHTML = `<div class="todo-item"  >
      <span id="item-${todoItem}">${todoItem}</span>
      <button onclick="doubleItem('${todoItem}')">2X</button>
      <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o" style="font-size:20px;color:red"></i>
      
      
    </div>`;
    
    todoListElement.innerHTML += todoHTML;
    console.log(todoItem);
  }
  

  
  function renderArray() {
    todoListElement.innerHTML = "";
    for (i in state.todos) {
      printItemToScreen(state.todos[i]);
      
    }
  }
  function doubleItem(item){
    let list = state.todos.indexOf(item);
    item = item+item;
    state.todos[list] = item;
    renderArray();
  }
  var edit=document.getElementById("edit('${todoItem}')");
  edit.addEventListener( "click" , editop);
  function editop(){
    inputElement.contentEditable = true ;
  }
  
  
   function deleteItem(item) {
    let list = state.todos.indexOf(item);
    state.todos.splice(list, 1);
    console.log(state.todos);
    renderArray();
  }
