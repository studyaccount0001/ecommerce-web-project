import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import { message } from "ant-design-vue";
import { Role } from "@/roles";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        meta: { authorize: Role.Any },
    },
    {
        path: "/products/:category",
        name: "products",
        component: () => import("../views/MultipleProductsMainView.vue"),
        props: (route) => ({
            category: route.params.category,
        }),
        meta: { authorize: Role.Any },
    },
    {
        path: "/product/:id",
        name: "product",
        component: () => import("../views/SingleProductDetailsView.vue"),
        props: (route) => ({ id: route.params.id }),
        meta: { authorize: Role.Any },
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../views/AccountView.vue"),
        beforeEnter: (to, from, next) => {
            if (store.getters.logged) {
                next();
            } else {
                message.error("You must be logged in to access this page");
                next("/");
            }
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/RegisterView.vue"),
        beforeEnter: (to, from, next) => {
            if (store.getters.logged) {
                next("/");
                message.warning("You are already logged in");
            } else {
                next();
            }
        },
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () => import("../views/CheckoutView.vue"),
        beforeEnter: (to, from, next) => {
            if (store.getters.logged) {
                next();
            } else {
                message.info("You must be logged in to finish your order!");
                next("/register");
            }
        },
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
