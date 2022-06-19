import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index.js";

import "./index.css";
import "./style/global.css";
import "ant-design-vue/dist/antd.css";

import { createStore } from "vuex";

const store = createStore({
    state: {
        isLoggedIn: false,
        cartCount: 0,
        cartValues: {},
        cartItems: [],
        selectedProduct: {},
        totalPrice: 0,
        productIds: [],
    },
    getters: {},
    mutations: {
        addToCart(state, product) {
            if (!state.cartValues[product.id]) {
                state.cartValues[product.id] = 1;
                state.cartCount++;
                state.cartItems.push(product);
                state.totalPrice += product.price;
            }
        },
        removeFromCart(state, payload) {
            if (state.cartValues[payload.product.id]) {
                state.cartItems.splice(payload.index, 1);
                delete state.cartValues[payload.product.id];
                state.cartCount--;
                state.totalPrice -= payload.product.price;
            }
        },
    },
    actions: {},
    modules: {},
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
