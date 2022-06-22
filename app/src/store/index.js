import { createStore } from "vuex";

export default createStore({
    state: {
        isLoggedIn: false,
        doesUserHaveRegisteredCard: false,
        cartCount: 0,
        cartValues: {},
        cartItems: [],
        selectedProduct: {},
        totalPrice: 0,
        productIds: [],
        activeFilters: [],
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
