<template>
    <div>
        <p>{{ counter }}</p>
        <button v-on:click="increment">Inc</button>
        <button v-on:click="decrement">Dec</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter = ++this.counter;
        },
        decrement: function () {
            this.counter = --this.counter;
        }
    }
}
</script>
