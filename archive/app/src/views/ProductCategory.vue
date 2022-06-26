<template>
    <div class="main">
        <Navbar />
        <div class="content">
            <PageHeader :title="category" v-if="checkRouteId()">
                <!-- <Tag
                    v-for="(item, id) in categories[this.category.toLowerCase()]
                        .subcategories"
                    :key="id"
                    @click="setFilter(item, id)"
                    :checked="this.activeFilters[id].value"
                >
                    {{ item }}
                </Tag> -->
                <Select
                    v-model:value="selectedFilters"
                    mode="tags"
                    :options="active"
                    class="w-full max-w-xs"
                    placeholder="Category"
                    @change="setFilter"
                >
                </Select>
                <ProductShowcase ref="productShowcase" />
            </PageHeader>
            <div v-else>
                <ProductDetails />
            </div>
        </div>
        <FluffFooter />
    </div>
</template>

<script>
import { ref } from "vue";
import categories from "@/data/category.js";

import {
    Breadcrumb,
    BreadcrumbItem,
    PageHeader,
    CheckableTag as Tag,
    Select,
} from "ant-design-vue";

import Navbar from "@/components/atoms/Navbar/Navbar.vue";
import FluffFooter from "@/components/atoms/Footer/Footer.vue";
import ProductShowcase from "@/components/atoms/ProductShowcase/ProductShowcase.vue";
import ProductDetails from "@/components/atoms/ProductShowcase/ProductDetails.vue";

export default {
    name: "ProductCategory",
    props: {
        category: {
            type: String,
            required: true,
        },
    },
    components: {
        Navbar,
        FluffFooter,
        Breadcrumb,
        BreadcrumbItem,
        PageHeader,
        ProductShowcase,
        Tag,
        ProductDetails,
        Select,
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("product")) {
                let currentFilters = categories[to.name].subcategories;

                this.active = [];

                currentFilters.map((item) => {
                    this.active.push({
                        value: item,
                    });
                });
            }
        },
    },
    data() {
        let currentFilters =
            categories[this.category.toLowerCase()].subcategories;

        let activeFilters = [];

        currentFilters.map((item) => {
            activeFilters.push({
                value: item,
            });
        });

        return {
            selectedFilters: ref([]),
            categories,
            check: false,
            active: activeFilters,
        };
    },
    methods: {
        checkRouteId() {
            return this.$route.params.id === "";
        },
        updateFilters() {
            let currentFilters =
                categories[this.category.toLowerCase()].subcategories;

            let activeFilters = [];

            currentFilters.map((item) => {
                activeFilters.push({
                    value: item,
                });
            });

            return activeFilters;
        },
        setFilter() {
            this.$refs.productShowcase.fetchProducts(this.selectedFilters);
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    @apply h-full;
}

.content {
    @apply pt-8 max-w-screen-2xl mx-auto;
}
</style>
