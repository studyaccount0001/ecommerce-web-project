import { createStore } from "vuex";

export default createStore({
    state: {
        isLoggedIn: false,
        cart: {},
        user: {},
        products: {},
        categoryData: {},
    },
    getters: {
        products: (state) => state.products,
        categoryData: (state) => state.categoryData,
        cartCount: (state) =>
            Object.values(state.cart).reduce(
                (sum, item) => sum + item.amount,
                0
            ),
        cart: (state) => state.cart,
        user: (state) => state.user,
    },
    mutations: {
        setUser: (state, user) => (state.user = user),
        loggedIn: (state) => (state.isLoggedIn = true),
        addProduct: (state, product) => (state.products[product.id] = product),
        addCategoryData: (state, data) => (state.categoryData[data.id] = data),
        addToCart: (state, product) => {
            state.cart[product.id] = {
                ...product,
                amount: state.cart[product.id]?.amount + 1 || 1,
            };

            /* Data persistency */
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, product) => {
            if (state.cart[product.id].amount == 1) {
                delete state.cart[product.id];
            } else {
                state.cart[product.id] = {
                    ...product,
                    amount: state.cart[product.id]?.amount - 1 || 0,
                };
            }

            /* Data persistency */
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        editUser: (state, user) => {
            state.user = user;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            let products = await fetch(`http://localhost:3000/products`);

            // let products = await fetch(
            //     `http://localhost:3000/products`,
            //     {
            //         method: "POST",
            //         body: JSON.stringify(),
            //     }
            // );
            let data = await products.json();

            await new Promise((resolve) => setTimeout(resolve, 500));

            for (const item of data) {
                commit("addProduct", item);
            }

            return data;
        },
        async fetchCategoryData({ commit }) {
            let categories = await fetch(`http://localhost:3000/categories`);
            let data = await categories.json();

            await new Promise((resolve) => setTimeout(resolve, 500));

            for (const item of data) {
                commit("addCategoryData", item);
            }

            return data;
        },
        async findUserData({ commit }, userData) {
            let user = await fetch(
                `http://localhost:3000/users?email=${userData.email}`
            );
            let data = await user.json();

            if (data[0].password === userData.password) {
                commit("setUser", data[0]);
                commit("loggedIn");

                localStorage.setItem("user", JSON.stringify(data[0]));

                return true;
            }

            return false;
        },
    },
    modules: {},
});
