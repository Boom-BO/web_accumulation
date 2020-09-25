module.exports = {
  // title: 'Primeton VUE组件',
  title: 'Vue 积累',
  // description: '普元 VUE后台系统自定义组件文档',
  description: 'Web前端积累，慢慢好起来了',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/web_accumulation/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[
      { text: 'Vue开发规范', link: '/standard/' }, // 内部链接 以docs为根目录
      { text: 'VsCode EsLint自动格式化', link: '/eslint_auto_format/' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/Boom-BO' }
        ]
      }        
    ],
    sidebar: 'auto',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
};