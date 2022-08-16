# Using Vue in Markdown

## Templating

{{ 1 + 1}}

<div v-for="i in 3"> {{i}}</div>

<script setup>
  import BComponent from '../components/b.vue'
  import { useData } from 'vitepress'
  const { page } = useData()
</script>
<pre>{{ page }}</pre>

::: v-pre
`{{ This will be displayed as-is }}`
:::

<BComponent />



