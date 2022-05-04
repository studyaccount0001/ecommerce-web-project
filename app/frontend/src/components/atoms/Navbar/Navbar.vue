<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/foods">Food</router-link>
            <router-link to="/treats">Treats</router-link>
            <router-link to="/supplies">Supplies</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
    @apply bg-fluffBlue-12 p-7 text-fluffBlue-2 flex gap-4;

    a {
        @apply font-normal text-fluffBlue-1;

        &.router-link-exact-active {
            @apply font-bold text-fluffBlue-5;
        }
    }
}
</style>
