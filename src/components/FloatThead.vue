<template>
  <table id="floatTheadTable">
    <slot></slot>
  </table>
</template>

<script>
  // import floatThead from 'floatthead'
  import $ from 'jquery'
  import 'floatthead'

  export default {
    name: 'float-thead',
    props: {
      position: { type: String, default: 'auto' },
      scrollContainer: { type: Function },
      responsiveContainer: { type: Function },
      headerCellSelector: { type: String, default: 'tr:first>th:visible' },
      floatTableClass: { type: String, default: 'floatThead-table' },
      floatContainerClass: { type: String, default: 'floatThead-container' },
      top: { type: [Number, Function], default: 0 },
      bottom: { type: [Number, Function], default: 0 },
      zIndex: { type: Number, default: 1001 },
      debug: { type: Boolean, default: false },
      getSizingRow: { type: Function },
      copyTableClass: { type: Boolean, default: true },
      autoReflow: { type: Boolean, default: false }
    },
    data () {
      return {
      }
    },
    methods: {
      destroy () {},
      reflow () {},
      getRowGroups () {}
    },
    mounted () {
      let table = $('#floatTheadTable')
      let options = {
        position: this.position,
        scrollContainer: this.scrollContainer,
        responsiveContainer: this.responsiveContainer,
        headerCellSelector: this.headerCellSelector,
        floatTableClass: this.floatTableClass,
        floatContainerClass: this.floatContainerClass,
        top: this.top,
        bottom: this.bottom,
        zIndex: this.zIndex,
        debug: this.debug,
        getSizingRow: this.getSizingRow,
        copyTableClass: this.copyTableClass,
        autoReflow: this.autoReflow
      }

      table.floatThead(options)
    }
  }
</script>
