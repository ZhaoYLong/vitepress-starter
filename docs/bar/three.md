---
prev: 'Bar Index'
next: 'Bar Four'
---

# API Reference


## `useData`


<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
// 需要先定义useData中的内容然后才能使用
</script>
<template>
  <!-- <h1>{{ theme.footer.copyright }}</h1> -->
</template>

## `useRoute`

```ts
  interface Route {
    path: string
    data: PageData
  }
```

## `useRouter`

```ts
  interface Router {
    route: Route
    go: (href?: string) => Promise<void>
  }
```

## `widthBase`

## `<Content />`

```html
  <template>
    <h1>Custom Layout</h1>
    <Content />
  </template>
```

## `<ClientOnly />`

The `<ClientOnly />` component renders its slot only at client side
