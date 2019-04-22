<template>
    <div class="world">
        <a v-bind:href="href">Link</a>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: {
        href: null
    }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
