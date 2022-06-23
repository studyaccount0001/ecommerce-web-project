<template>
    <div class="main">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    created() {
        let cart = localStorage.getItem("cart");
        let user = localStorage.getItem("user");

        if (cart) this.$store.state.cart = JSON.parse(cart);

        if (user) {
            this.$store.state.isLoggedIn = true;
            this.$store.state.user = JSON.parse(user);
        }
    },
};
</script>
