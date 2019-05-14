<template>
  <div class="hello">
    <Counter />
    <h2>url: {{ text }}</h2>
    <input type="text" v-on:input="setText" v-bind:value="text" />
    <button v-on:click="updateLink">make link</button>
    <Link v-bind:href="href" />
    <Computed />
    <Css />
    <Rendering />
    <DropZone @send-file="sendFile" />
    <button type="button" @click="parse">パース</button>
    <pre>
      {{ json }}
    </pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Link from './Link.vue';
import Counter from './Counter';
import Computed from './Computed';
import Css from './Css';
import Rendering from './Rendering';
import DropZone from './DropZone';

export default {
  name: 'HelloWorld',
  components: {
    Link,
    Counter,
    Computed,
    Css,
    Rendering,
    DropZone
  },
  data: function() {
    return {
      href: null,
      files: [],
      json: {}
    }
  },
  computed: {
      ...mapState(['text'])
  },
  methods: {
    ...mapActions(['setText']),
    updateLink: function() {
      this.href = this.text;
      this.text = null;
    },
    sendFile: function(list) {
      this.files = list;
    },
    parse: function() {
      const reader = new FileReader();
      reader.readAsText(this.files[0], 'utf-8');
      reader.onload = function(event) {
        this.json = JSON.parse(event.target.result).family;
      };
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
