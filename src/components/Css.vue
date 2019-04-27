<template>
    <div>
        <div
            class="demo"
            @click="attachRed = !attachRed"
            :class="divClasses"
        />
        <div class="demo" :class="{red: attachRed}"></div>
        <div class="demo" :class="color"></div>
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
            color: 'green'
        }
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
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
