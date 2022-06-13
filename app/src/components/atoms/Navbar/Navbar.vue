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
        <div
            class="fixed z-50 flex items-center w-full h-20 shadow bg-fluffBlue-12"
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
                        class="flex flex-col md:flex-row md:mx-6"
                        id="nav-links"
                    >
                        <router-link
                            class="link"
                            to="/foods"
                            @click="scrollToTop()"
                        >
                            <p>Food</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/treats"
                            @click="scrollToTop()"
                        >
                            <p>Treats</p>
                        </router-link>
                        <router-link
                            class="link"
                            to="/supplies"
                            @click="scrollToTop()"
                        >
                            <p>Supplies</p>
                        </router-link>
                    </div>

                    <div class="flex justify-center md:block">
                        <div
                            class="my-1 text-sm font-medium text-white transition-colors duration-200 transform cursor-pointer hover:text-blue-500 md:mx-4 md:my-0"
                        >
                            <ShoppingCartOutlined class="text-xl" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { Button } from "ant-design-vue";
import store from "@/store";

import {
    ShoppingCartOutlined,
    MenuOutlined,
    CloseOutlined,
} from "@ant-design/icons-vue";

import Logo from "@/components/atoms/Logo/Logo.vue";

export default {
    name: "Navbar",
    components: {
        Button,
        Logo,
        ShoppingCartOutlined,
        MenuOutlined,
        CloseOutlined,
    },
    data() {
        return {
            isMenuOpen: false,
            store,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
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
