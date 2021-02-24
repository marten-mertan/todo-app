<template>
    <div class="todos">
        <AddTodo />
        <TodoItem v-for="todo in allTodos"
                  :key="todo.id"
                  :todo="todo" 
        />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import TodoItem from './TodoItem';
    import AddTodo from './AddTodo';

    export default {
        name: 'Todos',
        components: {
            TodoItem,
            AddTodo
        },
        computed: {
            ...mapGetters('todo', ['allTodos']),
        },
        created() {
            this.fetchTodos();
        },
        methods: {
            ...mapActions('todo', ['fetchTodos'])
        },
    };
</script>

<style lang="scss">
    .todos {
        //
    }
</style>
