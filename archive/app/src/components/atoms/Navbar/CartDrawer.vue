<template>
    <div>
        <Drawer
            :visible="visibleDrawer"
            title="Cart"
            placement="right"
            width="400"
            class="fix"
            @close="closeDrawer"
        >
            <Empty
                description="There's no products in your cart!"
                v-if="this.$store.state.cartCount === 0"
            />
        </Drawer>
    </div>
</template>

<script>
import { ref } from "vue";
import { Drawer, Empty } from "ant-design-vue";

export default {
    name: "CartDrawer",
    components: {
        Drawer,
        Empty,
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

<style lang="scss" scoped>
.fix > * {
    @apply z-[99999];
}
</style>
