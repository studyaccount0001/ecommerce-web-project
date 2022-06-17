import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductCategory from "../views/ProductCategory.vue";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/supplies/:product?/:id?",
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
