import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductCategory from "../views/ProductCategory.vue";
import NotFound from "../views/NotFound.vue";

import categories from "@/data/category";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/supplies/:product?/:id?",
        name: "supplies",
        component: <ProductCategory />,
        props: {
            category: categories.supplies,
        },
    },
    {
        path: "/foods",
        name: "foods",
        component: <ProductCategory />,
        props: {
            category: categories.foods,
        },
    },
    {
        path: "/treats",
        name: "treats",
        component: <ProductCategory />,
        props: {
            category: categories.treats,
        },
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
    linkExactActiveClass: "active",
    routes,
});

export default router;
