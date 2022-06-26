<template>
    <div
        class="flex flex-col items-center justify-between p-4 bg-white border rounded shadow hover:shadow-md"
    >
        <router-link :to="{ name: 'product', params: { id: productId } }">
            <div>
                <img
                    :src="image"
                    alt=""
                    class="object-cover w-screen rounded h-72"
                />
                <div class="my-4">
                    <Tag color="blue"> {{ subcategory.toUpperCase() }}</Tag>
                    <Tag color="pink"> {{ specie.toUpperCase() }}</Tag>
                </div>
                <div class="flex flex-col justify-between">
                    <h1>{{ name.toUpperCase() }}</h1>
                    <p>US$ {{ price }}</p>
                </div>
            </div>
        </router-link>
        <div class="flex w-full my-2">
            <Button type="primary" size="large" @click="info" block>
                <ShoppingCartOutlined />
                Add to cart
            </Button>
        </div>
    </div>
</template>

<script>
import { Button, Tag, message } from "ant-design-vue";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

export default {
    name: "ProductCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: undefined,
            required: true,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        productId: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        subcategory: {
            type: String,
            required: true,
        },
        specie: {
            type: String,
            required: true,
        },
    },
    methods: {
        info() {
            message.success({
                content: () => "Product added to cart",
                style: {
                    marginTop: "8vh",
                },
            });

            this.$emit("addedToCart");
        },
    },
    components: {
        Button,
        Tag,
        ShoppingCartOutlined,
    },
};
</script>
