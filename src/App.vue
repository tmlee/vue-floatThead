<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div style='    height: 100px;
    overflow: scroll;'>
    <float-thead floatTableClass='lalala'>
  <thead> <tr> <th><a href="#" id="demoHeader1">xclick me</a></th> <th><a href="#" id="demoHeader2">mouse over me</a></th> <th><a href="#" id="demoHeader3">Header...3</a></th> </tr> </thead>
                                
                                <tbody> <tr> <td>Cell Content 1</td> <td>Cell Content 2</td> <td>Cell Content 3</td> </tr> <tr> <td>More Cell Content 1</td> <td>More Cell Content 2</td> <td>More Cell Content 3</td> </tr> <tr> <td>Even More Cell Content 1</td> <td>Even More Cell Content 2</td> <td>Even More Cell Content 3</td> </tr> <tr> <td>And Repeat 1</td> <td>And Repeat 2</td> <td>And Repeat 3</td> </tr> <tr> <td>Cell Content 1</td> <td>Cell Content 2</td> <td>Cell Content 3</td> </tr> <tr> <td>More Cell Content 1</td> <td>More Cell Content 2</td> <td>More Cell Content 3</td> </tr> <tr> <td>Even More Cell Content 1</td> <td>Even More Cell Content 2</td> <td>Even More Cell Content 3</td> </tr> <tr> <td>And Repeat 1</td> <td>And Repeat 2</td> <td>And Repeat 3</td> </tr> <tr> <td>Cell Content 1</td> <td>Cell Content 2</td> <td>Cell Content 3</td> </tr> <tr> <td>More Cell Content 1</td> <td>More Cell Content 2</td> <td>More Cell Content 3</td> </tr> <tr> <td>Even More Cell Content 1</td> <td>Even More Cell Content 2</td> <td>Even More Cell Content 3</td> </tr> <tr> <td>And Repeat 1</td> <td>And Repeat 2</td> <td>And Repeat 3</td> </tr> <tr> <td>Cell Content 1</td> <td>Cell Content 2</td> <td>Cell Content 3</td> </tr> <tr> <td>More Cell Content 1</td> <td>More Cell Content 2</td> <td>More Cell Content 3</td> </tr> <tr> <td>Even More Cell Content 1</td> <td>Even More Cell Content 2</td> <td>Even More Cell Content 3</td> </tr> <tr> <td>And Repeat 1</td> <td>And Repeat 2</td> <td>And Repeat 3</td> </tr> <tr> <td>Cell Content 1</td> <td>Cell Content 2</td> <td>Cell Content 3</td> </tr> <tr> <td>More Cell Content 1</td> <td>More Cell Content 2</td> <td>More Cell Content 3</td> </tr> <tr> <td>Even More Cell Content 1</td> <td>Even More Cell Content 2</td> <td>Even More Cell Content 3</td> </tr></tbody>
  
    </float-thead>
    </div>
  </div>
</template>

<script>
import FloatThead from './components/FloatThead'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    FloatThead
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
</style>
