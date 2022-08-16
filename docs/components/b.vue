<template>
  <div>{{text}}</div>
  <input type="text" placeholder="请输入名称" v-model="name">
</template>

<script setup>
import { ref } from 'vue'

const text = ref('这是一个组件')
const name = ref('')
</script>

<style lang="less">
input {
  font-size: 20px;
  color: red;
}
</style>
