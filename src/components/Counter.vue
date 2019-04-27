<template>
    <div>
        <button v-on:click="increment('x', 1)">Inc x</button>
        <button v-on:click="increment('y', 1)">Inc y</button>
        <p v-on:mousemove="updateCoordinate">
            Coordinate: {{ x }} / {{ y }}
            - <span v-on:mousemove.stop="">DEAD SPOT</span>
        </p>
        <input type="text" v-on:keyup.enter="entered"></input>
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
        increment: function (name, int) {
            switch(name) {
                case 'x':
                    this.x += int;
                    break;
                case 'y':
                    this.y += int;
                    break;
            }
        },
        updateCoordinate: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        entered: function(event) {
            console.log(event);
        }
    }
}
</script>
