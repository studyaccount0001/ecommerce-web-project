import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductCategory from "../views/ProductCategory.vue";
import NotFound from "../views/NotFound.vue";
import UserView from "../views/UserView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/products/supplies/:id?",
        name: "supplies",
        component: <ProductCategory />,
        props: {
            category: "Supplies",
        },
    },
    {
        path: "/products/foods/:id?",
        name: "foods",
        component: <ProductCategory />,
        props: {
            category: "Foods",
        },
    },
    {
        path: "/products/treats/:id?",
        name: "treats",
        component: <ProductCategory />,
        props: {
            category: "Treats",
        },
    },
    {
        path: "/user",
        name: "user",
        component: UserView,
    },
    {
        path: "/404",
        component: NotFound,
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode: "history",
    linkExactActiveClass: "active",
    routes,
});

export default router;
