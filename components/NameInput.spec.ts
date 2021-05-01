import Vue from 'vue'
import { mount, Wrapper, shallowMount } from '@vue/test-utils'
import NameInput from '~/components/NameInput.vue'

describe('NameInput Component', () => {
  let wrapper: Wrapper<Vue>
  beforeEach(() => {
    wrapper = shallowMount(NameInput, {
      propsData: {
        name: 'tokunaga',
      },
    })
  })
  it('nameをpropsで受け取っていること', async () => {
    expect(wrapper.props('name')).toEqual('tokunaga')

    wrapper.setProps({ name: 'kosuke' })

    // レンダリングが終わったら$nextTickが呼ばれる
    await wrapper.vm.$nextTick()
    expect(wrapper.props('name')).toEqual('kosuke')

    wrapper.setProps({ name: 't-k' })

    await wrapper.vm.$nextTick()
    expect(wrapper.props('name')).toEqual('t-k')
  })

  it('name Propsの内容を画面に表示できているか', () => {
    // expect(wrapper.find('button').exists()).toBeTruthy()
    expect(wrapper.find('span').text()).toEqual('tokunaga')
  })

  it('テキストボックスに入力した場合、changeイベントを発生させていること', () => {
    const inputWrapper = wrapper.find('input')
    ;(inputWrapper.element as HTMLInputElement).value = 'tokunaga'
    wrapper.find('input').trigger('input')
    const changeEmitted = wrapper.emitted('change')

    if (changeEmitted === undefined) {
      throw new Error('changeイベントは発生していません')
    }
    expect(changeEmitted.length).toEqual(1)
    // イベントの記録
    const firstEvent = changeEmitted[0]
    const emitedParam = firstEvent[0]

    expect(emitedParam[0]).toEqual('tokunaga')
  })
})
