 let todos = [];
    let filter = 'all';

    let input = document.getElementById('todo-input');
    let list = document.getElementById('todo-list');
    let itemsLeft = document.getElementById('items-left');


    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value !== '') {
        todos.push({ text: input.value, completed: false });
        input.value = '';
        render();
      }
    });


    document.getElementById('filter-all').addEventListener('click', () => {
      filter = 'all';
      render();
    });

    document.getElementById('filter-completed').addEventListener('click',()=>{
        filter='completed';
        render();
    })

    document.getElementById('clear-completed').addEventListener('click',()=>{
        let newTodos = [];
        for(let i=0;i<todos.length;i++){
            if(!todos[i].completed){
                newTodos.push(todos[i]);
            }
        }
        todos=newTodos;
        render();
    });


    let render = () => {
      list.innerHTML = '';

      var filteredTodos = [];
      for (let i = 0; i < todos.length; i++) {
        if (filter === 'all') {
          filteredTodos.push(todos[i]);
        } else if (filter === 'active' && !todos[i].completed) {
          filteredTodos.push(todos[i]);
        } else if (filter === 'completed' && todos[i].completed) {
          filteredTodos.push(todos[i]);
        }
      }