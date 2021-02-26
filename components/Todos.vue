<template>
    <div class="todos">
        <AddTodo />
        <transition-group name="todo-fade">
            <TodoItem v-for="todo in allTodos"
                      :key="todo.id"
                      :todo="todo" 
            />
        </transition-group>
        <div v-if="!allTodos.length"
             class="todos__empty">
            О, нет! Ваш список дел пуст! 
            <br> 
            Скорее добавьте в него что-нибудь!
        </div>
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
            if (process.browser) {
                this.fetchTodos();
            }
        },
        methods: {
            ...mapActions('todo', ['fetchTodos'])
        },
    };
</script>

<style lang="scss">
    .todos {
        &__empty {
            text-align: center;
            padding: 10px;
            font-size: 14px;
            line-height: 1.5;
            color: #9098bc;
        }
    }
</style>
