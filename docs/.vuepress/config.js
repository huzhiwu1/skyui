module.exports = {
    title: 'Hello skyUI',
    description: '一个基于vue，仿elementUI开发的UI组件库',
    base: '/skyui/',
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
            { text: '主页', link: '/' },
            { text: '快速入门', link: '/guide/' },
            { text: 'github', link: 'https://github.com/huzhiwu1/skyui' }
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: '快速入门',
                collapsable: true,
                children: ['/guide/']
            },
            {
                title: '组件',
                collapsable: false,

                path: '/components/',
                children: [
                    {
                        title: 'Button',
                        path: '/components/button'
                    },
                    {
                        title: 'Grid',
                        path: '/components/grid'
                    },
                    {
                        title: 'Collapse',
                        path: '/components/collapse'
                    },
                    {
                        title: 'Input',
                        path: '/components/input'
                    },
                    {
                        title: 'Popover',
                        path: '/components/popover'
                    },
                    {
                        title: 'Toast',
                        path: '/components/toast'
                    },
                    {
                        title: "Tabs",
                        path: '/components/tabs'
                    }
                ]
            },

        ]
    }
}
