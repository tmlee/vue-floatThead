import Vue from 'vue'
import FloatThead from '@/components/FloatThead'

describe('FloatThead.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(FloatThead)
    const vm = new Constructor().$mount()
    expect(vm.$el.tagName).to.eql('TABLE')
    expect(vm.$el.getAttribute('id')).to.eql('floatTheadTable')
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
})
