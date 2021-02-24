<template>
    <div :class="{'_completed':todo.completed}"
         class="todos-item"
         @click="toggleTodo(todo)">
        <div :class="{'_completed':todo.completed}"
             class="todos-item__check">
            
        </div>
        <div class="todos-item__text">
            {{ todo.title }}
        </div>
        <div class="todos-item__delete"
             @click="removeTodo(todo)">
            <svg class="icon-trash">
                <use xlink:href="./icons/all.svg#icon-trash" />
            </svg>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                default() {
                    return {
                        id: 0,
                        title: '- Empty -',
                        completed: false
                    };
                }
            }
        },
        methods: {
            ...mapActions('todo', ['removeTodo', 'toggleTodo'])
        }
    };
</script>

<style lang="scss">
    .todos-item {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;
        cursor: pointer;

        &._completed {
            text-decoration: line-through;
        }

        &__check {
            display: block;
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            background: #fff;
            margin-right: 12px;
            border: 2px solid #9098bc;
            border-radius: 50%;

            &._completed {
                background: #d1a5fe;
            }
        }

        &__text {
            color: #9098bc;
        }

        &__delete {
            border: none;
            padding: 5px 10px;
            margin-left: auto;
            cursor: pointer;
        }
    }
</style>
