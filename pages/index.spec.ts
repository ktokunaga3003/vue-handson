import { shallowMount } from '@vue/test-utils'
import index from '~/pages/index.vue'
import NameInput from '~/components/NameInput'

const spy = jest.spyOn(upper, 'upperCase').mockReturnValueOnce('TOKUNAGA')


describe('', () => {
  it('NameInputから', async () => {
    const wrapper = shallowMount(index)
    wrapper.findComponent(NameInput).vm.$emit('change', 'tokunaga')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.name').text()).toEqual('tokunaga')
  })
})
