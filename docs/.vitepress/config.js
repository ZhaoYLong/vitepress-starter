const anchor = require('markdown-it-anchor')

export default {
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig: {
    siteTitle: 'VitePress Training',
    logo: '/logo.jpeg',
    nav: [
      { text: 'Foo', link: '/foo/' },
      { text: 'Bar', link: '/bar/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
          { text: 'Item D', link: '/item-4' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],
    // sidebar: [
    //   {
    //     text: 'Foo',
    //     items: [
    //       { text: 'Foo one', link: '/foo/one' },
    //       { text: 'Foo two', link: '/foo/two' }
    //     ]
    //   },
    //   {
    //     text: 'Bar',
    //     items: [
    //       { text: 'Bar three', link: '/bar/three' },
    //       { text: 'Bar four', link: '/bar/four' }
    //     ]
    //   },
    // ],
    sidebar: {
      '/foo/': [
        {
          text: 'Foo',
          items: [
            { text: 'Foo Index', link: '/foo/' },
            { text: 'Foo one', link: '/foo/one' },
            { text: 'Foo two', link: '/foo/two' },
            { text: 'Foo five', link: '/foo/five' },
          ]
        }
      ],
      '/bar/': [
        {
          text: 'Bar',
          items: [
            { text: 'Bar Index', link: '/bar/' },
            { text: 'Bar Three', link: '/bar/three' },
            { text: 'Bar Four', link: '/bar/four' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    editLink: {
      pattern: 'https://github.com/ZhaoYLong/vitepress-starter/master/docs/:path',
      text: 'Edit this page on Github'
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
  markdown: {
    // anchor: {
    //   permalink: anchor.permalink.headerLink()
    // },
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2] },
    lineNumbers: false, // 是否启用行号
    // config: (md) => {
    //   md.use(require(''))
    // }
  }
}
