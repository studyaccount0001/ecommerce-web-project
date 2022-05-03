import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodView from "../views/FoodView.vue";
import TreatsView from "../views/TreatsView.vue";
import SuppliesView from "../views/SuppliesView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/supplies",
        name: "supplies",
        component: SuppliesView,
    },
    {
        path: "/foods",
        name: "foods",
        component: FoodView,
    },
    {
        path: "/treats",
        name: "treats",
        component: TreatsView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
