module.exports = {
    title: 'Hello skyUI',
    description: '一个基于vue，仿elementUI开发的UI组件库',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    plugins: {
        redirect: {
            redirectors: [
                // 定制化重定向
                {
                    base: '/components/', // 将 `/my-plugins/` 自动重定向到某个子页面
                    storage: true, // 保存最后一次访问的结果到 `localStorage`，供下次重定向使用
                    alternative: [
                        // 提供一个备选列表，如果都找不到就只能 404 Not Found 喽
                        'button', // 相当于 `/my-plugins/mathjax/`

                    ],
                },
            ],
        },
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: true,
                children: ['/guide/']
            },
            {
                title: '组件',
                collapsable: false,

                path: '/components/',
                children: [
                    {
                        title: 'button',
                        path: '/components/button'
                    }
                ]
            }
        ]
    }
}
