<template>
  <div class="hello">
    <Counter />
    <h2>url: {{ text }}</h2>
    <input type="text" v-on:input="changeText" v-bind:value="text" />
    <button v-on:click="updateLink">make link</button>
    <Link v-bind:href="href" />
    <Computed />
    <Css />
    <Rendering />
  </div>
</template>

<script>
import Link from './Link.vue';
import Counter from './Counter';
import Computed from './Computed';
import Css from './Css';
import Rendering from './Rendering';

export default {
  name: 'HelloWorld',
  components: {
    Link,
    Counter,
    Computed,
    Css,
    Rendering
  },
  data: function() {
    return {
      text: 'data initial value',
      href: null
    }
  },
  methods: {
    changeText: function(e) {
      this.text = e.target.value;
    },
    updateLink: function() {
      this.href = this.text;
      this.text = null;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
