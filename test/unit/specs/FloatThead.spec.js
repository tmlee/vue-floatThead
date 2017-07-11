import Vue from 'vue'
import FloatThead from '@/components/FloatThead'

describe('FloatThead.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(FloatThead)
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.eql('TABLE')
  })

  it('should receive parameters from props', () => {
    // Pass data into Props
    // https://vuejs.org/v2/api/#propsData
    let customProps = {
      position: 'fixed',
      scrollContainer: function () {},
      responsiveContainer: function () {},
      headerCellSelector: 'tr',
      floatTableClass: 'customFloatTableClass',
      floatContainerClass: 'customFloatContainerClass',
      top: 999,
      bottom: 999,
      zIndex: 999,
      debug: true,
      getSizingRow: function () {},
      copyTableClass: false,
      autoReflow: true
    }
    const Constructor = Vue.extend(FloatThead)
    const vm = new Constructor({propsData: customProps}).$mount()
    expect(vm.$props.position).to.eql('fixed')
    expect(vm.$props.scrollContainer).to.a('function')
    expect(vm.$props.responsiveContainer).to.a('function')
    expect(vm.$props.headerCellSelector).to.eql('tr')
    expect(vm.$props.floatTableClass).to.eql('customFloatTableClass')
    expect(vm.$props.floatContainerClass).to.eql('customFloatContainerClass')
    expect(vm.$props.top).to.eql(999)
    expect(vm.$props.bottom).to.eql(999)
    expect(vm.$props.zIndex).to.eql(999)
    expect(vm.$props.debug).to.be.true
    expect(vm.$props.getSizingRow).to.a('function')
    expect(vm.$props.copyTableClass).to.be.false
    expect(vm.$props.autoReflow).to.be.true
  })

  it.skip('should pass the props data to floatThead options on mount', () => {

  })

  it.skip('should listen to floatThead event on mount', () => {

  })

  it.skip('should listen to reflowed event on mount', () => {

  })

  it.skip('should destroy table', () => {

  })

  it.skip('should reflow table', () => {

  })

  it.skip('should getRowGroups', () => {

  })

  describe('multiple FloatThead on a page', () => {
    beforeEach(() => {
      const fixture = `
        <div id="fixture">
          <div></div>
        </div>`

      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture
      )
    })

    afterEach(() => {
      document.body.removeChild(document.querySelector('#fixture'))
    })

    it('should be distinct', () => {
      const Wrapper = Vue.extend({
        template: `
          <div>
            <float-thead float-table-class="table1">
              <thead></thead>
              <tbody></tbody>
            </float-thead>

            <float-thead float-table-class="table2">
              <thead></thead>
              <tbody></tbody>
            </float-thead>
          </div>
        `,
        components: {
          FloatThead
        }
      })

      const wrapper = new Wrapper().$mount('#fixture div')

      const table1 = wrapper.$el.querySelector('table.table1')
      const table2 = wrapper.$el.querySelector('table.table2')

      expect(table1).to.exist
      expect(table2).to.exist
      expect(table1).not.to.equal(table2)
    })
  })
})
