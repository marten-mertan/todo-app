<template>
    <div>
        <form class="todo-add-form"
              @submit="onSubmit">
            <input type="submit" 
                   value="+">
            <textarea v-model="title" 
                      type="text" 
                      placeholder="Добавить пункт...">
            </textarea>
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
                if (this.title) {
                    this.addTodo(this.title);
                    this.title = '';
                }
            }
        },
    };
</script>

<style lang="scss">
    .todo-add {
        &-form {
            display: flex;
            padding: 10px;
            height: 100px;

            textarea {
                flex: 1 1 auto;
                padding: 10px;
                border: 1px solid #e0e0e0;
                border-radius: 0 4px 4px 0;
                transition: border-color .2s ease-in-out;

                &:focus {
                    outline: none;
                    border: 2px solid #af7eeb;
                }
            }

            input {
                background: #af7eeb;
                color: white;
                font-size: 30px;
                font-weight: 400;
                width: 80px;
                border: 1px solid #af7eeb;
                border-radius: 4px 0 0 4px;
                cursor: pointer;
                transition: all .2s ease;

                &:hover {
                    background: #8c65bb;
                }
            }
        }
    }
</style>
