import { mount } from '@vue/test-utils'
import SInputSelect from 'sefirot/components/SInputSelect'

describe('Components - Inputs - SInputSelect', () => {
  test('it emits correct value when an user select an option', () => {
    const options = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 }
    ]

    const wrapper = mount(SInputSelect, {
      propsData: { options, value: 1 }
    })

    wrapper.find('.SInputSelect .select').setValue(JSON.stringify({ label: 'Option 2', value: 2 }))

    expect(wrapper.emitted('change')[0][0]).toEqual(2)
  })
})
