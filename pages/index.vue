<template>
    <div :class="$style.home"
         class="page">
        <div class="container">
            <Todos />
        </div>
    </div>
</template>

<script>
    import Todos from '../components/Todos';

    export default {
        name: 'HomePage',
        components: {
            Todos
        },
    };
</script>

<style lang="scss" module>
    .home {
        //
    }
</style>
