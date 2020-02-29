module.exports = {
  base: '/webcomponent-ui/',
  dest: './dist',
  title: 'webcomponent-ui',
  description: 'Web Components 组件库',
  themeConfig: {
    repo: 'gitbu/webcomponent-ui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '组件',
        link: '/components/share/button'
      },
      {
        text: '社区组件',
        items: [
          {
            text: 'Element',
            link: 'https://element.eleme.cn/#/zh-CN'
          },
          {
            text: 'Ant Design',
            link: 'https://ant.design/index-cn',
          },
        ]
      },
    ],
    sidebar: {
      '/components/': [
        {
          title: '通用',
          collapsable: false,
          children: [
            'share/button',
          ]
        },
      ]
    }
  }
}