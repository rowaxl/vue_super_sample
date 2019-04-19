<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <input type="text" v-on:input="changeMessage" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => { return { text: 'initial value' } },
  methods: {
    changeMessage: function(e) {
      this.text = e.target.value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
