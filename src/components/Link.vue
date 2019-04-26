<template>
    <div v-show="href" class="world">
        <a v-bind:href="href" v-on:click="openLink" target="_blank">Here's your link!</a>
        <p v-html="innerHTML">Hi</p>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: {
        href: null
    },
    data: function() {
        return {
            innerHTML: '<a href="https://www.google.com">Google!</a>'
        }
    },
    methods: {
        openLink: function(event) {
            event.preventDefault();
            window.open(this.href);
        }
    }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
