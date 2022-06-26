<template>
    <div class="flex-col p-4 border-2 rounded">
        <router-link :to="{ name: category, params: { id: productId } }">
            <img :src="image" alt="" />
        </router-link>
        <div class="my-4">
            <Tag color="blue"> {{ subcategory }}</Tag>
        </div>
        <div>
            <Rate v-model:value="rating" />
            <h1>{{ name }}</h1>
            <p>US$ {{ price }}</p>
        </div>
        <div class="my-2">
            <Button type="primary" size="large" block>
                <ShoppingCartOutlined />
                Add to cart
            </Button>
        </div>
    </div>
</template>

<script>
import { Button, Tag, Rate } from "ant-design-vue";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

export default {
    name: "ProductCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
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
        rating: {
            type: Number,
            required: true,
        },
    },
    components: {
        Button,
        Tag,
        Rate,
        ShoppingCartOutlined,
    },
};
</script>
