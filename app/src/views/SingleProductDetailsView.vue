<template>
    <Spin :spinning="loading">
        <PageHeader
            :title="`Go back to main section`"
            class="mx-auto max-w-screen-2xl"
            @back="this.$router.back"
        >
            <div class="flex flex-col flex-wrap gap-8">
                <img
                    :src="this.product.image"
                    alt=""
                    class="object-cover w-full h-full"
                />

                <div class="flex flex-col">
                    <h1>{{ this.product.name.split(",")[0] }}</h1>
                    <p class="text-xl font-bold">US${{ this.product.price }}</p>
                </div>
            </div>
        </PageHeader>
    </Spin>
</template>

<script>
import { Spin, PageHeader, Tag } from "ant-design-vue";

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        Spin,
        PageHeader,
        Tag,
    },
    created() {
        this.$store
            .dispatch("fetchProducts")
            .then(() => (this.loading = false));
    },
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        product() {
            return this.$store.getters.products[this.id];
        },
        title() {
            return this.product.category;
        },
    },
};
</script>
