export const state = () => ({
    todos: []
});

export const getters = {
    allTodos: state => state.todos
};

export const actions = {
    async fetchTodos({commit}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        commit('setTodos', data);
    },
    async addTodo({commit}, title) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const todo = await response.json();

        // заглушка для уникального id
        todo.id = Date.now(); 

        commit('addTodo', todo);
    },
    removeTodo({commit}, todo) {
        commit('removeTodo', todo);
    },
    toggleTodo({commit}, todo) {
        commit('toggleTodo', todo);
    }
};

export const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    addTodo(state, todo) {
        state.todos.unshift(todo);
    },
    removeTodo(state, todo) {
        const indx = state.todos.findIndex(x => x.id === todo.id);
        state.todos.splice(indx, 1);
    },
    toggleTodo(state, todo) {
        todo.completed = !todo.completed;
    }
};
