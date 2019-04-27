<template>
    <div>
        <p>Result: {{ output }}</p>
        <button v-on:click="++computedCounter">Click!</button>
    </div>
</template>

<script>
export default {
    name: 'Computed',
    data: function() {
        return {
            computedCounter : 0
        }
    },
    computed: {
        output: function() {
            return this.computedCounter > 0 ? 'clicked!' : 'not clicked yet!'
        }
    },
    methods: {
        result: function() {
            return this.computedCounter > 0 ? 'clicked!' : 'not clicked yet!'
        }
    }
};
</script>
