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
    </div>
</template>

<script>
export default {
    name: 'Rendering',
    data: function() {
        return {
            show: false
        }
    }
}
</script>
