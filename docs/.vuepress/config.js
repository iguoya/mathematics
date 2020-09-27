module.exports = {
  title: ' Mathematics Notebook',
  description: ' Note, Practice and Solving Problems',
  base: '/mathematics/',
//  dest: 'public',
  plugins: [
    ['autobar'],
    ['vuepress-plugin-mermaidjs'],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/home/'
      },
      {
        text: 'H5',
        link: '/H5/'
      },
      {
        text: '规范',
        link: '/Standard/'
      }
    ],
    sidebar: [

    ]
  }
}
