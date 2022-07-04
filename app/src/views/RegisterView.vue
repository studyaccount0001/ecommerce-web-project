<template>
    <div>
        <Navbar />
        <div class="mx-auto max-w-screen-2xl" id="main-container">
            <PageHeader>
                <h1 class="text-2xl">Register your new account</h1>
                <div class="w-full h-full">
                    <div class="mt-4">
                        <Form>
                            <div class="flex items-center gap-4 pt-8 pb-2">
                                <p class="text-lg font-medium">Personal</p>
                                <p class="text-gray-400">
                                    Always keep your phone updated so we can
                                    contact you if any delay happens to your
                                    order.
                                </p>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem name="name" class="w-full">
                                    <p class="flex text-zinc-400">Name</p>
                                    <Input
                                        v-model:value="formState.name"
                                        type="text"
                                        placeholder="Insert your name"
                                    />
                                </FormItem>

                                <FormItem name="phone" class="w-full">
                                    <p class="flex text-zinc-400">Phone</p>
                                    <Input
                                        v-model:value="formState.phone"
                                        type="phone"
                                        placeholder="Insert your phone number"
                                    />
                                </FormItem>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem name="email" class="w-full">
                                    <p class="flex text-zinc-400">Email</p>
                                    <Input
                                        v-model:value="formState.email"
                                        type="email"
                                        placeholder="Insert your email"
                                    />
                                </FormItem>
                                <FormItem name="password" class="w-full">
                                    <p class="flex text-zinc-400">Password</p>
                                    <InputPassword
                                        v-model:value="formState.password"
                                        placeholder="Password"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex items-center gap-4 pt-4 pb-2">
                                <p class="text-lg font-medium">Address</p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem name="address" class="w-full">
                                    <p class="flex text-zinc-400">City</p>
                                    <Input
                                        v-model:value="formState.city"
                                        type="phone"
                                        placeholder="Insert your city"
                                    />
                                </FormItem>
                                <FormItem name="zip" class="w-full">
                                    <p class="flex text-zinc-400">ZIP Code</p>
                                    <Input
                                        v-model:value="formState.zip"
                                        type="zip"
                                        placeholder="Insert your zip code"
                                    />
                                </FormItem>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem name="address" class="w-full">
                                    <p class="flex text-zinc-400">Address</p>
                                    <Input
                                        v-model:value="formState.address"
                                        type="phone"
                                        placeholder="Insert your address"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex items-center gap-4 pt-4 pb-2">
                                <p class="text-lg font-medium">Payment</p>
                                <p class="text-gray-400">
                                    Currently we only work with credit card
                                    payment, for now, fill in your credit card
                                    data.
                                </p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem name="card" class="w-full">
                                    <p class="flex text-zinc-400">
                                        Credit Card
                                    </p>
                                    <Input
                                        v-model:value="formState.card"
                                        type="phone"
                                        placeholder="Insert your credit card"
                                    />
                                </FormItem>
                            </div>
                            <div class="flex gap-4">
                                <FormItem>
                                    <Button type="primary" @click="test">
                                        Register
                                    </Button>
                                </FormItem>
                            </div>
                        </Form>
                    </div>
                </div>
            </PageHeader>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

import {
    PageHeader,
    Form,
    FormItem,
    Input,
    Button,
    InputPassword,
    message,
} from "ant-design-vue";

import Navbar from "@/components/Navbar/Navbar.vue";
import Logo from "@/components/Logo/Logo.vue";

export default {
    components: {
        Navbar,
        PageHeader,
        Form,
        FormItem,
        Input,
        Button,
        InputPassword,
        Logo,
    },
    setup() {
        const formState = reactive({
            name: "",
            password: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            card: "",
            role: "Costumer",
        });

        return {
            formState,
        };
    },
    methods: {
        test() {
            console.log(this.formState);
            message.success("Success");
        },
    },
};
</script>

<style lang="scss" scoped></style>
