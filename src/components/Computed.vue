<template>
    <div>
        <p>Counter: {{ computedCounter }} | {{ computedCounterTwo }}</p>
        <p>Result: {{ result() }} | {{ output }}</p>
        <button v-on:click="++computedCounter">Click!</button>
        <button v-on:click="++computedCounterTwo">Click!</button>
    </div>
</template>

<script>
export default {
    name: 'Computed',
    data: function() {
        return {
            computedCounter: 0,
            computedCounterTwo: 0
        }
    },
    computed: {
        output: function() {
            // eslint-disable-next-line
            console.log('computed runs');
            return this.computedCounter > 0 ? 'clicked!' : 'not clicked yet!'
        }
    },
    watch: {
        computedCounter: function(value) {
            // eslint-disable-next-line
            console.log('watch runs value:', value);
            const vm = this;
            setTimeout(() => {
                vm.computedCounter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            // eslint-disable-next-line
            console.log('methods runs');
            return this.computedCounter > 0 ? 'clicked!' : 'not clicked yet!'
        }
    }
};
</script>
