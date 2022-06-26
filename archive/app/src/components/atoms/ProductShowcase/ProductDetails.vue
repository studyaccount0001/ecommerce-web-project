<template>
    <div>
        <PageHeader :title="product.name" @back="back">
            <section>
                <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div
                        class="grid items-start grid-cols-1 gap-8 md:grid-cols-2"
                    >
                        <div class="flex">
                            <div class="aspect-w-1 aspect-h-1">
                                <img
                                    alt="Product photo"
                                    class="object-cover rounded-xl"
                                    :src="product.image"
                                />
                            </div>
                        </div>

                        <div class="sticky top-0">
                            <div class="flex justify-between">
                                <div class="max-w-[35ch]">
                                    <h1 class="text-2xl font-bold">
                                        {{ product.name }}
                                    </h1>
                                </div>

                                <p class="text-lg font-bold">
                                    US$ {{ product.price }}
                                </p>
                            </div>

                            <details class="relative mt-4 group">
                                <summary class="block">
                                    <div>
                                        <div
                                            class="prose max-w-none group-open:hidden"
                                        >
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptatum magni iusto fugit ex
                                                rerum laboriosam deleniti iure
                                                repellat dignissimos neque eius
                                                ea quos error ipsum nulla
                                                libero, a perferendis ipsam.
                                            </p>
                                        </div>
                                    </div>
                                </summary>
                            </details>

                            <form class="mt-8">
                                <Tag color="blue">
                                    {{ product.productType }}</Tag
                                >
                                <fieldset class="mt-4">
                                    <legend class="mb-1 text-sm font-medium">
                                        Size
                                    </legend>

                                    <div class="flow-root">
                                        <div class="flex flex-wrap -m-0.5">
                                            <label
                                                for="size_xs"
                                                class="cursor-pointer p-0.5"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xs"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    XS
                                                </span>
                                            </label>

                                            <label
                                                for="size_s"
                                                class="cursor-pointer p-0.5"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_s"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    S
                                                </span>
                                            </label>

                                            <label
                                                for="size_m"
                                                class="cursor-pointer p-0.5"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_m"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    M
                                                </span>
                                            </label>

                                            <label
                                                for="size_l"
                                                class="cursor-pointer p-0.5"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_l"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    L
                                                </span>
                                            </label>

                                            <label
                                                for="size_xl"
                                                class="cursor-pointer p-0.5"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xl"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                >
                                                    XL
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="flex gap-8 mt-8">
                                    <div>
                                        <label for="quantity" class="sr-only"
                                            >Qty</label
                                        >

                                        <input
                                            type="number"
                                            id="quantity"
                                            min="1"
                                            value="1"
                                            class="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                                        />
                                    </div>

                                    <Button type="primary" size="large" block>
                                        Add to cart
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageHeader>
    </div>
</template>

<script>
import { PageHeader, Button, Tag } from "ant-design-vue";
import router from "@/router";

export default {
    name: "ProductDetails",
    components: {
        PageHeader,
        Button,
        Tag,
    },
    mounted() {
        this.getCurrentProduct();
    },
    data() {
        return {
            router,
            back: this.$router.back,
            product: {
                name: null,
                description: null,
                price: 0,
                image: null,
                productType: null,
            },
        };
    },
    methods: {
        async getCurrentProduct() {
            let req = await fetch(
                `http://localhost:3000/${this.$route.name}/${this.$route.params.id}`
            );

            let data = await req.json();

            this.product.name = data.name;
            this.product.description = data.description;
            this.product.price = parseInt(data.price);
            this.product.image = data.image;
            this.product.productType = data.productType.toUpperCase();

            console.log(this.product.productType);
        },
    },
};
</script>
