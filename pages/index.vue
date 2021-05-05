<template>
  <div class="container">
    <NameInput v-model="text"></NameInput>
    <div class="name">
      {{ text }}
    </div>
    <!-- <input type="text" v-model="text" /> -->
    <!-- {{ upperCase }} -->
    <Card></Card>
    <NuxtLink to="/detail">detail</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NameInput from '~/components/NameInput.vue'

export default Vue.extend({
  components: {
    NameInput,
  },
  data() {
    return {
      text: 'Tokunaga!!',
    }
  },
  // 算出プロパティ,  キャッシュで一時的に値を保存できる
  computed: {
    upperCase(): string {
      return this.text.toUpperCase()
    },
  },
  methods: {
    onInput(value: string) {
      this.text = value
    },
  },
})
</script>

<style scoped></style>
