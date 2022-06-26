<template>
    <div>
        <Spin :spinning="loading">
            <section class="bg-white">
                <div class="container py-8 mx-auto">
                    <div class="lg:flex lg:-mx-2">
                        <div class="mt-6 lg:mt-0 lg:px-2">
                            <div
                                class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            >
                                <!-- Product list rendering -->
                                <ProductCard
                                    v-for="product in filteredProducts"
                                    :key="product.id"
                                    :name="product.name"
                                    :price="product.price"
                                    :image="product.image"
                                    :productId="product.id"
                                    :category="this.$route.name"
                                    :subcategory="product.productType"
                                    @click="scrollToTop"
                                >
                                </ProductCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Spin>
    </div>
</template>

<script>
import { reactive } from "vue";
import { Spin } from "ant-design-vue";
import ProductCard from "./ProductCard.vue";

export default {
    name: "ProductShowcase",
    components: {
        ProductCard,
        Spin,
    },
    mounted() {
        this.fetchProducts();
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("product")) {
                this.fetchProducts();
            }
        },
    },
    data() {
        return {
            filteredProducts: reactive([]),
            loading: false,
        };
    },
    methods: {
        async fetchProducts(filters) {
            let foo = {};

            if (filters) {
                foo = filters;
            }

            this.loading = true;

            let req = await fetch(`http://localhost:3000/${this.$route.name}/`);

            let data = await req.json();

            setTimeout(() => {
                this.loading = false;
            }, 250);

            this.filteredProducts = data;

            if (foo.length > 0) {
                this.filteredProducts = this.filterProducts(filters);
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
            });
        },
        async filterProducts(filters) {
            let filteredProducts = [];

            // console.log(filters);

            for (let i = 0; i < filters.length; i++) {
                let query = `http://localhost:3000/${
                    this.$route.name
                }/?productType=${filters[i].toLowerCase()}`;

                console.log(query);

                let req = await fetch(query);

                let data = await req.json();

                data.map((item) => {
                    filteredProducts.push(item);
                });

                console.log(filteredProducts);
            }

            this.filteredProducts = filteredProducts;
        },
    },
};
</script>
