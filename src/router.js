import Layout from './component/layout/layout.vue'
const routers = [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        name: 'index',
        component: Layout,
        children: [{
            path: '',
            name: 'index',
            component: (resolve) => require(['./views/index.vue'], resolve),
            meta: {
                title: '首页'
                ,icon: 'home'
                ,auth: true
            }
        }]
    },
    {
        path: '/exam',
        meta: {
            title: '所有试卷'
        },
        name: 'exam',
        component: Layout,
        children: [
            {
                path: 'list',
                name: 'list',
                component: (resolve) => require(['./views/examlist.vue'], resolve),
                meta: {
                    title: '所有试卷'
                    ,icon: 'home'
                    ,auth: true
                }
            }
        ]
    }
];
export default routers;