[![Build Status](https://travis-ci.org/tmlee/vue-floatThead.svg)](https://travis-ci.org/tmlee/vue-floatThead)

# vue-floatthead

> Vue 2 component for [jquery.floatThead](http://mkoryak.github.io/floatThead/)

# Installation

## npm
```shell
$ npm install vue-floatthead
```

## Getting Started

```html
<template>
  <float-thead-table>
    <thead>
      <tr>
          <th><a href="#" id="demoHeader1">xclick me</a></th>
          <th><a href="#" id="demoHeader2">mouse over me</a></th>
          <th><a href="#" id="demoHeader3">Header...3</a></th>
      </tr>
      <tbody>
        <tr>
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
        </tr>
      </tbody>
    </thead>
  </float-thead-table>
</template>

<script>
  import Vue from 'vue'
  import FloatThead from 'vue-floatthead'

  Vue.use(FloatThead)

  export default {
    components: {
      FloatThead
    }
  }
</script>
```

## Usages

Pass [options](http://mkoryak.github.io/floatThead/#options) to the component
```html
<float-thead-table position='fixed' floatTableClass='awesome-table'></float-thead-table>
```

Call [methods](http://mkoryak.github.io/floatThead/#methods) of the component
`destroy()`, `reflow()`, or `getRowGroups()`

```html
<float-thead-table ref='awesometable'></float-thead-table>

<script>
  ...
  methods: {
    triggerDestroy () {
      this.$refs.awesometable.destroy()
    }
  }
  ...
</script>
```

Trigger [events](http://mkoryak.github.io/floatThead/#events)
```html
<script>
  ...
  mounted () {
    this.$refs.awesometable.$on('floatThead', (e, isFloated, floatContainer) =>
      console.log('floatThead triggered', e, isFloated, floatContainer)
    )
    this.$refs.awesometable.$on('reflowed', (e, floatContainer) =>
      console.log('reflowed triggered', e, floatContainer)
    )
  }
  ...
</script>

```
