<template>
    <div>
        <navbar />
    </div>
</template>

<script>
import Navbar from "@/components/atoms/Navbar/Navbar.vue";
import FluffFooter from "@/components/atoms/Footer/Footer.vue";
export default {
    name: "UserView",
    components: {
        Navbar,
        FluffFooter,
    },
};
</script>

<style lang="scss" scoped></style>
