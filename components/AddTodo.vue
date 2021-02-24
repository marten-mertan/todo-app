<template>
    <div>
        <h1>
            Add Todo
        </h1>
        <form @submit="onSubmit">
            <input v-model="title" 
                   type="text" 
                   placeholder="Add todo...">
            <input type="submit" 
                   value="Submit">
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'AddTodo',
        data() {
            return {
                title: ''
            };
        },
        methods: {
            ...mapActions('todo', ['addTodo']),
            onSubmit(e) {
                e.preventDefault();
                this.addTodo(this.title);
            }
        },
    };
</script>

<style lang="scss" module>
    .todo-add {
        //
    }
</style>
