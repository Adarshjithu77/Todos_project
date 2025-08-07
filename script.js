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
       for (let i = 0; i < filteredTodos.length; i++) {
        const todo = filteredTodos[i];
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-50 p-2 rounded';


        li.innerHTML = `
          <div class="flex items-center space-x-2">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} class="w-4 h-4 text-pink-500 rounded focus:ring-pink-400">
            <span class="${todo.completed ? 'line-through text-gray-400' : ''}">${todo.text}</span>
          </div>
          <button class="text-red-400 hover:text-red-600">&times;</button>
        `;

         li.getElementsByTagName('input')[0].addEventListener('change', () => {
          var index = todos.indexOf(todo);
          todos[index].completed = !todos[index].completed;
          render();
        });
        
      }
    }


       


