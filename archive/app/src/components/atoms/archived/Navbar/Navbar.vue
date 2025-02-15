<template>
    <header>
        <div
            class="fixed z-50 flex items-center w-full shadow max-h-96 bg-fluffBlue-12 md:max-h-16"
        >
            <div
                class="container justify-between px-16 py-2 mx-auto md:flex md:items-center"
            >
                <div class="flex items-center justify-between">
                    <div>
                        <router-link to="/" @click="scrollToTop()">
                            <Logo class="w-36" />
                        </router-link>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <Button
                            type="primary"
                            shape="circle"
                            @click="toggleMenu"
                        >
                            <template #icon>
                                <MenuOutlined v-if="!isMenuOpen" />
                                <CloseOutlined v-else />
                            </template>
                        </Button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <nav
                    :class="isMenuOpen ? 'block' : 'hidden'"
                    class="items-center md:flex"
                >
                    <div
                        class="flex flex-col my-4 md:flex-row md:mx-6"
                        id="nav-links"
                    >
                        <router-link
                            class="link"
                            to="/products/foods"
                            @click="scrollToTop(), (isMenuOpen = false)"
                        >
                            <p>Foods</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/products/treats"
                            @click="scrollToTop(), (isMenuOpen = false)"
                        >
                            <p>Treats</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/products/supplies"
                            @click="scrollToTop(), (isMenuOpen = false)"
                        >
                            <p>Supplies</p>
                        </router-link>
                    </div>

                    <div
                        class="flex flex-col items-center justify-center gap-4 md:flex-row"
                    >
                        <div class="flex">
                            <Badge
                                class="my-1 text-sm font-medium transition-colors duration-200 transform cursor-pointer md:mx-4 md:my-0"
                                :count="store.state.cartCount"
                                show-zero
                            >
                                <ShoppingCartOutlined
                                    class="text-2xl cart"
                                    @click="showDrawer"
                                />
                            </Badge>
                        </div>

                        <div
                            class="flex justify-center md:block"
                            v-if="store.state.isLoggedIn"
                        >
                            <div
                                class="flex my-1 text-sm font-medium text-white transition-colors duration-200 transform cursor-pointer md:mx-4 md:my-0"
                            >
                                <UserOutlined class="text-xl" />
                            </div>
                        </div>
                        <div class="flex justify-center md:block" v-else>
                            <div
                                class="flex items-center justify-center gap-6 my-1 text-sm font-medium text-white transition-colors duration-200 transform md:mx-4 md:my-0"
                            >
                                <Button type="primary" @click="showLogin">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <CartDrawer
        v-model:visible="visibleDrawer"
        title="Cart"
        placement="right"
        width="400"
    >
        <Empty description="There's no products in your cart!" />
    </CartDrawer>

    <LoginModal :visibleModal="visibleLogin" />
</template>

<script>
import { ref } from "vue";
import { Button, Badge, Drawer as CartDrawer, Empty } from "ant-design-vue";
import LoginModal from "./LoginModal.vue";
import store from "@/store";

import {
    ShoppingCartOutlined,
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
} from "@ant-design/icons-vue";

import Logo from "@/components/atoms/Logo/Logo.vue";

export default {
    name: "Navbar",
    components: {
        Logo,
        Badge,
        Empty,
        Button,
        LoginModal,
        CartDrawer,
        MenuOutlined,
        UserOutlined,
        CloseOutlined,
        ShoppingCartOutlined,
    },
    setup() {
        const visibleDrawer = ref(false);

        return {
            visibleDrawer,
        };
    },
    data() {
        return {
            isMenuOpen: false,
            store,
            visibleLogin: false,
        };
    },
    methods: {
        showDrawer() {
            this.visibleDrawer = true;
        },
        showLogin() {
            this.visibleLogin = true;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.cart {
    color: white !important;

    &:hover {
        color: rgb(24, 144, 255) !important;
    }
}
.link {
    @apply text-white;
}

.link p {
    @apply my-1 text-sm font-medium transition-colors duration-200 transform hover:text-blue-500 md:mx-4 md:my-0;
}

.link.active {
    @apply font-bold text-fluffBlue-4;
}
</style>
