<template>
    <div class="main">
        <Navbar />
        <div class="content">
            <HeroSection />
        </div>
        <FluffFooter />
    </div>
</template>

<script>
import { Button } from "ant-design-vue";
import Navbar from "@/components/atoms/Navbar/Navbar.vue";
import FluffFooter from "@/components/atoms/Footer/Footer.vue";
import HeroSection from "@/components/atoms/HeroSection/HeroSection.vue";

export default {
    name: "HomeView",
    components: {
        Button,
        Navbar,
        FluffFooter,
        HeroSection,
    },
};
</script>

<style lang="scss" scoped>
.main {
    @apply h-screen;
}

/* Padding top of 20 is mandatory to sticky navbar to work. */
.content {
    @apply h-full pt-16;
}
</style>
