<template>
    <div>
        <button v-on:click="x += 1">Inc x</button>
        <button v-on:click="y += 1">Inc y</button>
        <p v-on:mousemove="(event) => {
            x = event.clientX;
            y = event.clientY;
            }"
        >
            Coordinate: {{ x }} / {{ y }}
            - <span v-on:mousemove.stop="">DEAD SPOT</span>
        </p>
        <input type="text" v-on:keyup.enter="entered" />
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
        // increment: function (name, int) {
        //     switch(name) {
        //         case 'x':
        //             this.x += int;
        //             break;
        //         case 'y':
        //             this.y += int;
        //             break;
        //     }
        // },
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
