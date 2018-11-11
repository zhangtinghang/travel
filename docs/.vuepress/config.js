module.exports = {
    title: '张先生的旅途',
    description: 'hello, there are my schedule notes。',
    themeConfig: {
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        {
            text: 'Languages',
            items: [
            { text: '中文', link: '/language/chinese' },
            { text: 'English', link: '/language/english' }
            ]
        },
        { text: 'about', link: '/about/' },
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        }
    },
  }