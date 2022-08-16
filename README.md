# VitePress Training

Learn simple vitepress tricks and configurations

Happy every day

```sh
mkdir vitepress-starter && cd vitepress-starter
```

```sh 
yarn init
```

```sh 
yarn add --dev vitepress vue
```

```sh
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

```sh 
yarn docs:dev
```
