module.exports = {
  title: 'Vue移动端项目模版',
  description: '模版说明',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '外部链接', items: [
        { text: 'vue-cli', link: '/' },
        { text: 'vuepress', link: '/' },
        { text: 'axios', link: '/' }
      ]}
    ],
    sidebar: [
      '/guide/structure.md',
      '/guide/features.md',
      '/guide/component.md',
      '/guide/development.md',
      '/guide/questions.md',
      '/guide/utils.md',
      '/guide/versions.md',
      '/guide/api-list.md',
    ]
  },
}
