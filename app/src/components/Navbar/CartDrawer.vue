<template>
    <div>
        <Drawer
            :visible="visibleDrawer"
            title="Cart"
            placement="right"
            class="fix"
            @close="closeDrawer"
        >
            <Empty
                description="There's no products in your cart!"
                v-if="this.$store.getters.cartCount === 0"
            />
            <div class="flex flex-col">
                <Card v-for="item in this.$store.getters.cart" :key="item.id">
                    <div class="flex items-center gap-8">
                        <div class="image">
                            <Avatar :size="96" :src="item.image" />
                        </div>

                        <div class="flex flex-col items-start justify-between">
                            {{ item.name.split(",")[0] }}
                            <Stepper :product="item" />
                        </div>
                    </div>
                </Card>
            </div>
        </Drawer>
    </div>
</template>

<script>
import { ref } from "vue";
import Stepper from "../Stepper/Stepper.vue";
import {
    Drawer,
    Empty,
    Card,
    Button,
    InputNumber,
    Avatar,
} from "ant-design-vue";

export default {
    name: "CartDrawer",
    components: {
        Drawer,
        Empty,
        Card,
        Button,
        InputNumber,
        Stepper,
        Avatar,
    },
    setup() {
        const visibleDrawer = ref(false);

        return {
            visibleDrawer,
        };
    },
    methods: {
        showDrawer() {
            this.visibleDrawer = true;
        },
        closeDrawer() {
            this.visibleDrawer = false;
        },
    },
};
</script>
