<template>
    <div>
        <div
            class="demo"
            @click="attachRed = !attachRed"
            :class="divClasses"
        />
        <div class="demo" :class="{red: attachRed}"></div>
        <div class="demo" :class="[color, {red:attachRed}]"></div>
        <div class="demo" :style="{backgroundColor: color}"></div>
        <div class="demo" :style="someStyle"></div>
        <div class="demo" :style="[someStyle, {height: '10vh'}]"></div>
        <hr>
        <input type="text" v-model="color" />
    </div>
</template>

<script>
export default {
    name: 'Css',
    data: function() {
        return {
            attachRed: false,
            color: 'green',
            width: 10
        }
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        someStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'vw'
            }
        }
    }
};
</script>

<style>
.demo {
    width: 200px;
    height: 200px;
    display: inline-block;
}
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.green {
    background-color: green;
}
.gray {
    background-color: gray;
}
</style>
