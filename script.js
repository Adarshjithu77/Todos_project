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


