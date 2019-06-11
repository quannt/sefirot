import { mount } from '@vue/test-utils'
import SInputCheckbox from '@/components/inputs/SInputCheckbox'

describe('Components - Inputs - SInputCheckbox', () => {
  test('it emits `input` event when a user inputs the value', () => {
    const wrapper = mount(SInputCheckbox, {
      propsData: {
        value: false
      }
    })

    wrapper.find('.SInputCheckbox .input').trigger('click')

    expect(wrapper.emitted('change')[0][0]).toBe(true)
  })
})
