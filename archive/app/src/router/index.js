import { createRouter, createWebHistory } from "vue-router";
import { Error } from "./errors";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/products/supplies/:id?",
        name: "supplies",
        component: () => import("../views/ProductCategory.vue"),
        props: {
            category: "Supplies",
        },
    },
    {
        path: "/products/foods/:id?",
        name: "foods",
        component: () => import("../views/ProductCategory.vue"),
        props: {
            category: "Foods",
        },
    },
    {
        path: "/products/treats/:id?",
        name: "treats",
        component: () => import("../views/ProductCategory.vue"),
        props: {
            category: "Treats",
        },
    },
    {
        path: "/user",
        name: "user",
        component: () => import("../views/UserView.vue"),
    },
    {
        path: "/404",
        component: () => import("../views/NotFound.vue"),
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
