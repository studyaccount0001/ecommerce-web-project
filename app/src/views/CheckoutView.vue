<template>
    <Navbar />

    <div class="flex flex-col justify-center max-w-screen-md mx-auto">
        <div class="w-full max-w-screen-md my-4">
            <Empty
                :description="`In order to checkout, you need to add some products to your cart.`"
                v-if="isCartEmpty"
            />

            <Checkout v-else />

            <div class="flex justify-between gap-2 mt-4" v-if="!isCartEmpty">
                <div class="flex gap-2">
                    <h1>Subtotal:</h1>
                    <p>
                        US$
                        {{ $store.getters.subtotalCart.toFixed(2) }}
                    </p>
                    +
                    <p>
                        US$
                        {{ $store.getters.shipping.toFixed(2) }}
                        (shipping)
                    </p>
                </div>
                <div class="flex gap-2">
                    <h1>Total:</h1>
                    <p>
                        US$
                        {{
                            (
                                $store.getters.subtotalCart +
                                $store.getters.shipping
                            ).toFixed(2)
                        }}
                    </p>
                </div>
            </div>
            <Button type="primary" :disabled="isCartEmpty" @click="toggleModal"
                >Confirm Order</Button
            >
        </div>
    </div>
    <Modal :visible="openModal" ok-text="Finish order" @ok="finishOrder">
    </Modal>
</template>

<script>
import {
    PageHeader,
    Card,
    Button,
    Avatar,
    Empty,
    Steps,
    Step,
    Modal,
    message,
} from "ant-design-vue";

import { ClearOutlined } from "@ant-design/icons-vue";

import store from "@/store";

import Stepper from "@/components/Stepper/CartStepper.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Checkout from "@/components/Checkout/Checkout.vue";

export default {
    components: {
        Navbar,
        Footer,
        PageHeader,
        Card,
        Stepper,
        Steps,
        Step,
        Button,
        Avatar,
        Empty,
        ClearOutlined,
        Checkout,
        Modal,
    },
    data() {
        return {
            openModal: false,
        };
    },
    computed: {
        isCartEmpty() {
            return this.$store.getters.cartCount === 0;
        },
    },
    methods: {
        toggleModal() {
            this.openModal = !this.openModal;
        },
        clearProductAmount(product) {
            store.commit("clearProductAmount", product);
        },
        finishOrder() {
            this.$store.dispatch("finishOrder").then(() => {
                this.openModal = false;
                message.success("Order placed successfully!");
            });
        },
    },
};
</script>
