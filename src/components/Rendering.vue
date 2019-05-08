<template>
    <div>
        Switch by v-if
        <p v-if="show">Show</p>
        <p v-else-if="!show">Unshown</p>

        <template v-if="show">
            <h6>Inside template</h6>
        </template>

        <h3 v-show="show">V-Show is using display:none </h3>
        <button @click="show = !show">Switch</button>

        <ul :style="{textAlign: 'left'}">
            <li v-for="(ingredient, i) in ingredients" v-bind:key="ingredient">{{ ingredient }}({{ i }})</li>
        </ul>
        <template v-for="(ingredient, i) in ingredients">
            <h2 v-bind:key="i">INGREDIENT: {{ ingredient }}</h2>
            <p v-bind:key="i">INDEX: {{ i }}</p>
        </template>
        <template v-for="person in persons">
            <li v-bind:key="person.id">
                <div v-for="(value, key) in person" v-bind:key="value">{{ key }} : {{ value }} </div>
            </li>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Rendering',
    data: function() {
        return {
            show: false,
            ingredients: ['100g of beef', 'A can of cutted tomato', '100ml of water'],
            persons: [
                {id: 1, name: 'John', age:30 },
                {id: 2, name: 'Cena', age:24 },
                {id: 3, name: 'Tadadada', age:55 },
                {id: 4, name: 'Dadadadatta', age:41 }
            ]
        }
    }
}
</script>
