<template>
    <div class="todos">
        <AddTodo />
        <transition-group name="todo-fade">
            <TodoItem v-for="todo in allTodos"
                      :key="todo.id"
                      :todo="todo" 
            />
        </transition-group>
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

    .todo-fade-enter-active {
        transition: opacity .3s ease-in-out, max-height .3s ease-in-out, padding-top .3s ease-in-out, padding-bottom .3s ease-in-out;
    }

    .todo-fade-leave-active {
        transition: opacity .3s ease-in-out, max-height .3s ease-in-out, padding-top .6s ease-in-out, padding-bottom .6s ease-in-out;
    }

    .todo-fade-enter,
    .todo-fade-leave-active {
        max-height: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
    }
</style>
