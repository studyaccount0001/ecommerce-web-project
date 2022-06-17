<template>
    <header>
        <!-- <header class="sticky top-0 z-50 shadow-sm">
            <div
                class="flex items-center justify-between h-16 max-w-screen-xl mx-auto"
            >
                <div class="flex flex-1 w-0 lg:hidden">
                    <button
                        class="p-2 text-gray-600 bg-gray-100 rounded-full"
                        type="button"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewbox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div class="flex items-center space-x-4">
                    <span class="w-20 h-10 bg-gray-200 rounded-lg"></span>

                    <router-link to="/">
                        <Logo class="w-36" />
                    </router-link>
                </div>

                <nav
                    class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                >
                    <router-link to="/foods">Food</router-link>
                    <router-link to="/treats">Treats</router-link>
                    <router-link to="/supplies">Supplies</router-link>
                </nav>

                <div class="items-center hidden space-x-4 lg:flex">
                    <router-link to="/login">Login</router-link>
                </div>
            </div>

            <div class="border-t border-gray-100 lg:hidden">
                <nav
                    class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
                >
                    <router-link to="/">Home</router-link>
                    <router-link to="/foods">Food</router-link>
                    <router-link to="/treats">Treats</router-link>
                    <router-link to="/supplies">Supplies</router-link>
                </nav>
            </div>
        </header> -->
        <div class="fixed z-50 flex items-center w-full shadow bg-fluffBlue-12">
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
                            to="/foods"
                            @click="scrollToTop(), (isMenuOpen = false)"
                        >
                            <p>Food</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/treats"
                            @click="scrollToTop(), (isMenuOpen = false)"
                        >
                            <p>Treats</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/supplies"
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
                                <router-link
                                    class="link"
                                    to="/login"
                                    @click="scrollToTop()"
                                >
                                    <Button type="primary"> Login </Button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <Drawer
        v-model:visible="visibleDrawer"
        title="Cart"
        placement="right"
        width="400"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
</template>

<script>
import { ref } from "vue";
import { Button, Badge, Drawer } from "ant-design-vue";
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
        Button,
        Logo,
        Badge,
        Drawer,
        ShoppingCartOutlined,
        MenuOutlined,
        CloseOutlined,
        UserOutlined,
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
        };
    },
    methods: {
        showDrawer() {
            this.visibleDrawer = true;
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
