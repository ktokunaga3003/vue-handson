<template>
  <div>
    <input type="text" :value="name" @input="onInput" /><span>{{ name }}</span>
    <!-- {{ name }} => {{ upperCase }}
    <button @click="onClick">ボタン</button> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: `NameInput`,
  model: {
    prop: 'name',
    event: 'change',
  },
  // 関数にすることで毎回レンダリングする（オブジェクトの場合は結果が共有(保存)されてしまう）
  //   data() {
  //     return {
  //       name: 'tokunaga',
  //     }
  //   },
  data() {
    return {}
  },
  // props → 親から渡されるもの（readOnly）、書き換えてはいけない
  props: {
    // typeのところは大文字の書き方（typeコンストラクタ）
    name: { type: String, required: false, default: '' },
  },
  computed: {
    upperCase(): string {
      return this.name.toUpperCase()
    },
  },
  methods: {
    onInput(event: InputEvent) {
      this.$emit('change', event.target?.value)
    },
  },
})
</script>

<style scoped></style>
