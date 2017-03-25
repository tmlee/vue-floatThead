<template>
  <div class="hello">
    <div class='narrow'>
      <float-thead-table 
        ref='ftable' 
        floatTableClass='floatedTable' 
        class="floated"
      >
      <thead>
        <tr>
            <th><a href="#" id="demoHeader1">xclick me</a></th>
            <th><a href="#" id="demoHeader2">mouse over me</a></th>
            <th><a href="#" id="demoHeader3">Header...3</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
        <tr>
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
        </tr>
        <tr>
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
        </tr>
        <tr>
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
        </tr>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
        <tr>
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
        </tr>
        <tr>
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
        </tr>
        <tr>
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
        </tr>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
        <tr>
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
        </tr>
        <tr>
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
        </tr>
        <tr>
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
        </tr>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
        <tr>
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
        </tr>
        <tr>
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
        </tr>
        <tr>
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
        </tr>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
        <tr>
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
        </tr>
        <tr>
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
        </tr>
      </tbody>
      </float-thead-table>
    </div>

    <button v-on:click="triggerDestroy">Destroy Table</button>
    <button v-on:click="triggerRestore" v-if="reinit">Restore Table</button>
    <button v-on:click="triggerReflow">Reflow</button>
    <button v-on:click="triggerGetRowGroups">Get Row Groups</button>
  </div>
</template>

<script>
import FloatThead from '../../src/components/FloatThead.vue'

export default {
  name: 'app',
  data () {
    return {
      reinit: undefined
    }
  },
  methods: {
    triggerDestroy () {
      this.reinit = this.$refs.ftable.destroy()
    },
    triggerReflow () {
      this.$refs.ftable.reflow()
    },
    triggerGetRowGroups () {
      console.log(this.$refs.ftable.getRowGroups())
    },
    triggerRestore () {
      this.reinit()
      this.reinit = undefined
    }
  },
  components: {
    FloatThead
  },
  mounted () {
    this.$refs.ftable.$on('floatThead', (e, isFloated, floatContainer) =>
      console.log('floatThead triggered', e, isFloated, floatContainer)
    )
    this.$refs.ftable.$on('reflowed', (e, floatContainer) =>
      console.log('reflowed triggered', e, floatContainer)
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.narrow{
  height: 200px;
  overflow: scroll;
}

table.floated {
  background-color: #d5ffd5;
}

table {
  max-width: none; 
  border-style: none; 
}

thead {
  background-color: #eee;
}

table.large {
  width:900px;
}
table.huge {
  width:1500px;
}


</style>
