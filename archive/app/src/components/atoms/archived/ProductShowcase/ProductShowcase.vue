<template>
    <div>
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
                                :key="product"
                                :name="product.name"
                                :price="product.price"
                                :image="product.image"
                                :productId="product.id"
                                :category="product.category.toLowerCase()"
                                :subcategory="product.subcategory"
                                :rating="product.rating"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import products from "@/data/product";

export default {
    name: "ProductShowcase",
    components: {
        ProductCard,
    },
    data() {
        return {
            filteredProducts: products,
        };
    },
    methods() {},
};
</script>
