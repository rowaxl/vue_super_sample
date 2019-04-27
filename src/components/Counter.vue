<template>
    <div>
        <button v-on:click="x += 1">Inc x</button>
        <button v-on:click="y += 1">Inc y</button>
        <p v-on:mousemove="updateCoordinate">
            Coordinate: {{ x }} / {{ y }}
            - <span v-on:mousemove.stop="">DEAD SPOT</span>
        </p>
        <input type="text" v-on:keyup.enter="() => {console.log('entered!')}" />
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data: function() {
        return {
            x: 0,
            y: 0
        }
    },
    methods: {
        updateCoordinate: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
}
</script>
