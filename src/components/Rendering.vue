<template>
    <div>
        Switch by v-if
        <p v-if="show">Show</p>
        <p v-else-if="!show">Unshown</p>
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
