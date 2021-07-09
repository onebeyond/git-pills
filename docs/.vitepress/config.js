module.exports = {
  title: 'Git Pills',
  description: 'Just playing around with Git.',
  lang: 'en-US',
  base: '/git-pills/',
  themeConfig: {
    repo: 'guidesmiths/git-pills',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: '',
    //   indexName: 'vitepress'
    // },


    nav: [
      { text: 'Home', link: '/', activeMatch: '^/$|^/git-pills/' },
      { text: 'Pills', link: '/pills/', activeMatch: '^/pills/' },
      { text: 'How to', link: '/how-to/', activeMatch: '/how-to/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
    }
  },
  markdown: {
    lineNumbers: true
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        // { text: 'Algolia Search', link: '/config/algolia-search' },
        // { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
