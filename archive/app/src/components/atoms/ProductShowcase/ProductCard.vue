<template>
    <router-link :to="{ name: category, params: { id: productId } }">
        <div class="p-4 border-2 rounded">
            <img :src="image" alt="" class="object-cover w-screen h-72" />
            <div class="my-4">
                <Tag color="blue"> {{ subcategory.toUpperCase() }}</Tag>
            </div>
            <div>
                <h1>{{ name.toUpperCase() }}</h1>
                <p>US$ {{ price }}</p>
            </div>
            <div class="my-2">
                <Button type="primary" size="large" block>
                    <ShoppingCartOutlined />
                    Add to cart
                </Button>
            </div>
        </div>
    </router-link>
</template>

<script>
import { Button, Tag } from "ant-design-vue";
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
    },
    components: {
        Button,
        Tag,
        ShoppingCartOutlined,
    },
};
</script>
