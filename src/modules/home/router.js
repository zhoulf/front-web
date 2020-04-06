import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/index",
            component: () =>
                import(/* webpackChunkName: "layout" */ "./views/Index"),
        },
        {
            path: "/element",
            name: "element",
            hideInMenu: true,
            component: () =>
                import(/* webpackChunkName: "exception" */ "./views/Element")
        },
        {
            path: "*",
            name: "404",
            hideInMenu: true,
            component: () =>
                import(/* webpackChunkName: "exception" */ "@/common/views/404")
        }
    ]
});

router.beforeEach((to, from, next) => {
    /* if (to.path !== from.path) {
        NProgress.start();
    }
    const record = findLast(to.matched, record => record.meta.authority);
    if (record && !check(record.meta.authority)) {
        if (!isLogin() && to.path !== "/user/login") {
            next({
                path: "/user/login"
            });
        } else if (to.path !== "/403") {
            notification.error({
                message: "403",
                description: "你没有权限访问，请联系管理员咨询。"
            });
            next({
                path: "/403"
            });
        }
        NProgress.done();
    } */
    window.console.log('router before')
    next();
});

router.afterEach(() => {
    // NProgress.done();
    window.console.log('router afterEach')

});

export default router;
