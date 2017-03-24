# vue-floatthead

> Vue 2 component for [jquery.floatThead](http://mkoryak.github.io/floatThead/)

# Installation

## npm
```shell
$ npm install vue-floatthead
```

## Getting Started

```html
<script>
  import FloatThead from 'vue-floatthead'
  export default {
    components: {
      FloatThead
    }
  }
</script>

<float-thead></float-thead>
```

## Usages

Pass [options](http://mkoryak.github.io/floatThead/#options) to the component
```html
<float-thead position='fixed' floatTableClass='awesome-table'></float-thead>
```

Call [methods](http://mkoryak.github.io/floatThead/#methods) of the component
`destroy()`, `reflow()`, or `getRowGroups()`

```html
<float-thead ref='awesometable'></float-thead>

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
