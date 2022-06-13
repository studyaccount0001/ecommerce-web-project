import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductCategory from "../views/ProductCategory.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/supplies",
        name: "supplies",
        component: <ProductCategory category="Supplies" />,
    },
    {
        path: "/foods",
        name: "foods",
        component: <ProductCategory category="Foods" />,
    },
    {
        path: "/treats",
        name: "treats",
        component: <ProductCategory category="Treats" />,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: "active",
    routes,
});

export default router;
