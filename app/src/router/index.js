import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/products/:category",
        name: "products",
        component: () => import("../views/MultipleProductsMainView.vue"),
        props: (route) => ({
            category: route.params.category,
        }),
    },
    {
        path: "/product/:id",
        name: "product",
        component: () => import("../views/SingleProductDetailsView.vue"),
        props: (route) => ({ id: route.params.id }),
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../views/AccountView.vue"),
    },
    {
        path: "/404",
        component: () => import("../views/NotFoundView.vue"),
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior: () => ({ top: 0 }),
    linkExactActiveClass: "active",
    mode: "history",
    routes,
});

export default router;
